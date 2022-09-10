import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import Head from "next/head";
import { useSession } from "next-auth/client";
import Currency from "react-currency-formatter";
import amznLogoREV from "../assets/images/amzn-logo-rev.svg";

export default function Checkout () {
  const [session] = useSession();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

// function check(){
//   console.log("hi I am check")
// }
const makePayment = async () => {
  console.log("here...");
  const res = await initializeRazorpay();

  if (!res) {
    alert("Razorpay SDK Failed to load");
    return;
  }

  // Make API call to the serverless API
  const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
    t.json()
  );
  console.log(data);
  var options = {
    key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
    name: "Amazon Pvt Ltd",
    currency: data.currency,
    amount: data.amount,
    order_id: data.id,
    description: "Thankyou for Purchase",
    image: "https://levrose.com/wp-content/uploads/2020/08/amazon.jpg",
    handler: function (response) {
      // Validate payment at server - using webhooks is a better idea.
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: "Ranjan Kumar",
      email: "ranjankjha@gmail.com",
      contact: "+918578898814",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    // document.body.appendChild(script);

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};
  return (
    <>
      <Head>
        <title>Basket - Amazon Clone</title>
        <meta name="description" content="Amazon Clone" />
        <meta name="author" content="Rajdeep Ghosh" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
    
      <div className="bg-gray-100 font-Nunito-Sans antialiased">
        <Header />

        <main className="lg:flex max-w-screen-xl mx-auto">
          {/* Left Section */}
          <div className="flex-grow m-5 shadow-sm">
            <Image
              src="https://bit.ly/3kfRLjc"
              alt="checkout_banner"
              width={1020}
              height={250}
              objectFit="contain"
            />

            <div className="p-5 bg-white">
              <h1 className="text-3xl font-semibold border-b-2 pb-4 mb-8">
                {items.length === 0 ? `Your basket is empty` : `Your Shopping Basket`}
              </h1>

              {items.map((item, index) => {
                return (
                  <CheckoutProduct 
                    key={index}
                    id={item.id}
                    title={item.title}
                    desc={item.desc}
                    category={item.category}
                    price={item.price}
                    rating={item.rating}
                    img={item.img}
                    hasPrime={item.hasPrime}
                  />
                );
              })}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col m-5 p-10 bg-white">
            {items.length > 0 && (
              <>
                <h2 className="whitespace-nowrap">
                  Subtotal ({items.length} items):{" "}
                  <span className="font-bold">
                    <Currency quantity={total} />
                  </span>
                </h2>
                <button
                  // disabled={!session} 
                  className={`btn mt-2 ${session && "from-gray-400 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}
                  onClick={makePayment}
                  >
                  {/* {!session ? `Sign In to checkout` : `Proceed to checkout`} */}
                  {`Proceed to payment`}
                </button>
              </>
            )}
          </div>
        </main>
      </div>
    </>
  );
}



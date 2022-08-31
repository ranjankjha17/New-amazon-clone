import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import Footer from "../components/Footer";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Amazon Clone</title>
        <meta name="description" content="Amazon Clone" />
        <meta name="author" content="Rajdeep Ghosh" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      
      <div className="bg-gray-100 font-Nunito-Sans antialiased">
        <Header />

        <main className="max-w-screen-xl mx-auto">
          <Banner />
          <ProductFeed products={props.products} />
        </main>

        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(res => res.json());

  return { 
    props: {
      products: products
    } 
  };
}

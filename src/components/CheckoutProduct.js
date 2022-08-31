import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct(props) {
  const dispatch = useDispatch();
  
  function removeItem() {
    dispatch(removeFromBasket(props.id));
  }

  return (
    <div className="grid md:grid-cols-5 mb-8">
      <Image
        src={props.img}
        width={200}
        height={200}
        alt="product_image"
        objectFit="contain"
      />

      <div className="md:col-span-3 flex flex-col space-y-1 mx-5 mt-4">
        <h3 className="font-medium md:font-semibold md:text-lg line-clamp-1">{props.title}</h3>
        <div className="flex items-center space-x-2">
          <StarIcon className="h-4 text-yellow-500" />
          <p className="text-sm md:text-base">
            {props.rating.rate} <span className="text-xs md:text-sm text-gray-400">({props.rating.count})</span>
          </p>
        </div>
        <p className="text-sm line-clamp-3">{props.desc}</p>
        <div className="text-lg font-semibold">
          <Currency quantity={props.price} currency="USD" />
        </div>
        {props.hasPrime && (
          <div className="flex items-center space-x-2">
            <Image src="https://bit.ly/3prP2qx" width={48} height={48} alt="prime" />
            <p className="hidden md:block text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      
      <div className="w-full flex flex-col justify-center">
        <button onClick={removeItem} className="btn">Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

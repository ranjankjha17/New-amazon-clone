import { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/solid";

function Product({ id, title, desc, category, price, rating, img }) {
  const dispatch = useDispatch();

  const [hasPrime] = useState(Math.random() < 0.5);

  function addItem() {
    const product = { id, title, desc, category, price, rating, img, hasPrime };
    dispatch(addToBasket(product));
  }

  return (
    <div className="flex flex-col m-5 p-10 bg-white z-20 rounded-lg shadow-md">
      <Image
        src={img}
        width={200}
        height={200}
        objectFit="contain"
        alt="product_image"
      />
      <span
        className="py-[0.25rem] px-2 my-3 mt-5 text-xxs uppercase tracking-widest text-[#1a1a2c] bg-[#1a1a2c0d] rounded-2xl"
        style={{ width: "fit-content" }}
      >
        {category}
      </span>
      <h3 className="text-lg font-bold line-clamp-2 h-14 mb-2">{title}</h3>
      <p className="line-clamp-3 mb-8 text-sm">{desc}</p>
      <div className="flex justify-between">
        <div className="text-2xl font-extrabold">
          <Currency quantity={price} currency="USD" />
        </div>
        <div className="flex justify-between items-center space-x-2">
          <StarIcon className="h-4 text-yellow-500" />
          <p>
            {rating.rate} <span className="text-sm text-gray-400">({rating.count})</span>
          </p>
        </div>
      </div>
      
      <div className={`flex items-center space-x-2 ${hasPrime ? `visible` : `invisible`}`}>
        <Image src="https://bit.ly/3prP2qx" width={48} height={48} alt="prime" />
        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
      </div>

      <button onClick={addItem} className="btn">Add to Basket</button>
    </div>
  );
}

export default Product;

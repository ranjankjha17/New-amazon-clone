/* eslint-disable @next/next/no-img-element */
import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 md:-mt-40 lg:-mt-56 mx-auto">
      {products.slice(0, 6).map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            desc={product.description}
            category={product.category}
            price={product.price}
            rating={product.rating}
            img={product.image}
          />
        );
      })}

      <img
        className="hidden md:block md:col-span-full"
        src="https://bit.ly/2Zekxt8"
        alt="advar"
      />

      {products.slice(6, products.length).map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            desc={product.description}
            category={product.category}
            price={product.price}
            rating={product.rating}
            img={product.image}
          />
        );
      })}
    </div>
  );
}

export default ProductFeed;

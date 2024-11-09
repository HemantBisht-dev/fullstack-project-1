import React, { useEffect } from "react";
import { useProductStore } from "../store/product";
import { Link } from "react-router-dom";
import ProductCard from "../components/productCard";

function HomePage() {
  const { getAllProduct, products } = useProductStore();
  // console.log(products);
  
  

  useEffect(() => {
    getAllProduct();
  }, [getAllProduct]);

  return (
    <div className="mt-4 max-w-7xl m-auto flex flex-wrap justify-evenly space-x-1 space-y-4">
      {!products?.length ? (
        <div className=" w-6/12 m-auto px-6 py-24 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-gray-200 text-4xl font-semibold tracking-tight ">
              Current Products
            </h2>
            <p className="mt-10 text-lg/8 text-gray-400">
              No products found.{" "}
              <Link to="/create">
                <span className="text-blue-500 hover:underline hover:text-blue-400">
                  Create a Product
                </span>
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </>
      )}
    </div>
  );
}

export default HomePage;

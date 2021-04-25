import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ categoryName, products }) {
  const listProducts = products.map((product, key) => (
    <ProductItem product={product} key={key} />
  ));
  return (
    <>
      <div className="flex justify-between">
        <div className="text-2xl text-indigo-50 font-semibold select-none">
          {categoryName}
        </div>
        <div className="flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-100 hover:text-indigo-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-4 sm:gap-6 mt-3 p-3">
        {listProducts}
      </ul>
    </>
  );
}

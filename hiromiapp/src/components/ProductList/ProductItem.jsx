import React, { useState } from "react";

export default function ProductItem({ product }) {
  const [countProduct, setCountProduct] = useState(0);
  return (
    <li
      className={`relative col-span-1 flex rounded-2xl ${
        countProduct ? "shadow-hiromi-select" : "shadow-hiromi-sm"
      }`}
    >
      <img
        src={product.image}
        alt="Product"
        className="flex-shrink-0 flex items-center justify-center w-28 h-28 bg-indigo-600 text-white text-sm font-medium rounded-l-2xl select-none"
      />
      <div className="w-28 h-28 absolute bg-gradient-to-tr from-indigo-500 to-pink-500 opacity-30 rounded-l-2xl"></div>
      <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800 rounded-r-2xl truncate">
        <div className="flex-1 px-4 py-2 text-sm truncate cursor-pointer">
          <p className="text-white font-semibold text-lg select-none">
            {product.name}
          </p>
          <p className="text-gray-200 font-medium text-md select-none">
            {product.content}
          </p>
          <div className="flex space-x-3">
            <p className="text-green-100 font-bold text-lg">{product.price}</p>
            {product.isOferta ? (
              <>
                <p className="text-gray-200 font-medium text-lg line-through opacity-70">
                  {product.oldPrice}
                </p>
                <p className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-indigo-600 bg-opacity-60 shadow rounded-full select-none">
                  Oferta 🔥
                </p>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex-shrink-0 h-full z-10">
          <div className="flex flex-col px-4 py-2 h-full justify-between">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 m-auto text-indigo-200 hover:text-pink-200 shadow-hiromi-sm rounded-full"
                viewBox="0 0 20 20"
                fill="currentColor"
                onClick={() => setCountProduct((state) => (state = state + 1))}
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1">
              <div className="w-full h-full flex bg-gradient-to-tr from-indigo-500 to-indigo-600 rounded-sm bg-opacity-40">
                <span className="text-indigo-100 m-auto text-sm select-none">
                  {countProduct}
                </span>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 m-auto text-indigo-200 hover:text-pink-200 shadow-hiromi-sm rounded-full"
                viewBox="0 0 20 20"
                fill="currentColor"
                onClick={() =>
                  countProduct > 0
                    ? setCountProduct((state) => (state = state - 1))
                    : null
                }
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

import React from "react";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import "./styles/Products.css";

export default function Products() {
  const categorias = [
    {
      name: "Promociones",
      products: [
        {
          name: "Explosion Roll",
          content: "30 Roles de Sushi",
          price: "$10",
          image: "http://10.51.12.54:3000/images/usplash/14.jpg",
          isOferta: false,
        },
      ],
    },
    {
      name: "Roles",
      products: [
        {
          name: "Osaka Roll",
          content: "10 Roles de Sushi",
          price: "$5",
          image: "http://10.51.12.54:3000/images/usplash/1.jpg",
          isOferta: false,
        },
        {
          name: "Miyaki Roll",
          content: "20 Roles de Sushi",
          price: "$8",
          image: "http://10.51.12.54:3000/images/usplash/2.jpg",
          isOferta: false,
        },
        {
          name: "Tokyo Rolls",
          content: "10 Roles de Sushi",
          price: "$5",
          oldPrice: "$8",
          image: "http://10.51.12.54:3000/images/usplash/3.jpg",
          isOferta: true,
        },
        {
          name: "Caracas Party",
          content: "20 Roles de Sushi",
          price: "$7",
          oldPrice: "$10",
          image: "http://10.51.12.54:3000/images/usplash/4.jpg",
          isOferta: true,
        },
        {
          name: "Miyaki Roll",
          content: "20 Roles de Sushi",
          price: "$8",
          image: "http://10.51.12.54:3000/images/usplash/2.jpg",
          isOferta: false,
        },
        {
          name: "Tokyo Rolls",
          content: "10 Roles de Sushi",
          price: "$5",
          oldPrice: "$8",
          image: "http://10.51.12.54:3000/images/usplash/3.jpg",
          isOferta: true,
        },
        {
          name: "Caracas Party",
          content: "20 Roles de Sushi",
          price: "$7",
          oldPrice: "$10",
          image: "http://10.51.12.54:3000/images/usplash/4.jpg",
          isOferta: true,
        },
      ],
    },
  ];
  const listCats = categorias.map((categoria, key) => (
    <ProductList
      categoryName={categoria.name}
      products={categoria.products}
      key={key}
    />
  ));
  return (
    <Layout>
      <div className="h-full flex flex-col justify-between px-4 max-w-2xl mx-auto">
        {/* Cuadro de Búsqueda */}
        <div className="flex-shrink-0 sticky top-0 z-10">
          <div className="mt-2">
            <div>
              <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                <div className="flex items-center px-2 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                  <div className="w-full">
                    <label htmlFor="search" className="sr-only">
                      Buscar
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-indigo-800"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full bg-indigo-100 bg-opacity-40 shadow-hiromi-sm rounded-full py-3 pl-10 pr-3 text-md placeholder-indigo-600 focus:outline-none focus:text-indigo-900 focus:placeholder-indigo-700 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                        placeholder="¿Qué estás buscando?"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fin cuadro de búsqueda */}
        <div className="flex-1">
          <div className="space-y-2 overflow-y-auto">
            {/* Promociones */}
            {listCats}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex-shrink-0">
          <p>Hola</p>
        </div>
      </div>
    </Layout>
  );
}

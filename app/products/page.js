"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
        Our Products
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <li
            key={p._id}
            className="bg-gradient-to-br from-white via-gray-50 to-teal-50 border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            {/* Product Image with overlay gradient */}
            <div className="w-full h-64 relative group">
              <img
                src={p.image || "/placeholder.png"}
                alt={p.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Product Info */}
            <div className="p-6 flex flex-col flex-1 bg-gradient-to-r from-white via-teal-50 to-white">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {p.name}
              </h2>
              <p className="text-gray-600 flex-1">{p.description}</p>
              <p className="text-gray-900 font-bold mt-4 text-lg">
                ${p.price}
              </p>
              <Link
                href={`/products/${p._id}`}
                className="mt-4 inline-block bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-center py-2 px-4 rounded-lg shadow hover:opacity-90 transition-all"
              >
                View Details
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

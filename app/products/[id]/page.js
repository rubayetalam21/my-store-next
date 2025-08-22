import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";
import Link from "next/link";

export default async function ProductDetails({ params }) {
  // params is a Promise in latest Next.js, unwrap with await
  const { id } = params;

  const client = await clientPromise;
  const db = client.db("myStore");
  const product = await db
    .collection("products")
    .findOne({ _id: new ObjectId(id) });

  if (!product) {
    return <p className="text-center text-red-500 mt-10">Product not found</p>;
  }

  return (
    <div className="p-10 bg-gray-50 min-h-screen flex justify-center">
      <div className="bg-gradient-to-br from-white via-gray-50 to-teal-50 shadow-xl rounded-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden hover:shadow-2xl transition-shadow duration-300">

        {/* Product Image with gradient overlay */}
        <div className="md:w-1/2 h-80 md:h-auto relative group">
          <img
            src={product.image || "/placeholder.png"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        {/* Product Info Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between bg-gradient-to-r from-white via-teal-50 to-white">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-gray-700 text-lg mb-6">{product.description}</p>
            <p className="text-2xl font-bold text-gray-900">${product.price}</p>
          </div>

          {/* Buttons with gradients */}
          <div className="mt-6 flex gap-4">
            <Link
              href="/products"
              className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:from-gray-300 hover:to-gray-400 transition"
            >
              Back to Products
            </Link>
            <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-2 px-4 rounded-lg shadow hover:opacity-90 transition-all">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

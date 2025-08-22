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
      <div className="bg-white shadow-lg rounded-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/2 h-80 md:h-auto relative">
          <img
            src={product.image || "/placeholder.png"}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-gray-700 text-lg mb-6">{product.description}</p>
            <p className="text-2xl font-bold text-gray-900">${product.price}</p>
          </div>

          <div className="mt-6 flex gap-4">
            <Link
              href="/products"
              className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition"
            >
              Back to Products
            </Link>
            <button className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

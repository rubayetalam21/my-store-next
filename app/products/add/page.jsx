"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
    const { data: session } = useSession();
    const router = useRouter();

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
    });
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    if (!session)
        return <p className="text-red-600">Please log in to add a product.</p>;

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ✅ Validation
        if (!product.name || !product.description || !product.price || !product.image) {
            setMessage("Error: All fields are required");
            return;
        }

        if (!/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(product.image)) {
            setMessage("Error: Please enter a valid image URL (jpg, png, webp, gif).");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(product),
            });

            const data = await res.json();
            if (!res.ok) {
                setMessage(`Error: ${data.error}`);
                setLoading(false);
                return;
            }

            setMessage(`Product "${product.name}" added successfully! 🎉`);
            setProduct({ name: "", description: "", price: "", image: "" });

            // ✅ Redirect after 1.5 sec
            setTimeout(() => {
                router.push("/products");
            }, 1500);
        } catch (err) {
            setMessage("Error: An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-xl mt-10">
            <h1 className="text-3xl font-bold mb-6">Add New Product</h1>

            {message && (
                <p
                    className={`mb-4 text-sm font-medium ${message.startsWith("Error") ? "text-red-600" : "text-green-600"
                        }`}
                >
                    {message}
                </p>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Product Name"
                    value={product.name}
                    onChange={(e) => setProduct({ ...product, name: e.target.value })}
                    className="border p-3 rounded-lg"
                    required
                />
                <textarea
                    placeholder="Description"
                    value={product.description}
                    onChange={(e) =>
                        setProduct({ ...product, description: e.target.value })
                    }
                    className="border p-3 rounded-lg"
                    rows={3}
                    required
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={product.price}
                    onChange={(e) => setProduct({ ...product, price: e.target.value })}
                    className="border p-3 rounded-lg"
                    required
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={product.image}
                    onChange={(e) => setProduct({ ...product, image: e.target.value })}
                    className="border p-3 rounded-lg"
                    required
                />

                <button
                    type="submit"
                    className="bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? "Adding..." : "Add Product"}
                </button>
            </form>
        </div>
    );
}

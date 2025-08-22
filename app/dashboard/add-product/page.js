"use client"
import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function AddProduct() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState("")

  if (status === "unauthenticated") {
    router.push("/login")
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify({ name, description: desc, price }),
    })
    router.push("/products")
  }

  return (
    <form onSubmit={handleSubmit} className="p-10 flex flex-col gap-4">
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2"/>
      <input placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} className="border p-2"/>
      <input placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="border p-2"/>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add Product</button>
    </form>
  )
}

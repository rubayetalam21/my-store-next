import clientPromise from "../../../lib/mongodb"; 

// GET all products
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("myStore"); // <-- replace with your DB name
    const products = await db.collection("products").find({}).toArray();

    return Response.json(products);
  } catch (error) {
    return Response.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

// POST new product
export async function POST(req) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("myStore"); // <-- replace with your DB name
    const result = await db.collection("products").insertOne(body);

    return Response.json({ ...body, _id: result.insertedId });
  } catch (error) {
    return Response.json({ error: "Failed to add product" }, { status: 500 });
  }
}

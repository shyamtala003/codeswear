import { connectToDatabase } from "../utils/mongoDB";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const productCollection = db.collection("product");
  const category = req.query.category; // Assuming the category is passed as a route parameter
  const products = await productCollection.find({ category }).toArray();
  res.status(200).json({ success: true, products });
}

import { connectToDatabase } from "../utils/mongoDB";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { slug } = req.query;
  const { db } = await connectToDatabase();
  const productCollection = db.collection("product");
  const product = await productCollection.findOne({ _id: new ObjectId(slug) });
  res.status(200).json({ success: true, product });
}

import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://shyamtala003:shyam1234@cluster0.fcadqu5.mongodb.net/codeswear";

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri);
  const db = client.db();
  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

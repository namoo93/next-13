import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://skqldk:trqf671g@cluster0.hgod0fx.mongodb.net/?retryWrites=true&w=majority";

let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
	// @ts-ignore
	if (!global._mongo) {
		// @ts-ignore
		global._mongo = new MongoClient(url).connect()
	}
	// @ts-ignore
	connectDB = global._mongo
} else {
	connectDB = new MongoClient(url).connect()
}

export { connectDB };

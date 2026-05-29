import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/dataverse";

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

if (!globalThis.mongooseCache) {
  globalThis.mongooseCache = { conn: null, promise: null };
}

const activeCache = globalThis.mongooseCache as MongooseCache;

export async function connectToDatabase() {
  if (activeCache.conn) {
    return activeCache.conn;
  }

  if (!activeCache.promise) {
    const opts = {
      bufferCommands: false,
    };

    console.log("Connecting to MongoDB at:", MONGODB_URI);
    activeCache.promise = mongoose.connect(MONGODB_URI, opts).then((m) => {
      console.log("Successfully connected to MongoDB");
      return m;
    });
  }

  try {
    activeCache.conn = await activeCache.promise;
  } catch (e) {
    activeCache.promise = null;
    console.error("Failed to connect to MongoDB:", e);
    throw e;
  }

  return activeCache.conn;
}

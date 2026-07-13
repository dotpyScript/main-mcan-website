import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const getClientPromise = (): Promise<MongoClient> => {
  if (!uri) {
    throw new Error('MONGODB_URI is not set');
  }

  if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = new MongoClient(uri).connect();
    }
    return global._mongoClientPromise;
  }

  return new MongoClient(uri).connect();
};

export const clientPromise = getClientPromise();

import mongoose from 'mongoose';
import { Note } from '../models/note.js';

const { MONGO_URL } = process.env;

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('✅ MongoDB connection established successfully');
    await Note.syncIndexes();
  } catch (error) {
    console.error(`❌ Failed to connect to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

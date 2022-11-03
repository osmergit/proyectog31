import mongoose from "mongoose";

export const MONGODB_URI = 'mongodb+srv://osmereduardo:Colombia2022@cluster0.dnx9hq7.mongodb.net/dbeventos?retryWrites=true&w=majority'
export const db = await mongoose.connect(MONGODB_URI);
console.log("Connected to ", db.connection.name);



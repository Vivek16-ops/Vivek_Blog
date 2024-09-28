'use server'
import mongoose from 'mongoose';

export default async function Mongoconnect() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        return JSON.stringify({ success: true, msg: "Mongodb Connected" });
    } catch (error) {
        return JSON.stringify({ success: false, msg: error.message });
    }
}
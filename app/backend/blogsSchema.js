"use server"
import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    author: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

const Blogs = mongoose.models.Blogs || mongoose.model('Blogs', blogSchema);

export default Blogs;
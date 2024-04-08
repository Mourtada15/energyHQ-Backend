import mongoose, { Schema } from "mongoose";

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('Article', articleSchema);
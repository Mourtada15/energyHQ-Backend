import mongoose, { Schema } from "mongoose";

const latestNewsSchema = new Schema({
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

export default mongoose.model('LatestNews', latestNewsSchema);
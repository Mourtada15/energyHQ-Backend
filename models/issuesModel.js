import mongoose, { Schema } from "mongoose";

const issuesSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    cover: {
        type: String,
        required: true
    },
    pdfUrl: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('Issue', issuesSchema);
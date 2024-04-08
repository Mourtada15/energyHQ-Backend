import mongoose, { Schema } from "mongoose";

const ratesSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('Rate', ratesSchema);
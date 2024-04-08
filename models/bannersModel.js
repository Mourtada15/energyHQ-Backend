import mongoose, { Schema } from "mongoose";

const ratesSchema = new Schema({
    banner: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('Banner', ratesSchema);
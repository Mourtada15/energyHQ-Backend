import mongoose, { Schema } from "mongoose";

const sectorsSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
}, { timestamps: true });

export default mongoose.model('Sector', sectorsSchema);
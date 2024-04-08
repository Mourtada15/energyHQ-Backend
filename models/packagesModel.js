import mongoose, { Schema } from "mongoose";

const packagesSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

export default mongoose. model('Package', packagesSchema);

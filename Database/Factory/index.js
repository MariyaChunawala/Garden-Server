import mongoose from "mongoose";

const FactorySchema = new mongoose.Schema({
    factory_name: { type: String, required: true },
    location: { type: String, required: true }
})

export const FactoryModel = new mongoose.model("Factory", FactorySchema);
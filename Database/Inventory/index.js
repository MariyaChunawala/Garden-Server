import mongoose from "mongoose";

const InventorySchema = new mongoose.Schema({
    cloth_name: { type: String, required: true },
    cloth_meter: { type: String, required: true },
    Date: { type: String, required: true }
})

export const InventoryModel = new mongoose.model("Inventory", InventorySchema);
import mongoose from "mongoose";

const ChallanSchema = new mongoose.Schema({
    challan_no: { type: String, required: true },
    customer_name: { type: String, required: true },
    date: { type: String, required: true },
    factory_name: { type: String, required: true },
    cloth_material: { type: String, required: true },
    cloth_meter: { type: String, required: true },
    order_for: {
        kids: [
            {
                length: { type: String },
                pieces: { type: Number }
            },
        ],
        boys: [
            {
                length: { type: String },
                pieces: { type: Number }
            },
        ],
        mens: [
            {
                size: { type: String },
                length: { type: String },
                pieces: { type: Number }
            },
        ],
    }
});

export const ChallanModel = new mongoose.model("Challan", ChallanSchema);
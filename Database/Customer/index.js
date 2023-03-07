import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact_no: { type: String, required: true },
});

export const CustomerModel = new mongoose.model("Customers", CustomerSchema);
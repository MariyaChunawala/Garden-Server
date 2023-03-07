// Import Library
import express from 'express';

const GE_Challan = express.Router();

// Model 
import { ChallanModel } from "../../Database/Challan";

/* 
    Route : /
    Description : Get all challans
    Access : PUBLIC
    Parameters : NONE
    Body: NONE
    Method : GET
*/
GE_Challan.get("/", async (request, response) => {
    try {
        const getAllChallans = await ChallanModel.find();
        return response.status(200).json({ getAllChallans });
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
});

/* 
    Route : /id
    Description : Get challan by id
    Access : PUBLIC
    Parameters : NONE
    Body: _id
    Method : GET
*/
GE_Challan.get("/id", async (request, response) => {
    try {
        const { _id } = request.body;
        const getChallanById = await ChallanModel.findOne({ _id });
        return response.status(200).json({ getChallanById });
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
});

/* 
    Route : /add
    Description : Post Challan
    Access : PUBLIC
    Parameters : NONE
    Body: new_challan
    Method : POST
*/
GE_Challan.post("/add", async (request, response) => {
    try {
        const { new_challan } = request.body;
        await ChallanModel.create(new_challan);
        return response.status(200).json({ message: "Challan Successfully Added." });
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
});

/* 
    Route : /edit
    Description : Update challan details by id
    Access : PUBLIC
    Parameters : NONE
    Body: update_challan
    Method : PUT
*/
GE_Challan.put("/edit", async (request, response) => {
    try {
        const { update_challan } = request.body;
        await ChallanModel.findOneAndUpdate(
            { _id: update_challan._id },
            {
                challan_no: update_challan.challan_no,
                customer_name: update_challan.customer_name,
                date: update_challan.date,
                factory_name: update_challan.factory_name,
                cloth_material: update_challan.cloth_material,
                cloth_meter: update_challan.cloth_meter,
                order_for: update_challan.order_for
            },
            { new: true }
        );
        return response.status(200).json({ message: "Challan Successfully Updated." });
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
});

/* 
    Route : /delete
    Description : Delete challan details based on id
    Access : PUBLIC
    Parameters : NONE
    Body: _id
    Method : DELETE
*/
GE_Challan.delete("/delete", async (request, response) => {
    try {
        await ChallanModel.findOneAndDelete(
            { _id: request.body._id }
        );
        return response.status(200).json({ message: "Challan Successfully Deleted." });
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
});

export default GE_Challan;
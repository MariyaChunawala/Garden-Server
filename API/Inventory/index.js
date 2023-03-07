// Import Library
import express from 'express';

const GE_Inventory = express.Router();

// Model
import { InventoryModel } from "../../Database/Inventory";

/* 
    Route : /
    Description : Get all Inventory details
    Access : PUBLIC
    Parameters : NONE
    Body: NONE
    Method : GET
*/
GE_Inventory.get("/", async (request, response) => {
    try {
        const getAllInventory = await InventoryModel.find();
        return response.status(200).json({ getAllInventory });
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
});

/* 
    Route : /id
    Description : Get Inventory based on id
    Access : PUBLIC
    Parameters : NONE
    Body: _id
    Method : GET
*/
GE_Inventory.get("/id", async (request, response) => {
    try {
        const { _id } = request.body;
        const getInventoryById = await InventoryModel.findOne({ _id });
        return response.status(200).json({ getInventoryById });
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
});

/* 
    Route : /add
    Description : Add Inventory details
    Access : PUBLIC
    Parameters : NONE
    Body: new_inventory
    Method : POST
*/
GE_Inventory.post("/add", async (request, response) => {
    try {
        const { new_inventory } = request.body;
        await InventoryModel.create(new_inventory);
        return response.status(200).json({ message: "Inventory Successfully Added." });
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
});

/* 
    Route : /edit
    Description : Update Inventory details based on id
    Access : PUBLIC
    Parameters : NONE
    Body: update_inventory
    Method : PUT
*/
GE_Inventory.put("/edit", async (request, response) => {
    try {
        const { update_inventory } = request.body;
        await InventoryModel.findOneAndUpdate(
            { _id: update_inventory._id },
            {
                cloth_name: update_inventory.cloth_name,
                cloth_meter: update_inventory.cloth_meter,
                Date: update_inventory.Date,
            },
            { new: true }
        );
        return response.status(200).json({ message: "Inventory Successfully Updated." });
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
});

/* 
    Route : /delete
    Description : Delete Inventory details based on id
    Access : PUBLIC
    Parameters : NONE
    Body: _id
    Method : DELETE
*/
GE_Inventory.delete("/delete", async (request, response) => {
    try {
        await InventoryModel.findOneAndDelete(
            { _id: request.body._id }
        );
        return response.status(200).json({ message: "Inventory Successfully Deleted." });
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
});

export default GE_Inventory;
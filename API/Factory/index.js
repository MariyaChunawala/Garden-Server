// Import Library
import express from 'express';

const GE_Factory = express.Router();

// Model
import { FactoryModel } from "../../Database/Factory";

/* 
    Route : /
    Description : Get all factory
    Access : PUBLIC
    Parameters : NONE
    Body: NONE
    Method : GET
*/
GE_Factory.get("/", async (request, response) => {
    try {
        const getAllFactory = await FactoryModel.find();
        return response.status(200).json({ getAllFactory });
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
});

/* 
    Route : /id
    Description : Get factory based on id
    Access : PUBLIC
    Parameters : NONE
    Body: _id
    Method : GET
*/
GE_Factory.get("/id", async (request, response) => {
    try {
        const { _id } = request.body;
        const getFactoryById = await FactoryModel.findOne({ _id });
        return response.status(200).json({ getFactoryById });
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
});

/* 
    Route : /add
    Description : Add factory details
    Access : PUBLIC
    Parameters : NONE
    Body: new_factory
    Method : POST
*/
GE_Factory.post("/add", async (request, response) => {
    try {
        const { new_factory } = request.body;
        await FactoryModel.create(new_factory);
        return response.status(200).json({ message: "Factory Successfully Added." });
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
});

/* 
    Route : /edit
    Description : Update factory details based on id
    Access : PUBLIC
    Parameters : NONE
    Body: update_factory
    Method : PUT
*/
GE_Factory.put("/edit", async (request, response) => {
    try {
        const { update_factory } = request.body;
        await FactoryModel.findOneAndUpdate(
            { _id: update_factory._id },
            {
                factory_name: update_factory.factory_name,
                location: update_factory.location,
            },
            { new: true }
        );
        return response.status(200).json({ message: "Factory Successfully Updated." });
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
});

/* 
    Route : /delete
    Description : Delete factory details based on id
    Access : PUBLIC
    Parameters : NONE
    Body: _id
    Method : DELETE
*/
GE_Factory.delete("/delete", async (request, response) => {
    try {
        await FactoryModel.findOneAndDelete(
            { _id: request.body._id }
        );
        return response.status(200).json({ message: "Factory Successfully Deleted." });
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
});

export default GE_Factory;
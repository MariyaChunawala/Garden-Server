// Import Library
import express from 'express';

const GE_Customer = express.Router();

// Model
import { CustomerModel } from "../../Database/Customer";

/* 
    Route : /
    Description : Get all customer details
    Access : PUBLIC
    Parameters : NONE
    Body: NONE
    Method : GET
*/
GE_Customer.get("/", async (request, response) => {
    try {
        const getAllCustomers = await CustomerModel.find();
        return response.status(200).json({ getAllCustomers });
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
});

/* 
    Route : /id
    Description : Get customer details by id
    Access : PUBLIC
    Parameters : NONE
    Body: _id
    Method : GET
*/
GE_Customer.get("/id", async (request, response) => {
    try {
        const { _id } = request.body;
        const getCustomerById = await CustomerModel.findOne({ _id });
        return response.status(200).json({ getCustomerById });
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
});

/* 
    Route : /add
    Description : Add customer details
    Access : PUBLIC
    Parameters : NONE
    Body: new_customer
    Method : POST
*/
GE_Customer.post("/add", async (request, response) => {
    try {
        const { new_customer } = request.body;
        await CustomerModel.create(new_customer);
        return response.status(200).json({ message: "Customer Successfully Added." });
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
});

/* 
    Route : /edit
    Description : Update customer details
    Access : PUBLIC
    Parameters : NONE
    Body: update_customer
    Method : PUT
*/
GE_Customer.put("/edit", async (request, response) => {
    try {
        const { update_customer } = request.body;
        await CustomerModel.findOneAndUpdate(
            { _id: update_customer._id },
            {
                name: update_customer.name,
                contact_no: update_customer.contact_no,
            },
            { new: true }
        );
        return response.status(200).json({ message: "Customer Successfully Updated." });
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
});

/* 
    Route : /delete
    Description : Delete customer details based on id
    Access : PUBLIC
    Parameters : NONE
    Body: _id
    Method : DELETE
*/
GE_Customer.delete("/delete", async (request, response) => {
    try {
        await CustomerModel.findOneAndDelete(
            { _id: request.body._id }
        );
        return response.status(200).json({ message: "Customer Successfully Deleted." });
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
});

export default GE_Customer;
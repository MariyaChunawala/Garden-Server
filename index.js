//Import Libraries
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
require('dotenv').config();

// APIs
import GE_Challan from './API/Challan';
import GE_Customer from './API/Customer';
import GE_Factory from './API/Factory';
import GE_Inventory from './API/Inventory';

const GE = express();

//Application middlewares
GE.use(express.json());
GE.use(express.urlencoded({ extended: false }));
GE.use(cors());
GE.use(helmet());

// Database Connection
mongoose.connect(process.env.MONGO_URL).then(() => console.log("Connection Established...."));

// API Calls
GE.use("/challan", GE_Challan);
GE.use("/customer", GE_Customer);
GE.use("/factory", GE_Factory);
GE.use("/inventory", GE_Inventory);

GE.listen(3000, () => {
    console.log("Server is running");
})
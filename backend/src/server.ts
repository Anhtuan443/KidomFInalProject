import express from "express";
import cors from "cors";
import bodyPaser from "body-parser";
import { NextFunction, Request, Response } from 'express';
import { HTTP_FILE_EXISTS } from "./constants/http_status";

const app = express();

app.use(bodyPaser.json({limit:"50mb"}));
app.use(bodyPaser.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: true 
}));
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

import { dbConnect } from "./configs/database.config";
dbConnect();

import productRouter from './routers/product.router';
import userRouter from './routers/user.router';

import ENV from '../../env.json';

app.use("/api/product", productRouter);
app.use("/api/user", userRouter);


app.listen(ENV.PORT, () => {
    console.log(`Server is running on port http://localhost:` + ENV.PORT);
})
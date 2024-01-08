import { Router } from "express";
import { CATAGORYS } from "../data";
import PRODUCTS from "../data";
import asyncHandler from "express-async-handler";
import { ProcductModel, Product } from "../models/product.model";

const router = Router();


function getAll(products: Product[]) {
    var data = [];

    for (var item of products) {
        for (var img of item.imageUrl) {
            var temp = JSON.parse(JSON.stringify(item));
            temp.imageUrl = img;

            data.push(temp);
        }
    }

    return data;
}

router.get("/seed", asyncHandler(
    async (req, res) => {
        const productCount = await ProcductModel.countDocuments();
        
        if (productCount > 0) {
            res.send("Seed is already done!");
            return
        }
        
        await ProcductModel.create(PRODUCTS);
        res.send("Seed is done!");
    })
)

router.get("/", asyncHandler(
    async (req, res) => {
        const data = await ProcductModel.find();
        res.send(getAll(data));
    }
))
router.get("/search/:searchTerm", asyncHandler(
    async (req, res) => {
        const searchTerm = req.params.searchTerm;
        const searchRegex = new RegExp(searchTerm, 'i');
        
        const data = await ProcductModel.find(
            {name: {$regex: searchRegex}}
        );

        const products = getAll(data).filter(product => (product.imageUrl || '').includes('_thumb.'));
        res.send(products);
    }
))
router.get("/category", (req, res) => {
    res.send(CATAGORYS);
})

router.get("/catagory/:catagoryName", asyncHandler (
    async (req, res) => {
        const searchTerm = req.params.catagoryName;
        const data = await ProcductModel.find();
        const products = getAll(data).filter(product => product.CATAGORYS?.includes(searchTerm));
        res.send(products);
    }
))

router.get("/thumb", asyncHandler(
    async (req, res) => {
        const data = await ProcductModel.find();
        const img_thumb = getAll(data).filter(product => product.imageUrl.includes('_thumb.'));    
        res.send(img_thumb);
    }
))

router.get("/thumb/:id", asyncHandler(
    async (req, res) => {
        const id = req.params.id;
        //const thumb = req.params.thumb;
        const data = await ProcductModel.find();
        const img_thumb = getAll(data).filter(product => product.id === id && product.imageUrl.includes('_thumb.'))[0];    
        
        res.send(img_thumb);
    }
))

router.get("/:id", asyncHandler (
    async (req, res) => {
        const id = req.params.id;
        const data = await ProcductModel.find();
        const product = getAll(data).filter(product => (product.id.toString() === id));
        res.send(product);
    }
))

export default router;
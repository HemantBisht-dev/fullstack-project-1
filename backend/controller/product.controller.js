import mongoose from "mongoose";

import Product from "../models/product.model.js";

export const getProducts = async(req,res)=>{
  try {
    const products = await Product.find({});
    res.status(200).json({success:true, data:products})
  } catch (error) {
    console.error("error in created product: ", error.message);
    // 500 - internal server error
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export const createProduct = async (req, res) => {
  const product = req.body; // user will send this data

  // if user didn't provide fields
  if (!product.name || !product.price || !product.image) {
    // 400 - server cannot process the request due to client error request
    return res
      .status(400)
      .json({ success: false, message: "please provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    // 201 - request succeeded and new resource was created (POST, PUT)
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("error in created product: ", error.message);
    // 500 - internal server error
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export const updateProduct = async(req, res)=>{
  const {id} = req.params;
  const product = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({success:false, message:"Invalid product id"})
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product,{new:true})
    res.status(200).json({success:true, data:updatedProduct})
  } catch (error) {
    console.error("error in created product: ", error.message);
    // 500 - internal server error
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }

}
export const deleteProduct = async(req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "product deleted" });
  } catch (error) {
    console.error("error in created product: ", error.message);
    // 500 - internal server error
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export const getProduct = async(req,res)=>{
  const {id} = req.params;
  try {
    const product = await Product.findById(id);
    res.status(200).json({success:true, data:product})
  } catch (error) {
    console.error("error in created product: ", error.message);
    // 500 - internal server error
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
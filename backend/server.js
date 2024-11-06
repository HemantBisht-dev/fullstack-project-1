import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/productmodel.js";

dotenv.config();
const app = express();

// middleware - it runs before the send the response back to client
app.use(express.json()); // allows us to accept json data in the req.body

app.post("/api/product", async(req,res) => {
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
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log("server started at http://localhost:" + PORT);
});

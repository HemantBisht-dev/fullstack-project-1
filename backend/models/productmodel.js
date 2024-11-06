import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name:{
    type:String,
    require:true,
  },
  price:{
    type:String,
    require:true,
  },
  image:{
    type:String,
    require:true,
  }
},{
  timestamps:true // createdAt, updatedAt for each documents
});

const Product = mongoose.model('Product', productSchema); // Product will converted to products , mongoose will handel
export default Product;
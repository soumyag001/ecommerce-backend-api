const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    name: String,
    Price: Number,
    Description: String,
    Category: String,
    Instock: Boolean
});
module.exports=mongoose.model('product',productSchema);
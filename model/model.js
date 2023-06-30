const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    category:{
        required:true,
        type:String
    },
    image:{
        required: false,
        type:String
    },
    altura:{
        required:false,
        type:Number
    },
    largura:{
        required:false,
        type:Number
    },
    profundidade:{
        required:false,
        type:Number
    }
})

module.exports = mongoose.model('Products', productSchema)
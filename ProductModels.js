const mongoose = require('mongoose');

// Create a Schema
const ProductSchema = new mongoose.Schema(
    {
        package: {
            type: String,
            required: true
        },
    }
)

// Create a Model
const ProductModel = mongoose.model('products', ProductSchema);

// Export
module.exports = ProductModel;


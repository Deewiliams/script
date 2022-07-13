const mongoose = require('mongoose')

const ProductScriptSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'products name must be provided']
    },
    price: {
        type: Number,
        required: [true, 'products price must be provided'] 
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not support'
        }
    },
    featured: {
        type: Boolean, 
        default: false
    }, 
    rating: {
        type: Number,
        default: 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('ProductScrit',ProductScriptSchema)
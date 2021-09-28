'use strict'
const mongoose = require("mongoose");

const fruitShema = new mongoose.Schema({
    name: { type: String },
    image: { type: String },
    price: { type: String },
    email: { type: String }
});

const fruitModel = mongoose.model('fruits', fruitShema);

module.exports = fruitModel;
'use strict'
const fruitModel = require('../models/fruits.model');
const axios = require('axios');
const { request, response } = require('express');

//get from API
const getFruits = (request, response) => {
    let url = "https://fruit-api-301.herokuapp.com/getFruit";
    axios.get(url).then(result => {
        let allFruits = result.data;
        response.json(allFruits);
    }).catch(err => console.log(err));
};

const createFruit = (request, response) => {
    const { name, image, price, email } = request.body;
    const newFruit = new fruitModel({ name, image, price, email });
    newFruit.save();
    response.json(newFruit);
};

const getByEmail = (request, response) => {
    fruitModel.find({ email: request.params.email }, (error, filteredData) => {
        response.json(filteredData);
    });
};

const deleteFruit = (request, response) => {
    const fruitId = request.params.fruit_Id;
    fruitModel.deleteOne({ _id: fruitId }, (error, deletedData) => {
        response.json(deletedData);
    });
};

const updateFruit = (request, response) => {
    const fruitId = request.params.fruit_Id;
    const { name, image, price, email } = request.body;
    fruitModel.findByIdAndUpdate({ _id: fruitId }, { name, image, price, email }, { new: true }, (error, updatedData) => {
        response.json(updatedData);
    });
};

module.exports = { getFruits, createFruit, getByEmail, deleteFruit, updateFruit };
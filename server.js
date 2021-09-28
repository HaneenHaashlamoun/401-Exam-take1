const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");
const { request, response } = require('express');
const PORT = process.env.PORT;

const mongoURL = process.env.MONGO_URL;
mongoose.connect(`${mongoURL}`);

const { getFruits, createFruit, getByEmail, deleteFruit, updateFruit } = require("./controller/fruits.controller");

app.get("/", (request, response) => {
    response.send("HELLO FROM SERVER ..!");
});

app.get("/fruits", getFruits);
app.get("/fruits/:email", getByEmail);
app.post("/fruits", createFruit);
app.delete("/fruits/:fruit_Id", deleteFruit);
app.put("/fruits/:fruit_Id", updateFruit);

app.listen(PORT, () => {
    console.log("server on Port", PORT);
});


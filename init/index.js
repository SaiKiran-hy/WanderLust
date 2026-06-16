const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/WanderLust";    

main()
     .then(() => {
        console.log("connected to DB");
     })
     .catch((err) => {
        console.log(err);
    });

async function main() {
  await mongoose.connect(MONGO_URL);

}

const initDB = async() => {
    await Listing.deleteMany({}); //to delete previous data from DB
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: '6a29057926ec25e9e5bd7a0b',
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();
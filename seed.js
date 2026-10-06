require("dotenv").config();
const mongoose = require("mongoose");
const Mobile = require("./models/Mobile");

const data = [
  { name: "Galaxy S26", brand: "Samsung", price: 79999, ram: "12 GB", storage: "256 GB", color: "Graphite", stock: 14, description: "Flagship with 6.3-inch AMOLED display." },
  { name: "iPhone 17", brand: "Apple", price: 82900, ram: "8 GB", storage: "256 GB", color: "Sky Blue", stock: 9, description: "Everyday iPhone with a sharper camera." },
  { name: "Pixel 10", brand: "Google", price: 69999, ram: "12 GB", storage: "128 GB", color: "Obsidian", stock: 6, description: "Clean Android with long update support." },
  { name: "Nord 5", brand: "OnePlus", price: 34999, ram: "8 GB", storage: "128 GB", color: "Marble Mist", stock: 22, description: "Fast charging mid-range phone." },
  { name: "Redmi Note 15", brand: "Xiaomi", price: 18999, ram: "6 GB", storage: "128 GB", color: "Midnight Black", stock: 3, description: "Budget phone with a big battery." },
];

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Mobile.deleteMany();
  await Mobile.insertMany(data);
  console.log("Sample mobiles added");
  process.exit(0);
})();

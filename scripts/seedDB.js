const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooksDB");

const bookSeed = [
  {
    title: "1776",
    author: "David McCullough",
    body:
      "In this masterful book, David McCullough tells the intensely human story of those who marched with General George Washington in the year of the Declaration of Independence - when the whole American cause was riding on their success, without which all hope for independence would have been dashed and the noble ideals of the Declaration would have amounted to little more than words on paper.",
    image: "http://books.google.com/books/content?id=R1Jk-A4R5AYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=R1Jk-A4R5AYC&dq=1776&hl=&source=gbs_api"
  },
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
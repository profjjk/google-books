const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooksDB");

const bookSeed = [
  {
    title: "The Guns of August",
    author: "Barbara Tuchman",
    body:
      "Historian and Pulitzer Prize-winning author Barbara Tuchman has brought to life again the people and events that led up to World War I. With attention to fascinating detail, and an intense knowledge of her subject and its characters, Ms. Tuchman reveals, for the first time, just how the war started, why, and how it could have been stopped but wasn't. A classic historical survey of a time and a people we all need to know more about, THE GUNS OF AUGUST will not be forgotten.",
    date: new Date(Date.now())
  },
  {
    title: "1776",
    author: "David McCullough",
    body:
      "In this masterful book, David McCullough tells the intensely human story of those who marched with General George Washington in the year of the Declaration of Independence - when the whole American cause was riding on their success, without which all hope for independence would have been dashed and the noble ideals of the Declaration would have amounted to little more than words on paper.",
    date: new Date(Date.now())
  },
  {
    title: "Grant",
    author: "Ron Chernow",
    body:
      "Ulysses S. Grant's life has typically been misunderstood. All too often he is caricatured as a chronic loser and inept businessman, fond of drinking to excess; or as the triumphant but brutal Union general of the Civil War; or as a credulous and hapless president whose tenure came to symbolize the worst excesses of the Gilded Age. These stereotypes don't come close to capturing adequately his spirit and the sheer magnitude of his monumental accomplishments. A biographer at the height of his powers, Chernow has produced a portrait of Grant that is a masterpiece, the first to provide a complete understanding of the general and president whose fortunes rose and fell with dizzying speed and frequency.",
    date: new Date(Date.now())
  }
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
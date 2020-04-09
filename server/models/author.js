const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  age: Number,
});

//model is a collection formatted via author schema
module.exports = mongoose.model("author", authorSchema);

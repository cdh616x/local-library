//jshint esversion:6

const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: {type: String, required: true, maxLength: 100}
  }
);

GenreSchema
.virtual("url")
.get(function () {
  return "/catalog/author/" + this._id;
});

module.exports = mongoose.model("Genre", GenreSchema);

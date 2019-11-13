const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toqrSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  client: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const ToqrDB = mongoose.model("ToqrDB", toqrSchema);

module.exports = ToqrDB;

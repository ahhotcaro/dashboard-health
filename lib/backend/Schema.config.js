// create shema for the collection 'configs' in mongose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConfigSchema = new Schema({
  min: Number,
  max: Number,
});

const Config = mongoose.model("Config", ConfigSchema);

module.exports = Config;

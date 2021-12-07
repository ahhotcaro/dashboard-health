const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const SleepSchema = new Schema({
    start: Date,
    sleep_quality: String,
    time_in_bed: Number
})

const Sleep = mongoose.model("sleep", SleepSchema);

module.exports = Sleep
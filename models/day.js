const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DaySchema = new Schema({
  date: { type: Date, default: Date.now},
  gratitude1: { type: String, required: true },
  gratitude2: { type: String, required: true },
  gratitude3: { type: String, required: true }
});

const Day = mongoose.model('Day', DaySchema);
module.exports = Day;

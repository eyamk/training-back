const mongoose = require('mongoose');


const photoSchema = new mongoose.Schema(
  {
    url: String,
    info: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
);
const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;

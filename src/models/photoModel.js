const mongoose = require('mongoose');


const photoSchema = new mongoose.Schema(
  {
    url: String,
    info: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },

);

/* photoSchema.methods.toJSON = function photoSchema() {
  return {
    id: this._id,
    url: this.label,
    info: this.score,
    userId:this.userId
  };
};
 */
const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;

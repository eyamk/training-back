const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    email: String,
    phone: String,
    // photos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Photo' }],
  },
);

userSchema.virtual('photos', { ref: 'Photo', localField: '_id', foreignField: 'user' });


const User = mongoose.model('User', userSchema);


module.exports = User;

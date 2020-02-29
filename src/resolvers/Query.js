const User = require('../models/userModel');
const Photo = require('../models/photoModel');

const Query = {
  getUsers: async () => {
    const result = await User.find({}).populate({ path: 'photo' });
    return result;
  },

  getuserById: async (parent, { id }) => {
    const user = await User.findById(id).populate('photos');
    console.log('user', user);
    return user;
  },
  getPhotos: async () => {
    const result = await Photo.find({}).populate('user');
    return result;
  },
  getPhotoById: (parent, { id }) => Photo.findById(id),

};

module.exports = Query;

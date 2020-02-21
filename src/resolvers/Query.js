const User = require('../models/userModel');
const Photo = require('../models/photoModel');

const Query = {
  getUsers: async () => {
    const result = await User.find({}).populate({ path: 'photo' }); // console.log(result);
    return result;
  },


  getuserById: async (parent, { id }) => {
    const user = await User.findById(id).populate('photos');
    console.log('userrr', user);
    return user;
  },
  getPhotos: async () => {
    const result = await Photo.find({}).populate('user');
    // console.log('......', input);
    return result;
  },
  getPhotoById: (parent, { id }) => Photo.findById(id),

};

module.exports = Query;

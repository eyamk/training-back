const User = require('../models/userModel');
const Photo = require('../models/photoModel');

const Mutation = {

  createUser: async (parent, { input }) => {
    const user = new User({
      ...input,

    });
    const userCreated = await user.save();
    return userCreated;
  },


  updateUser: (parent, { input, id }) => {
    try {
      const user = User.findOneAndUpdate({ _id: id },
        {
          $set: {
            ...input,
          },
        });


      return user;
    } catch (error) {
      return (error);
    }
  },


  deleteUser: (parent, { id }) => User.findByIdAndDelete(id),


  createPhoto: async (parent, { input, user }) => {
    const photo = new Photo({
      ...input,
      user,
    });
    await photo.save();

    return photo;
  },


  updatePhoto: (parent, { input, id }) => {
    // if (!id) return ('errrr');
    const photo = Photo.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: {
          ...input,

        },
      },
    );
    if (!photo) {
      throw new Error('No photos');
    }
    return photo;
  },


  deletePhoto: async (parent, { id }) => Photo.findByIdAndDelete(id),

};


module.exports = Mutation;

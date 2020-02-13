const User=require('../models/userModel')

const Query = {
  me: () => 'Hello World',
  sayOk: () => 'hi',
  getuser:(parent,input)=>{
    return User.find({});
  },
  getuserById:(parent,input)=>{
    return User.findById(input.id)
  }

  

};

module.exports = Query;

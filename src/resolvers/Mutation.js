const User = require('../models/userModel')

const Mutation = {
  sayHi: () => 'Hi',
  createUser: async (parent, input) => {
    const user = new User({

      name: input.name,
      username: input.username,
      email: input.email,
      phone: input.phone,
    });
    await user.save()
    return user;

  },

   updateUser:(parent,input)=>{
     console.log(input)

    const user=  (User.findOneAndUpdate({_id:input.id},{
      // const {name,user} = input
      $set: {
        name:input.name,
        username:input.username,
        email:input.email,
        phone:input.phone,
     } },
     {new:true},(err,User)=>{
       if (err){
         console.log('something wrong');

       }
       else { console.log('okkk')}
     }
     ));
     return user;
    
  } ,
  
  
  deleteUser: async(parent,{id})=>{
    await User.findByIdAndDelete(input.id)
    return 'deleted';
  }





}

module.exports = Mutation;

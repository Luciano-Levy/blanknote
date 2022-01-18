import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

const userSchema = new mongoose.Schema({
  user: String,
  text: String
},{collection: 'users'});

await mongoose.connect(process.env.MONGO_URI);
const Users = await mongoose.model('Users', userSchema);


//casos limites propenso a errores (ussuario vacio)
//crearse el localStorage a mano y acceder a otros


//seria mas claro devolver un objeto con metodos
export const mongoUsers =  function (user,txt,method,callback){





  Users.findOne({user: user},async (err, userObj) => {
    if (method == 'POST' && userObj == null){


      const newUser = await new Users({user:user, text: txt});

      await newUser.save();

      return callback('User Saved')

    }else if (method == 'PUT'){
      // reemplazar el texto


      const updateUser = await Users.findOneAndUpdate({user: user}, {text: txt});

      return callback('User Updated')

    }else{
      return callback("User Existent")
    }



  });



};

export const  mongoRetrieve = function(user, callback){

  Users.findOne({user:user}, (err, doc) => {

    return callback(doc.toObject().text)
  })


}

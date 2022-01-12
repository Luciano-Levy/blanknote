import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

const userSchema = new mongoose.Schema({
  user: String,
  text: String
},{collection: 'users'});

await mongoose.connect(process.env.MONGO_URI);
const Users = await mongoose.model('Users', userSchema);

mongoUsers().catch(err => console.log(err));
//muchos casos limites propenso a errores (ussuario vacio)
//seria mas claro devolver un objeto con metodos
export async function mongoUsers (user,txt,method){





  Users.findOne({user: user},async (err, userObj) => {
    if (method == 'POST' && userObj == null){


      const newUser = await new Users({user:user, text: txt});

      await newUser.save();

    }else if (method == 'PUT'){
      // reemplazar el texto
      console.log(txt)

      const updateUser = await Users.findOneAndUpdate({user: user}, {text: txt});

    };



  });



};

export const  mongoRetrieve = function(user, callback){

  Users.findOne({user:user}, (err, doc) => {
    console.log(doc);
    return callback(doc.toObject().text)
  })


}

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  user: String,
  text: String
},{collection: 'users'});

mongoUsers().catch(err => console.log(err));

//seria mas claro devolver un objeto con metodos
export async function mongoUsers (user,txt,method){

  await mongoose.connect('mongodb+srv://lucianolevy:blank-txt-db@cluster0.l3zvv.mongodb.net/blanktxt?retryWrites=true&w=majority');


  const Users = await mongoose.model('Users', userSchema);

  const userdb = Users.findOne({user: user},async (err, userObj) => {
    if (method == 'POST' && userObj == null){


      const newUser = await new Users({user:user, text: txt});

      await newUser.save();

    }else{
      // reemplazar el texto
      console.log(txt)

      const updateUser = await Users.findOneAndUpdate({user: user}, {text: txt});

    }
  });



};

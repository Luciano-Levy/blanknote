import express from 'express';
import {mongoUsers, mongoRetrieve} from './mongodb.js'


const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded());
app.use(express.json());


app.listen(PORT, () =>
  console.log(`Server on port ${PORT}`));


app.get("/api/:user", (req, res) => {



  mongoRetrieve(req.params.user, docText => {
    res.send(JSON.stringify({text: docText}))
  })





})


app.all("/api" , (req,res) => {

  mongoUsers(req.body.user, req.body.txt,req.method);

});

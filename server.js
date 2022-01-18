import express from 'express';
import {mongoUsers, mongoRetrieve} from './mongodb.js'
import * as path from 'path'


const app = express();
const {pathname: root} = new URL('./client/build', import.meta.url)
app.use(express.static(root))

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;



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

  mongoUsers(req.body.user, req.body.txt,req.method, dbRes => {
    switch (dbRes) {
      case 'User Saved':
        res.status(201)
        res.send(JSON.stringify({text: 'docText'}))
        break;
      case 'User Updated':
        res.status(200)
        res.send(JSON.stringify({text: 'docText'}))
        break;
      case 'User Existent':
        res.status(403)
        res.send(JSON.stringify({text: 'docText'}))
        break
      default:

    }
  });

});

import express from 'express';
import {mongoUsers} from './mongodb.js'


const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded());
app.use(express.json());


app.listen(PORT, () =>
  console.log(`Server on port ${PORT}`));


app.all("/api" , (req,res) => {
  console.log('si');
  mongoUsers(req.body.user, req.body.txt,req.method);

});

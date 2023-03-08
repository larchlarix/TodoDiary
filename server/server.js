const express = require("express");
<<<<<<< HEAD
const app = express();
require('dotenv').config({path:'variables.env'});
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const cors = require('cors');
//const test = require("./Router/test");
const user = require("./Router/user");

//mongodb 연결
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true, }, (err) => {
  if(err){
    console.log(err);
  } else{
    console.log('Connected to database successfully!');
  }

}
);

=======
const bodyParser = require("body-parser");

const cors = require('cors');
const app = express();
const test = require("./Router/test");
>>>>>>> e81c8ed193f52bfb8f0861d8b70c9f32714b0126

//미들웨어
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
<<<<<<< HEAD
app.use(cookieParser());
app.use(cors());
app.use(express.json());
//app.use(require("./server/Router/index"));
//app.use(require("./routes/todo"));
//app.use(require("./routes/diary"));
//app.use(require("./server/Router/user"));


//Router
//app.use("/api", test);
app.use("/user/login",user);
app.use("/register/login",user)
app.use(require("./Router/index"));
app.use(require("./Router/user"));
app.use(require("./Router/todo"));
app.use(require("./Router/diary"));
//app.use(require("./Router/auth"));

const port = 8080; //노드서버가 사용할 포트번호
app.listen(port,()=> console.log('Listening on port 8080'));
=======
app.use(cors());
app.use("/api", test);

const port = 5000; //노드서버가 사용할 포트번호
app.listen(port,()=> console.log('Listening on port 5000'));
>>>>>>> e81c8ed193f52bfb8f0861d8b70c9f32714b0126

var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')
const path =require('path')

var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const mongoURI = 'mongodb+srv://waritthon:7amzHx4OS9ZJz3zT@cluster0-itves.gcp.mongodb.net/test?retryWrites=true&w=majority'

mongoose
  .connect(
    process.env.MONGODB_URI || mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

var Users = require('./routes/Users')
const exercisesRouter = require('./routes/exercises');

app.use('/users', Users)
app.use('/exercises', exercisesRouter);


if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'));
  
  app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','build','index.html'));
  });
}

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})
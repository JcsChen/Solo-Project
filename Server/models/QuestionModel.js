const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://JC:codesmith@cluster0.yymiv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'questions'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  
})
const {MongoClient} = require('mongodb');
const Schema = MongoClient.Schema;

const authorSchema = new Schema({
  name: String,
  age: Number,
  
})

module.exports = MongoClient.model('Author', authorSchema)
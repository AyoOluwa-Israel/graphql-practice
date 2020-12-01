const {MongoClient} = require('mongodb');
const Schema = MongoClient.Schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
});

module.exports = MongoClient.model('Book', bookSchema)
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
// const mongoose = require('mongoose')


const app = express();

// mongoose.connect('mongodb+srv://Israel:Ayooluwa1.@cluster1.5i0wk.mongodb.net/Israel?retryWrites=true&w=majority')
// mongoose.connection.once('open', () => {
//   console.log('connected to database')
// });


const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://Israel:Ayooluwa1.@cluster1.5i0wk.mongodb.net/israel?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, });
client.connect(err => {
  const collection = client.db("test").collection("devices");
    if (err){
      console.log(err);
    }else{
      console.log("connected to", uri)
    }
  client.close();
});


app.use('/graphql',graphqlHTTP({
  schema,
  graphiql: true 
}));


app.listen(4000, () => {
  console.log('now listening for request on port 4000');
});
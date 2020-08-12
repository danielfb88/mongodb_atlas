const MongoClient = require('mongodb').MongoClient;

const {DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

// replace the uri string with your connection string.
const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.zoejr.mongodb.net/${DB_DATABASE}?retryWrites=true&w=majority`
MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("test").collection("devices");
   console.log('collection :>> ', collection);
   // perform actions on the collection object
   client.close();
});
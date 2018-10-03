//const MongoClient = require('mongodb').MongoClient;
// Object distructoring - create an obj from another obj/libary:
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({text: 'walk the damn dog'},
    {
        $set: {
            text: 'Get flowers'
        }
    },
    {
        returnOriginal: false
    });

    //client.close();
});
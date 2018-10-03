//const MongoClient = require('mongodb').MongoClient;
// Object distructoring - create an obj from another obj/libary:
const {MongoClient, ObjectId} = require('mongodb');

// // Create a unike undentifier -  objID:
// var obj = new ObjectId();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert Todo collection', err);
    //      }

    //      console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Dani BK',
    //     age: 30,
    //     location: 'Israel'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert Users collection', err);
    //      }

    //      // Log all documents that inserted
    //      console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    client.close();
});
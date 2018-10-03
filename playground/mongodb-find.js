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

    // // Fetch all documents in Todos collection:
    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     return console.log('Unable to fetch Todos', err);
    // });

    // // Fetch documents with 'completed' value of false in Todos collection:
    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     return console.log('Unable to fetch Todos', err);
    // });

    // Fetch documents with 'completed' value of false in Todos collection:
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        return console.log('Unable to fetch Todos', err);
    });

    //client.close();
});
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

    // // Delete many:
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    
    // // Delete one:
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // Find one and delete:
    db.collection('Todos').findOneAndDelete({ text: 'Eat lunch' }).then((result) => {
    console.log(result);
    });


    //client.close();
});
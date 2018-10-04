const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5bb4e47e559e110e401b40b511';
// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// };

// Todo.find({
//     _id:id // We dont need to convert the String to objID - mongoose does it
//     //completed: false
// }).then((todos) => {
//     console.log('Todos: ',todos);
// });

// Todo.findOne({
//     _id:id // We dont need to convert the String to objID - mongoose does it
// }).then((todo) => {
//     console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         //id is not in db:
//         return console.log('ID not found');
//     }
//     console.log('Todo by ID: ', todo);
// }).catch((e) => {
//     console.log(e);
// });

var id = '5bb4e5d9b1e03c1118b6284e';

if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}

User.findById(id).then((user) => {
    if(!user){
        //id is not in db:
        return console.log('userID not found');
    }
    console.log('user by ID: ', user);
}).catch((e) => {
    console.log(e);
});

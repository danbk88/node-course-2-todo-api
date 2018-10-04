var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectID} = require('mongodb');

var app = express();

app.use(bodyParser.json());

// App routing/ending points:
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then( (doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req,res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

// Get a specific todo - query params
app.get('/todos/:id', (req,res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        console.log('todoID is not valid');
        return res.status(404).send('todoID is not valid');
    }
    Todo.findById(id).then((todo) => {
        if(!todo){
            //id is not in db:
            console.log('todo is not found');
            return res.status(404).send('todoID is not found');
        }
        console.log('Todo by ID: ', todo);
         res.send({todo});
    }).catch((e) => {
        console.log('error', e);
        return res.status(400).send('todoID is not found');

    });
});


app.listen(3000, () => {
    console.log('Started on port 3000');
});
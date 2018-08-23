const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');
var user = os.userInfo();
var argv = yargs.argv;

//console.log(`Process ${process.argv[2]}`);
//var commandName = process.argv[2];
//console.log(argv._[0]);

//console.log(user);
//console.log(notes);
//fs.appendFile('greetings-txt', `Hello ${notes.name} your age is ${notes.age}`, function (err) {
//    if (err) {
//        console.log("Error found parag!!!");
//    }
//});

//console.log(`Hello ${notes.name} your age is ${notes.age}`);

//console.log(`Your additon result is ${notes.Add(3, 4)}`);
//console.log(`Your multiplication result is ${notes.Multiplication(3, 4)}`);
//console.log(`your subtraction result is ${notes.Substract(3, -4)}`);
//console.log(notes.Divide(3, 0));

//console.log(_.isString(true));
//console.log(_.isString("This is parag check"));
//console.log(_.isString("this is me"));
//var object = { 'a': 1 };
//var other = { 'b': 1 };
//console.log(_.isEqual(object, other));
//console.log(_.uniq(["Parag", 1, 2, "Parag", 1, 3]));

//if (commandName === 'Add') {
//    console.log(notes.Add(argv.firstNumber, argv.secondNumber));
//}

//var obj = notes.Add(argv.age);

//////////////////////////////////////////////////callback function///////////////
//notes.Add(56,'HelloWorld', (callbackuserobject) => {
//    console.log(`your name  is ${callbackuserobject.name}`);
//});

//////////////////////////////////////////////////callback function///////////////
//Node Calculator App

//Addtion Program
notes.Add(argv.val1, argv.val2, (callbackObjectFromAddtion) => {
    console.log(callbackObjectFromAddtion);
});

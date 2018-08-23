//console.log("this is parag note.js file");
//console.log(module);
//module.exports.age = 25;
//module.exports.name = "Parag Agrawal";

////////////////////Callback logic//////////////////////////////////
//var Add = (age,name, callback2) => {
//    var jsonUserDetails = {
//        age: age,
//        name: name,
//        Address: "Samadhiya colony gwalior"
//    };
//    callback2(jsonUserDetails);
//}
///////////////////////////////////////////////////////////////////

var Add = (val1, val2, addFunctionCallback) => {
    if(val1 !== 0 && val2 !==0){
    var addResult = {
        result: val1 + val2,
        MessageToDisplay: `your addition result is ${val1 + val2}`
    };   
    setTimeout(() => {
        addFunctionCallback(addResult.MessageToDisplay);
    }, 2000)
    }
    else {
        addFunctionCallback('value cannot be zero');
    }
}



var Substract = (a, b) => {
    return a - b;
}

var Multiplication = (a, b) => {
    return a * b;
}

var Divide = (a, b) => {
    if (b != 0) {
        return a / b;
    }
    else {
        console.log("Divide part can not be equal to zero");
    }    
}

module.exports = {
    Add,
    Substract,
    Multiplication,
    Divide
};
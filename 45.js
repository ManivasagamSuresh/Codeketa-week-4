Rock ,Paper, Scissor

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  let a=userInput[0].split(' ');

var Game = function(pl1,pl2){
    var r = "R";
    var p = "P";
    var s = "S";
    if(pl1 === pl2){
        console.log("D");
    }else{
        if(pl1===r&&pl2===s||pl1===p&&pl2===r||pl1===s&&pl2===p){
            console.log(a[0]);
        }else{
            console.log(a[1]);
        }
    }
};

Game(a[0],a[1]);

  //end-here
});
"use strict";
var sports = "축구";
let music = "째즈";


function get(){
  var sports ="농구";
  let music = "클래식";
  
  console.log("1: ", sports);// 농구
  console.log("2: ", this.sports);//농구
  console.log("3: ", this.music);//undefinded
};

window.get();

get();


  var es5 = function(a, b){
    return a + b;
  }

  var sum = es5(3,4);
  console.log(sum); //7



  var es6 = (a,b) => {
    return a + b;
  }

  let result = es6(3,4);
  console.log(result);//7

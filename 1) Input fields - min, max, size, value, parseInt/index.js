"use strict";

let Value = document.querySelector("#input_test_1").value
console.log(Value);

let button = document.getElementById("button_test_1");
console.log(button);

button.addEventListener("click", function(){
    let amout = document.getElementById("input_test_1").value;
    console.log(amout);
})

function f1 (odd){  
    let Int = "23";    
    let amout = document.getElementById("input_test_1").value;
    odd = amout + Int;
}




// let a = "23";
// console.log( parseInt( a ) + 1 );


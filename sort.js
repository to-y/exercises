'use strict';

let arr = [77, 1, 60, 33, 76, 600, 0, 5];

let array = [];
let temp;

for (let i = 0; i < arr.length; i++) {
  sort(arr[i]);
}

function sort(num) {
  setTimeout(function() {
    console.log(num);
  }, num*10);
}




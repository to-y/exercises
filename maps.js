'use strict';

let arr = ["ground", "control", "to", "major", "tom"];


function maps (arr,cb) {
 return arr.map(cb);
}

console.log(maps(arr,length));


function map (arr, cb) {
  arr.forEach((x) => {
    console.log(cb(x));
  })

}

function length (arr) {
  return arr.length;
}


map(arr, length);





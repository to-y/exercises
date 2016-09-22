
function multiply (x) {
  function realMultiply (y) {
    return x * y;
  }
  return realMultiply;
}

console.log((multiply(4))(6));

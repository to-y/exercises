function printLoop (i) {
  setTimeout(function () {
    console.log(i);
  }, 1000 + 1);
}

for (var i = 0; i < 3; i++) {
  printLoop(i);
}


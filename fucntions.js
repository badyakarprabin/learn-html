function b() {
  var test;
  console.log(test)
}

function a() {
  var test =4;
  console.log(test)
  b();
}

var test = 3;
a();
console.log(test);

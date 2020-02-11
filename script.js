// ! REFERENCE ERRORS
// error one
let refError = undefinedVariable;

// error two
(function add(a, b) {
  return a + b + c;
})(5,4,3)

//error three
let number;
for (let index = 0; index < 5; index++) {
  number = index;
}
number = index;

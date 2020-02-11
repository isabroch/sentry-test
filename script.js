// ! REFERENCE ERRORS
/* // error one
let refError = undefinedVariable; */

/* // error two
(function add(a, b) {
  return a + b + c;
})(5,4,3) */

//error three
let number;
for (let index = 0; index < 5; index++) {
  number = index;
}
number = index;

// error four
(function () {
  const a = 1;
  const b = 2;
  return a + b;
})()
console.log(a);

// error five
const call = {
  to: "61121066",
  from: "99004858",
  showDetails: () => {
    const message = `${this.from} is calling ${this.to}`;
    return message;
  }
}
call.showDetails();
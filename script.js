// ! REFERENCE ERRORS
// error one - fixed
let refError = "undefinedVariable";

// error two - fixed
(function add() {
  return [...arguments].reduce( (acc, cur) => acc + cur );
})(5,4,3)

//error three - fixed
let number;
let index;
for (index = 0; index < 5; index++) {
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

// error six
console.log(runFunction());
const runFunction = () => { return 'Does this exist yet?'}
/* // ! REFERENCE ERRORS
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

// error four - fixed
(function () {
  const a = 1;
  const b = 2;
  console.log(a);
  return a + b;
})()

// error five - doesn't actually cause a reference error! is just getting 'undefined'.
const call = {
  to: "61121066",
  from: "99004858",
  showDetails: function() {
    const message = `${this.from} is calling ${this.to}`;
    console.log(message);
    return message;
  }
}
call.showDetails();

// error six - fix! alternative fix: define function before calling.
console.log(runFunction());
function runFunction() { return 'Does this exist yet?'}

// error seven - doesn't actually cause reference error! is just getting 'undefined'.
document.querySelector('#error').addEventListener('click', function(e) {
  console.log(this.value);
}); */
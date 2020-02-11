/* TYPE ERRORS
* MDN [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError]
  The TypeError object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.
*/

// [1] TypeError: "x" has no properties OR TypeError: can't access property "x" of "y"
var er1 = undefined; // pretend foo is the result of a function
// er1.substring(1);
// er1.bar;

// [2] TypeError: "x" is not a function
// document.getElementByID('typo') // should be ...ById (notice capitalization)

// [3] TypeError: 'x' is not iterable
const er3 = { firstName: 'John', lastName: 'Smith' };
// er3.foreach( el => { console.log(el) })

// [4] TypeError: invalid assignment to const "x"
const color = red;
color = white;

/* REFERENCE ERRORS
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
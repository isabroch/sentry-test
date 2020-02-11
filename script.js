try {
  let typeError = document.querySelector('#doesNotExist');
  typeError.innerHTML = "This doesn't exist though!";
} catch (error) {
  document.querySelector('#error').innerHTML = error.message;
}
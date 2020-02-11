try {
  let typeError = document.querySelector('#doesNotExist');
  typeError.innerHTML = "This doesn't exist though!";
} catch (error) {
  console.error(error);
  document.querySelector('#error').innerHTML = error.message;
}
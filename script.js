try {
  createError();
} catch (error) {
  console.error(error);
  document.querySelector('#error').innerHTML = error.message;
}
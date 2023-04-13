let inputBox = document.querySelector('#input-box');
let img = document.querySelector('img');

// inputBox.addEventListener('keypress', function (event) {
//   console.log('keypress');
// });

// inputBox.addEventListener('keydown', function (event) {
//   console.log('keydown');
// });

// inputBox.addEventListener('keyup', function (event) {
//   console.log('keyup', event.key);
//   console.log('keyup', event.keyCode);
// });

// inputBox.addEventListener('focus', function (event) {
//   alert('focus');
// });

// inputBox.addEventListener('blur', function (event) {
//   alert('blur');
// });

// inputBox.addEventListener('change', function (event) {
//   console.log('change');
// });

img.addEventListener('error', function (event) {
  console.log('error');
  event.target.src = '../../img/tomato.jpg';
});

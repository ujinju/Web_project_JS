'use strict';

let text = '';
// console.log(1 + 2);
// console.log('java' + 'script');
// console.log('java' + 1);
for (let i = 0; i < 10; i++) {
  if (i == 3) {
    // continue;
    break;
  }
  text = text + i;
  // console.log(`text[${i}]: `, text);
}
console.log(text);

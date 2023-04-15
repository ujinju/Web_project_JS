'use strict';

// 숫자 타입
let number = 2;
const number2 = 1.2;
console.log('number2');
console.log(5 / 0);
console.log(-5 / 0);
let nan = 'hello' / 5;
console.log(typeof nan);
console.log(nan);

//문자 타임
const name1 = '유진주';
const name2 = '유진주';
const name3 = `홍길동`;

const name = '유진주';
const age = 22;
console.log(
  '안녕하세요 제 이름은 ' + name + '입니다. 나이는 ' + age + '살이에요.'
);
console.log('------------');
console.log(`안녕하세요 제 이름은 ${name}입니다. 나이는 ${age}살이에요.`);
const message = `안녕하세요

이렇게 표현할 수 있어요`;
console.log(message);

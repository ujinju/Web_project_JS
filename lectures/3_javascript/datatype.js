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

이렇게 표현할 수 있어요`; // 백틱(`) 사용
console.log(message);

const hello = "안녕하세요\n제 이름은 '유진주'입니다.";
console.log(hello);

//불리언
const isProgramer = true;
const isDesign = false;
console.log('isProgramer: ', typeof isProgramer);
console.log('isDesign: ', isDesign);
if (isProgramer) {
  console.log('프로그래머입니다.');
} else {
  console.log('디자이너입니다.');
}

//null, undefined
const username = null;
let message2;
console.log('username: ', username);
console.log('message2: ', message2);
console.log(typeof username);

const person = {
  name: '유진주',
  age: 22,
  isPerson: true,
  say() {
    console.log('Hello!');
  },
};

const arr = [1, 2, 3, 4, 5];

console.log(arr.length);
arr.push(88);
console.log(arr);

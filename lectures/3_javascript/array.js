'use strict';

// //배열생성
// const fruits = ['사과', '바나나', '딸기', '파인애플'];
// // const fruits = new Array('사과', '바나나', '딸기');
// console.log('fruits: ', fruits);

// console.log(fruits[0]);
// console.log(fruits[1]);
// fruits[2] = '포도';
// console.log(fruits[2]);

// //자주 사용하는 배열 API
// //length
// console.log('fruits.length: ', fruits.length);
// console.log('마지막 값: ', fruits[fruits.length - 1]);

// //push()
// fruits.push('귤');
// console.log(fruits);

// //forEach()
// fruits.forEach(function (item, index) {
//   console.log(index, item);
// });

// //pop() 뒤에서부터 제거
// // fruits.pop();
// // console.log('removeditem: ', fruits);
// // let removeditem = fruits.pop();
// // console.log('제거완료: ', fruits);

// //shift() 앞에서부터 제거
// // fruits.shift();
// // console.log(fruits);

// //unshift()
// fruits.unshift('수박');
// console.log(fruits);

// //indexOf() 인덱스 정보
// const index = fruits.indexOf('파인애플');
// console.log('index: ', index);
// console.log('index: ', fruits.indexOf('토마토'));

// //splice()
// const findIdex = fruits.indexOf('파인애플');
// console.log('findIdex: ', findIdex);
// fruits.splice(findIdex, 1);
// console.log(fruits);

// 구조 분해 할당
let fruits = ['사과', '바나나', '딸기'];
// let apple = fruits[0];
// let banana = fruits[1];
// let strawberry = fruits[2];

let [apple, banana, strawberry, ...others] = [
  '사과',
  '바나나',
  '딸기',
  '포도',
  '파인애플',
];
console.log(apple);
console.log(banana);
console.log(strawberry);
console.log(others);

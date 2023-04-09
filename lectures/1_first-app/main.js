console.log('Hello!');
console.log('Hello@@@');
console.log('Hello', '@@@', '!!!java');
console.log('안녕');

// alert('Hello Javascript!'); //경고메시지
/*
console.log('Hello!');
console.log('Hello@@@');
console.log('Hello', '@@@', '!!!java');
*/

let str = 'hello';
console.log('문자열:', str);
let number = 30;
console.log('숫자: ', number);

function Hello() {
  console.log('Hello1');
  console.log('Hello2');
  console.log('Hello3');
}
Hello();
console.log('------');
Hello();

let obj = {
  number: 30, //프로퍼티(속성)
  Hello: function () {
    console.log('obj>Hello1');
    console.log('obj>Hello2');
    console.log('obj>Hello3');
  },
};

console.log(obj.number);
obj.Hello();

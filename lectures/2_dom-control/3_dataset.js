let h2 = document.querySelector('h2');
h2.dataset.test = 'hello javascript';
console.log('h2.dataset.test: ', h2.dataset.test);

let img = document.querySelector('img');
let lilist = document.querySelectorAll('li');
let seletedItem = document.querySelector('.selected-item');

lilist[0].addEventListener('click', selectItem);

lilist[1].addEventListener('click', selectItem);

lilist[2].addEventListener('click', selectItem);

function selectItem() {
  seletedItem.textContent = event.target.textContent;
  img.setAttribute('src', event.target.dataset.img);
}

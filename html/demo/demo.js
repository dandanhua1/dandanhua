const box = document.querySelector('.box');
let isChang = false;
box.addEventListener('click', function () {
  if (!isChang) {
    box.style.background = 'red';
    box.style.color = 'green';
    box.innerText = '123';
    isChang = true;
  } else {
    box.style.background = '#000';
    box.style.color = 'red';
    box.innerText = 'abc';
    isChang = false;
  }
})
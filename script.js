'use strict';
// modal hidden, show-modal,close-modal,overlay
const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

function openModel() {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModel() {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < btnOpenModal.length; i++)
  console.log(btnOpenModal[i].addEventListener('click', openModel));

btnCloseModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

// globle event
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !model.classList.contains('hidden')) closeModel();
});

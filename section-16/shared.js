'use strict';

let modal = document.querySelector('.modal');
let backdrop = document.querySelector('.backdrop');
let planButtons = document.querySelectorAll('.plan button');
let noButton = document.querySelector('.modal__action--negative');

let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

for (let i = 0; i < planButtons.length; i++) {
  planButtons[i].addEventListener('click', () => {
    // backdrop.style.display = "block";
    // modal.style.display = "block";
    // backdrop.className = "open"; // this overwrite the complete class list
    modal.classList.add('open');
    backdrop.style.display = "block";
    setTimeout(() => {
      backdrop.classList.add('open');
    }, 10);
  });
}
if (noButton) {
  noButton.addEventListener('click', colseModal);
}

backdrop.addEventListener('click', () => {
  // mobileNav.style.display = "none";
  mobileNav.classList.remove('open');
  colseModal();
});

function colseModal() {
  // backdrop.style.display = "none";
  // modal.style.display = "none";
  if (modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
  setTimeout(() => {
    backdrop.style.display = "none";
  }, 200);
}

toggleButton.addEventListener('click', () => {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  mobileNav.classList.add('open');
  backdrop.style.display = "block";
  setTimeout(() => {
    backdrop.classList.add('open');
  }, 10);
});

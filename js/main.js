const navButton = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const headerTop = document.querySelector('.header__top-row');
const navItems = document.querySelectorAll('.nav__item');

navButton.addEventListener('click', () => {
  navIcon.classList.toggle('nav-icon--active');
  headerTop.classList.toggle('header__top-row--mobile');
  document.body.classList.toggle('no-scroll');
  
  navItems.forEach((nav) => {
    nav.addEventListener('click', () => {
      navIcon.classList.remove('nav-icon--active');
      headerTop.classList.remove('header__top-row--mobile');
      document.body.classList.remove('no-scroll');
    });
  });
});

// Modal
const myForm = document.querySelector('.history__form-form');
const nameInput = document.getElementById('nameInput');
const phoneInput = document.getElementById('phoneInput');

const projectsBtn = document.getElementById('projects-btn');

const popupProjects = document.getElementById('popup-projects');

const popupHistory = document.getElementById('popup-history');

const exitBtn = document.getElementById('popup-exit');

const exitProjectBtn = document.getElementById('popup-project-exit');

const overlay = document.getElementById('overlay');

const formBtn = document.getElementById('form-btn');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const phone = phoneInput.value;
  if (name === '' && phone === '') {
    formBtn.setAttribute('disabled', 'true');
    return;
  } else {
    popupHistory.style.display = 'block';
    overlay.classList.add('show');
  }
})


projectsBtn.addEventListener('click', () => {
  popupProjects.style.display = 'block';
  overlay.classList.add('show');
});

// Exit

exitBtn.addEventListener('click', () => {
  popupProjects.style.display = 'none';
  overlay.classList.remove('show');
});

exitProjectBtn.addEventListener('click', () => {
  popupHistory.style.display = 'none';
  overlay.classList.remove('show');
});

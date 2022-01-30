const hamburger = document.querySelector('.hamburger');
const navTablet = document.querySelector('.navigation');
const navLink = document.querySelectorAll('.navigation__link');

function toggleMenu() {
  hamburger.classList.toggle('close');
  navTablet.classList.toggle('show');
}
hamburger.addEventListener('click', toggleMenu);
  for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('click', toggleMenu);
}

const portfolioBtn = document.querySelector('.portfolio-buttons');
const portfolioImages = document.querySelectorAll('.portfolio-item');

const portfolioChanges = (x) => {
  document.querySelectorAll('.portfolio-button').forEach(button => button.classList.remove('active'));
  x.target.classList.add('active');

  const season = x.target.dataset.season;
  if (season == 'autumn') {
    portfolioImages.forEach((x,i)=>x.src=`./assets/img/autumn/${i+1}.jpg`);
  } else if (season == 'winter') {
    portfolioImages.forEach((x,i)=>x.src=`./assets/img/winter/${i+1}.jpg`);
  } else if (season == 'spring') {
    portfolioImages.forEach((x,i)=>x.src=`./assets/img/spring/${i+1}.jpg`);
  } else {
    portfolioImages.forEach((x,i)=>x.src=`./assets/img/summer/${i+1}.jpg`);
  }
}

portfolioBtn.addEventListener('click', portfolioChanges);


console.log(`Самооценка по пунктам:  \n
Смена изображений в секции portfolio +25
`);
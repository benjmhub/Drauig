// Add your custom JavaScript code here

const menuTrigger = document.querySelector('.menu-trigger');
const menuContent = document.querySelector('.menu-content');

menuTrigger.addEventListener('click', () => {
  menuContent.style.left = menuContent.style.left === '0px' ? '-300px' : '0px';
});


document.querySelector('.scroll-down-button').addEventListener('click', function (e) {
  e.preventDefault();

  const nextSection = this.closest('section').nextElementSibling;

  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
});

const sliderTextItems = document.querySelectorAll('.slider-text-item');
let currentSlide = 0;

function showSlide(index) {
  sliderTextItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % sliderTextItems.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds

const heroTextItems = document.querySelectorAll('.hero-text-item');
let currentHeroText = 0;

function showHeroText(index) {
  heroTextItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function nextHeroText() {
  currentHeroText = (currentHeroText + 1) % heroTextItems.length;
  showHeroText(currentHeroText);
  document.querySelector('.hero').style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  const colors = ['#ff6600', '#00aaff', '#ff3377']; // List of possible colors
  return colors[Math.floor(Math.random() * colors.length)];
}

setInterval(nextHeroText, 5000); // Change hero text every 5 seconds

const dropdownNotice = document.querySelector('.dropdown-slider-notice');
const sliderPane = document.querySelector('.slider-pane');

function showDropdownNotice() {
  dropdownNotice.style.opacity = 1;
}

function hideDropdownNotice() {
  dropdownNotice.style.opacity = 0;
}

sliderPane.addEventListener('mouseenter', showDropdownNotice);
sliderPane.addEventListener('mouseleave', hideDropdownNotice);

const teamCards = document.querySelectorAll('.team-card');

teamCards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.zIndex = '2';
  });

  card.addEventListener('mouseleave', () => {
    card.style.zIndex = '1';
  });
});

const teamSlider = document.querySelector('.team-slider');
const teamSliderContainer = document.querySelector('.team-slider-container');
const teamCards = document.querySelectorAll('.team-card');
const cardWidth = teamCards[0].offsetWidth;
let currentPosition = 0;

teamSlider.addEventListener('mousedown', (e) => {
  e.preventDefault();
  const initialX = e.clientX;

  const onMouseMove = (event) => {
    const deltaX = event.clientX - initialX;
    const newPosition = currentPosition + deltaX;
    teamSliderContainer.style.transform = `translateX(${newPosition}px)`;
  };

  const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    const newPosition = currentPosition + (e.clientX - initialX);
    const cardIndex = Math.round(newPosition / cardWidth);

    currentPosition = cardIndex * cardWidth;
    teamSliderContainer.style.transform = `translateX(${currentPosition}px)`;
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

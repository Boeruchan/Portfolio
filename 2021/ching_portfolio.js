// page interval
const swup = new Swup();

//clock
setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()

//slide

const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.btn');
let currentSlide = 1;

const manualNav = function(manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
      
    btns.forEach((btn) => {
        btn.classList.remove('active');
    });
    });


    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn,i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currenSlide = i;
    });
});



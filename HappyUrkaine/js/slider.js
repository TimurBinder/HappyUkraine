const circles = document.querySelectorAll(".circle");
const slider = document.querySelector("#slider");
const sliderTitle = document.querySelector("#slider-title"); //Заголовок слайдера
const sliderIntro = document.querySelector("#slider-intro"); //Дополнительный текст слайдера
let circleIndex = 0;

function changeIndCircle(ind) {
    circleIndex = ind;
    console.log(sliderTitle);
    slide();
}

function slide() {
    slider.classList.add('slider');
}
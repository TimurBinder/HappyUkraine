const optionArr = document.querySelectorAll(".pay__select__amount");
const peopleCount = document.querySelector(".people-count"); //Количество людей
let countIndex = 0;

const circles = document.querySelectorAll(".circle");
const slider = document.querySelector("#slider");
const sliderTitle = document.querySelector("#slider-title"); //Заголовок слайдера
const sliderIntro = document.querySelector("#slider-intro"); //Дополнительный текст слайдера
let circleIndex = 0;
let circleIndexPast = circleIndex;

function changeInd(ind) {
    countIndex = ind;
    highlighting(countIndex);
}

function highlighting(ind) {
    for(let opt of optionArr) {
        opt.classList.remove('active');
    }
    optionArr[ind].classList.add('active');

    if(ind == 0) {
        peopleCount.innerHTML="10 people";
    } else if(ind == 1) {
        peopleCount.innerHTML="5 people";
    } else if(ind == 2) {
        peopleCount.innerHTML="2 people";
    } else if(ind == 3) {
        peopleCount.innerHTML="1 people";
    }
}

function changeIndCircle(ind) {
    circleIndex = ind;
    console.log(sliderTitle);
    slide(circleIndex);
    circleColor(circleIndex);
}

function circleColor(ind) {
    for(let circle of circles) {
        circle.style.background = "#e5e5e5";
    }
    circles[ind].style.background = "#0044f1";
}

function slide(ind) {
    if (circleIndexPast == 0) {
        slider.classList.remove('slide1');
    } else if (circleIndexPast == 1) {
        slider.classList.remove('slide2');
    } else if (circleIndexPast == 2) {
        slider.classList.remove('slide3');
    }
    
    if (ind == 0) {
        slider.classList.add('slide1');
        sliderTitle.innerHTML = "<span class='semi-bold'>Help people in Ukraine</span> during the war!";
        sliderIntro.innerHTML = "“Glory To Ukraine! Glory to the heroes”";
    } else if (ind == 1) {
        slider.classList.add('slide2');
        sliderTitle.innerHTML = "Title2";
        sliderIntro.innerHTML = "Text2";
    } else if (ind == 2) {
        slider.classList.add('slide3');
        sliderTitle.innerHTML = "Title3";
        sliderIntro.innerHTML = "Text3";
    }
    circleIndexPast = ind;
}
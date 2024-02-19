let windowWithd = window.innerWidth;
let position = 0;
let slideToShow = 0;
if(windowWithd < 690){
    slideToShow = 1
}
else if(windowWithd < 1130) {
    slideToShow = 2
}
else{
    slideToShow = 3
}
const slideToScroll = 1;
const sliderContainer = document.querySelector('.slider-container');
const sliderTrack = document.querySelector('.slider-track');

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length


const itemWidth = sliderContainer.clientWidth / slideToShow;
const movePosition =slideToScroll*itemWidth;

const line__left = document.querySelector('.line__left');
const line__rigth = document.querySelector('.line__rigth');
const line__centr = document.querySelector('.line__centr');

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});


line__left.addEventListener('click', () =>{
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;
    
    setPosition();
    checLine();
});
line__rigth.addEventListener('click', () =>{
    const itemsLeft = (Math.abs(position) + slideToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;
    
    setPosition();
    checLine();
});
line__centr.addEventListener('click', () =>{

    
    position = 0;
    
    setPosition();
    checLine();
});


const setPosition = () => {
    sliderTrack.style.transform = `translateX(${position}px)`;
};


const checLine =() => {
    line__left.disabled = position === 0;
    line__rigth.disabled = position <= -(itemsCount - slideToShow) * itemWidth;
}

checLine();

(function (){
    const header = document.querySelector('.header');
    window.onscroll = () =>{
        if (windowWithd < 1000){
            header.classList.add('header_active')
        } else {
            header.classList.remove('header_active')
        }
    }
}());
(function(){
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuItemClose =document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click',() => {
        menu.classList.add('header__nav_active')
    })
    menuItemClose.addEventListener('click',() =>{
        menu.classList.remove('header__nav_active')
    })
}())


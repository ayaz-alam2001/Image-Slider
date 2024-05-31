const left = document.querySelector('.left');
const right = document.querySelector('.right');
const images = document.querySelector('.images');
const photo = document.querySelectorAll(".image")

let slideNumber = 1;
const length = photo.length;

const nextSlide = () => {
    images.style.transform = `translateY(-${slideNumber * 405}px)`;
    slideNumber++;
};

const previousSlide = () => {
    images.style.transform = `translateY(-${(slideNumber-2) * 405}px)`;
    slideNumber--;
};
const getFirstSlide = () => {
    images.style.transform = `translateY(0px)`;
    slideNumber = 1;
};

const getLastSlide = () => {
    images.style.transform = `translateY(-${(length-1)*405})`;
    slideNumber = length;
};

right.addEventListener('click', () => {
    slideNumber < length ? nextSlide() : getFirstSlide();

});
left.addEventListener('click', () => {
    slideNumber > 1  ? previousSlide() : getLastSlide();

});


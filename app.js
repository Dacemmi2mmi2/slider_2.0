const allSlides = Array.from(document.querySelectorAll('.dd_slide'));
const arrPositions = ['dd_position_1', 'dd_position_3', 'dd_position_4', 'dd_position_2'];
const arrPositions1 = ['dd_position_3', 'dd_position_4', 'dd_position_2', 'dd_position_1'];
const arrPositions2 = ['dd_position_4', 'dd_position_2', 'dd_position_1', 'dd_position_3'];

const arrPositions3 = ['dd_position_2', 'dd_position_1', 'dd_position_3', 'dd_position_4'];
const arrowLeft = document.querySelector('.dd_arrow_left');
const arrowRight = document.querySelector('.dd_arrow_right');
let indexSlide = 0;

const moveSlider = side => {
    allSlides.forEach(item => item.classList.remove(item.classList[2]));
    side ? indexSlide++ : indexSlide--;
    indexSlide > 3 ? indexSlide = 0 : null;
    indexSlide < 0 ? indexSlide = 3 : null;
    switch (true) {
        case indexSlide === 0:
            allSlides.forEach((item, index) => item.classList.add(arrPositions[index]));
            break;
        case indexSlide === 1:
            allSlides.forEach((item, index) => item.classList.add(arrPositions1[index]));
            break;
        case indexSlide === 2:
            allSlides.forEach((item, index) => item.classList.add(arrPositions2[index]));
            break;
        case indexSlide === 3:
            allSlides.forEach((item, index) => item.classList.add(arrPositions3[index]));
            break;
    }
}
arrowLeft.addEventListener('click', () => moveSlider(false), false);
arrowRight.addEventListener('click', () => moveSlider(true), false);


// modal window
const imgsMainSlider = Array.from(document.querySelectorAll('.dd_slide .dd_images_block'));
const modalWindows = Array.from(document.querySelectorAll('.dd_modal_window'));
const closeButtonsModal = Array.from(document.querySelectorAll('.dd_close_button'));

const showCloseModalWindow = (indexModal, paramShow) => {
    paramShow ? modalWindows[indexModal].style.display = 'flex' : modalWindows[indexModal].style.display = 'none';
    paramShow && checkPosition(indexModal);
}
imgsMainSlider.forEach((item, index) => {
    item.addEventListener('click', () => showCloseModalWindow(index, true), false);
});
closeButtonsModal.forEach((item, index) => {
    item.addEventListener('click', () => showCloseModalWindow(index, false), false);
});


// modal slider
const leftButtonsModalSlider = Array.from(document.querySelectorAll('.dd_modal_arrow_left'));
const rightButtonsModalSlider = Array.from(document.querySelectorAll('.dd_modal_arrow_right'));
const allModalSliders = Array.from(document.querySelectorAll('.dd_scroll_modal_slider'));
const dotsModalSliders = Array.from(document.querySelectorAll('.dd_dots_show_slide'));
const positionSliders = { 0: 0, 1: 0, 2: 0, 3: 0, };
const widthItemModalSlider = document.querySelector('.dd_for_get_width').offsetWidth;

const showActiveDots = indexDots => {
    const arrDots = Array.from(dotsModalSliders[indexDots].children);
    arrDots.forEach(item => item.style.backgroundColor = '#bfbfbf');
    arrDots[Math.abs(positionSliders[indexDots] / widthItemModalSlider)].style.backgroundColor = '#fff';
}

const changeSlide = (indexSlider, paramSide) => {
    if (paramSide) {
        allModalSliders[indexSlider].style.transform = `translateX(${positionSliders[indexSlider] -= widthItemModalSlider}px)`;    
    } else {
        allModalSliders[indexSlider].style.transform = `translateX(${positionSliders[indexSlider] += widthItemModalSlider}px)`;    
    }
    showActiveDots(indexSlider);
    checkPosition(indexSlider);
}

const checkPosition = function (index) {
    const quantity = allModalSliders[index].children.length - 1;
    positionSliders[index] === 0 ? leftButtonsModalSlider[index].style.display = 'none' : leftButtonsModalSlider[index].style.display = 'block';
    positionSliders[index] === -(widthItemModalSlider * quantity) ? rightButtonsModalSlider[index].style.display = 'none' : rightButtonsModalSlider[index].style.display = 'block';
}

leftButtonsModalSlider.forEach((item, index) => {
    item.addEventListener('click', () => changeSlide(index, false), false);
});
rightButtonsModalSlider.forEach((item, index) => {
    item.addEventListener('click', () => changeSlide(index, true), false);
});
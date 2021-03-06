'use strict'

// place-list slide
const placeList = document.querySelector("#place-list");
const placeListImg = placeList.querySelectorAll("li");
const upBtn = document.querySelector(".fa-sort-up ");
const downBtn = document.querySelector(".fa-sort-down ");
let counter = 4;

upBtn.addEventListener('click',()=>{
    if(counter<=2) return;
    counter--;
    placeList.style.transition = 'transform 0.3s ease-in-out';
    placeList.style.transform = 'translateY('+counter*(-150)+'px)';
});

downBtn.addEventListener('click',()=>{
    if(counter>=14) return;
    counter++;
    placeList.style.transition = 'transform 0.3s ease-in-out';
    placeList.style.transform = 'translateY('+counter*(-150)+'px)';
});

placeList.addEventListener('transitionend',()=>{
    if(placeListImg[counter].id ==='last-clone'){
        counter = counter+9;
        placeList.style.transition = 'none';
        placeList.style.transform = 'translateY('+counter*(-150)+'px)';
    }
})
placeList.addEventListener('transitionend',()=>{
    if(placeListImg[counter].id ==='first-clone'){
        counter = counter-9;
        placeList.style.transition = 'none';
        placeList.style.transform = 'translateY('+counter*(-150)+'px)';
    }
})

// content-list slide
const infoContainer = document.querySelector("#info-container");
const infoList = document.querySelector("#info-list");
const infoContent = infoList.querySelectorAll('.content-container');

let contentCounter = 4;

upBtn.addEventListener('click',()=>{
    if(contentCounter<0) return;
    contentCounter--;
    infoList.style.transition = 'transform 0.3s ease-in-out';
    infoList.style.transform = 'translateY('+contentCounter*(-150)+'px)';
});

downBtn.addEventListener('click',()=>{
    if(contentCounter>10) return;
    contentCounter++;
    infoList.style.transition = 'transform 0.3s ease-in-out';
    infoList.style.transform = 'translateY('+contentCounter*(-150)+'px)';
});

infoList.addEventListener('transitionend',()=>{
    if(infoContent[contentCounter].id ==='first-content-clone'){
        contentCounter = contentCounter-9;
        infoList.style.transition = 'none';
        infoList.style.transform = 'translateY('+contentCounter*(-150)+'px)';
    }
});

infoList.addEventListener('transitionend',()=>{
    if(infoContent[contentCounter].id ==='last-content-clone'){
        contentCounter = 9;
        infoList.style.transition = 'none';
        infoList.style.transform = 'translateY('+contentCounter*(-150)+'px)';
    }
});

// big-img change
const bigImgList = document.querySelector('#img-list');
const bigImg = document.querySelectorAll('.big-img');
const img = document.querySelectorAll('img');

let bigImgCounter = 1;

upBtn.addEventListener('click',()=>{
    bigImgCounter--;
    bigImgList.classList.add('img-fade');
    setTimeout(()=>{bigImgList.classList.remove('img-fade')},700)
    bigImgList.style.transform = 'translateY('+bigImgCounter*(-800)+'px)';
    if(bigImg[bigImgCounter].id ==='big-img-last-clone'){
        bigImgCounter=9;
        bigImgList.style.transform = 'translateY('+bigImgCounter*(-800)+'px)';
    }
});
downBtn.addEventListener('click',()=>{
    bigImgCounter++;
    bigImgList.classList.add('img-fade');
    setTimeout(()=>{bigImgList.classList.remove('img-fade')},700)
    bigImgList.style.transform = 'translateY('+bigImgCounter*(-800)+'px)';
    if(bigImg[bigImgCounter].id ==='big-img-first-clone'){
        bigImgCounter=1;
        bigImgList.style.transform = 'translateY('+bigImgCounter*(-800)+'px)';
    }
});

// main-modal
const modalList = document.querySelectorAll('.modal');
const moreBtn = document.querySelectorAll('.place-modal-btn');
const backGroundImg = document.querySelector('.bg');
const closeBtn = document.querySelectorAll('.close-btn');

function clickMoreBtn(e){
    let targetNumber = e.target.getAttribute('data-number');
    modalList[targetNumber-1].style.transform = 'translateX(0%)';
    modalList[targetNumber-1].style.transition = 'all 0.9s cubic-bezier(0.665, 0.000, 0.325, 0.985)';
    backGroundImg.classList.remove('bg-fade-out');
    backGroundImg.classList.add('bg-fade-in');
    backGroundImg.style.transform='scale(1.5)';
    backGroundImg.style.transition='all 0.5s ease-in-out'
    backGroundImg.style.opacity='0';
    
}

moreBtn.forEach(item=>{
    item.addEventListener('click',clickMoreBtn);
})

function clickCloseBtn(e){
    let targetNumber = e.target.getAttribute('data-number');
    backGroundImg.classList.remove('bg-fade-in');
    modalList[targetNumber-1].style.transform = 'translateX(-100%)';
    modalList[targetNumber-1].style.transition = 'all 0.9s cubic-bezier(0.665, 0.000, 0.325, 0.985)';
    backGroundImg.classList.add('bg-fade-out');
    backGroundImg.style.transform='scale(1)';
    backGroundImg.style.transition='all 0.5s ease-in-out'
    backGroundImg.style.display='block';
    backGroundImg.style.opacity='1';
}

closeBtn.forEach(item=>{
    item.addEventListener('click',clickCloseBtn);
})

//main(landing page)-modal

const landingPage = document.querySelector('#main-modal');
const landingPageBtn = document.querySelector('#main-btn');

function loadFirstPage(e){
    landingPage.style.display = 'block';
}
window.addEventListener('load',loadFirstPage);

landingPageBtn.addEventListener('click',()=>{
    landingPage.classList.add('bg-fade-in')
    setTimeout(()=>{landingPage.style.display = 'none'},1000)
})

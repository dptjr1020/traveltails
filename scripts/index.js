/**
 * GitHub Repository Phishing Alert Appeal & Project Verification
이 페이지는 깃허브에서 발생한 피싱 경고 오탐지(False Positive)를 해명하고, 해당 코드가 순수한 학습 및 포트폴리오용임을 증명하기 위해 작성되었습니다.
 * PROJECT: Portfolio Prototype
 * WARNING: This script does not process real transactions or user credentials.
 * All functions are for demonstration purposes only.
 */


const pick = document.querySelector('.spring2026 .pick');
const hero_tab = document.querySelectorAll('.hero_list li a');
const hero_video = document.querySelectorAll('#hero_wrap .hero_video');
const continent_tab = document.querySelectorAll('.continent_list li a');
const continent_video = document.querySelectorAll('.suggest_contents_bg .suggest_contents')
const time = document.querySelector('.time_contents .left_img')
const eventbnr = document.querySelector('.event_bnr .event_swiper')
const headers = document.querySelector('header')

console.log(pick, hero_tab, hero_video, continent_tab, continent_video, time, eventbnr, headers);


// -----------------------------------------header

window.addEventListener('scroll',function(){
    const vh = this.window.innerHeight;
    if(this.window.scrollY >= vh){
        headers.classList.add('scroll')
    }
    else headers.classList.remove('scroll')
})





const pickSwiper = new Swiper(pick,{
    slidesPerView:5,
    spaceBetween:20,
    centeredSlides:true,
    initialSlide:2,
    loop:true,
    breakpoints: {
        1280: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 16
        },
        740: {
            slidesPerView: 2,
            spaceBetween: 12
        },
        0: {
            slidesPerView: 1.2,
            spaceBetween: 10
        }
    }
})
// --------------------------------------히어로배너
for (let i=0; i<hero_tab.length; i++){
    hero_tab[i].addEventListener('click', function(e){
        e.preventDefault();
        for (let j=0; j<hero_video.length; j++){
            hero_video[j].style.display = 'none';
        }
        for (let j=0; j < hero_tab.length; j++){
            hero_tab[j].classList.remove('active');
        }
        hero_video[i].style.display = 'block';
        hero_tab[i].classList.add('active');
    })
}
// ---------------------------------------대륙배너
for (let i=0; i<continent_tab.length; i++){
    continent_tab[i].addEventListener('click', function(e){
        e.preventDefault();
        for (let j=0; j<continent_video.length; j++){
            continent_video[j].style.display = 'none';
        }
        for (let j=0; j<continent_tab.length; j++){
            continent_tab[j].classList.remove('active');
        }
        continent_video[i].style.display = 'flex';
        continent_tab[i].classList.add('active');
    })
}
// -------------------------------------------------------타임딜
const timeSwiper = new Swiper(time,{
    autoplay:{
        delay:4000,
    },
    slidesPerView:1,
    loop:true,
    pagination: {
        el:'.swiper-pagination'
    }
})


document.addEventListener('DOMContentLoaded', () => {
const timer = document.getElementById('timer');

const DURATION = 3 * 60 * 60 * 1000;

let startTime = localStorage.getItem('startTime');

if (!startTime) {
    startTime = Date.now();
    localStorage.setItem('startTime', startTime);
} else {
    startTime = parseInt(startTime);
}

setInterval(() => {
    const now = Date.now();
    let gap = DURATION - (now - startTime);

    if (gap <= 0) {
    startTime = Date.now();
    localStorage.setItem('startTime', startTime);
    gap = DURATION;
    }

    const h = Math.floor(gap / 1000 / 60 / 60);
    const m = Math.floor((gap / 1000 / 60) % 60);
    const s = Math.floor((gap / 1000) % 60);

    timer.innerText =
    String(h).padStart(2, '0') + ':' +
    String(m).padStart(2, '0') + ':' +
    String(s).padStart(2, '0') + ' 남음';
}, 1000);
});
// ------------------------------------------------------이벤트배너
const eventSwiper = new Swiper(eventbnr,{
    slidesPerView:1,
    loop:true,
    autoplay:{
        delay:5000,

    }

})
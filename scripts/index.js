const pick = document.querySelector('.spring2026 .pick');
const hero_tab = document.querySelectorAll('.hero_list li a');
const hero_video = document.querySelectorAll('#hero_wrap .hero_video');
const continent_tab = document.querySelectorAll('.continent_list li a');
const continent_video = document.querySelectorAll('.suggest_contents_bg .suggest_contents')
const time = document.querySelector('.time_contents .left_img')
console.log(pick, hero_tab, hero_video, continent_tab, continent_video, time);

const pickSwiper = new Swiper(pick,{
    slidesPerView:5,
    spaceBetween:20,
    centeredSlides:true,
    initialSlide:2,
    loop:true,
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
    slidesPerView:1,
    loop:true,
})
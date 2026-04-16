const pick = document.querySelector('.spring2026 .pick')
const hero_tab = document.querySelectorAll('.hero_list li a')
const hero_video = document.querySelectorAll('#hero_wrap .hero_video')
console.log(pick, hero_tab, hero_video)

const pickSwiper = new Swiper(pick,{
    slidesPerView:5,
    spaceBetween:20,
    centeredSlides:true,
    initialSlide:2,
    loop:true,
})

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
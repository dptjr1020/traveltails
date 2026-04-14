const pick = document.querySelector('.spring2026 .pick')
console.log(pick)

const pickSwiper = new Swiper(pick,{
    slidesPerView:5,
    spaceBetween:20,
    centeredSlides:true,
    initialSlide:2,
    loop:true,
})

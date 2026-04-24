const dtSwip = document.querySelector('.main_info .photo_wrap')
const review = document.querySelector('.epilogue .review_wrap')
console.log(dtSwip, review)

dtSwiper = new Swiper(dtSwip,{
    spaceBetween:20,
    slidesPerView:2.5,
})

reviewSwip = new Swiper(review,{
    slidesPerView:3.3,
    spaceBetween:10,
})
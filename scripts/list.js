const cardWrap = document.querySelector('main .card_bnr');

console.log(cardWrap);

card = new Swiper(cardWrap,{
    slidesPerView:4,
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:4000,
        speed:3000,
    }
})
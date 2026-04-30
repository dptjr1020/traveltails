const cardWrap = document.querySelector('main .card_bnr');


console.log(cardWrap);

const card = new Swiper(cardWrap,{
    slidesPerView:4,
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:4000,
    },speed:1000,
})

// ------------------------------------키워드 테마
const keyword = document.querySelectorAll('.theme li a')
const cards = document.querySelectorAll('.theme_item')
console.log(keyword, cards)

for (let k of keyword){
    k.addEventListener('click',function(e){
        e.preventDefault();
        for (let btn of keyword){
            btn.classList.remove('active')
        }
        // 클릭한 애만 active 추가
        k.classList.add('active')
        for (let list of cards){
            list.style.display = 'none'
            if(k.dataset.category == list.dataset.name) list.style.display = 'flex'
        }
    })
}

// -------------------------------------------숙소추천
const hotel = document.querySelectorAll('.hotel_loc_list li a')
const list = document.querySelectorAll('.hotel_wrap .hotel_list')
console.log(hotel, list)

for (let h of hotel){
    h.addEventListener('click',function(e){
        e.preventDefault();
        for (let btn of hotel){
            btn.classList.remove('active')
        }
        // 클릭한 애만 active 추가
        h.classList.add('active')
        for (let lists of list){
            lists.style.display = 'none'
            if(h.dataset.category == lists.dataset.name) lists.style.display = 'flex'
        }
    })
}

// -----------------------------------------이벤트배너 스와이퍼
const eventS = document.querySelector('main .event_bnr')

const listEventSwiper = new Swiper(eventS,{
    autoplay:{delay:5000},
    loop:true,
    slidesPerView:1,
})
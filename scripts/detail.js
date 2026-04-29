const dtSwip = document.querySelector('.main_info .photo_wrap')
const review = document.querySelector('.epilogue .review_wrap')
const cateTitle = document.querySelectorAll('.nav_wrap li a')
const cateActive = document.querySelectorAll('.nav_wrap li')
const cateContent = document.querySelectorAll('#info_wrap > div')
console.log(dtSwip, review, cateTitle, cateContent)

dtSwiper = new Swiper(dtSwip,{
    slidesPerView:2,
})

reviewSwip = new Swiper(review,{
    slidesPerView:3.3,
    spaceBetween:10,
})

const btn = document.querySelector('.view_more');
const imgBox = document.querySelector('.schedule_img_view');

btn.addEventListener('click', () => {
imgBox.classList.toggle('active');

if (imgBox.classList.contains('active')) {
    btn.textContent = '접기';
} else {
    btn.textContent = '자세히 보기';
}
});

for (let title of cateTitle) {
    title.addEventListener('click', function (e) {
        e.preventDefault();
        activeFunc(e.currentTarget);
        const i = e.currentTarget.dataset.index;
        const target = cateContent[i];
        window.scrollTo({
            top: target.offsetTop - 100,
            behavior: "smooth"
        });
    });
}
// active 적용 함수
function activeFunc(target) {
    for (let i of cateTitle) {
        i.classList.remove('active');
    }
    target.classList.add('active');
}
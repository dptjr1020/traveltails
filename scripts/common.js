/* const headBg = document.querySelector('#head_contents');
const gnb = document.querySelectorAll('#gnb > li');
const txt = document.querySelectorAll('#gnb > li > a')
console.log(txt)
for (let i of gnb) {
    const lnb = i.children[1]; // .lnb
    // lnb가 없는 메뉴(그냥 링크만 있는 경우)는 패스
    if (!lnb) continue;
    // 1. 마우스를 올렸을 때 (mouseenter)
    i.addEventListener('mouseenter', function () {
        // 모든 lnb를 닫을 필요 없이, 현재 마우스가 올라간 메뉴의 lnb만 보여줌
        lnb.style.display = 'flex';
        if (linkText) linkText.style.color = '#446CFF';
    });
    // 2. 마우스가 나갔을 때 (mouseleave)
    i.addEventListener('mouseleave', function () {
        lnb.style.display = 'none';
        if (linkText) linkText.style.color = '';
    });
} */
window.onload = function() {
    const gnb = document.querySelectorAll('#gnb > li');

    for (let i of gnb) {
        const lnb = i.querySelector('.lnb_bg'); // li 안의 .lnb_bg 선택
        const linkText = i.querySelector('a');   // li 안의 메인 메뉴 텍스트(a) 선택
        if (!lnb) continue;
        // 1. 마우스를 올렸을 때
        i.addEventListener('mouseenter', function () {
            // LNB 보여주기
            lnb.style.display = 'flex';
            // 해당 메뉴 글자색을 파란색으로 변경
            if (linkText) {
                linkText.style.color = '#446CFF';
            }
        });
        // 2. 마우스가 나갔을 때
        i.addEventListener('mouseleave', function () {
            // LNB 숨기기
            lnb.style.display = 'none';
            // 글자색을 원래대로 복구 (빈 문자열을 넣으면 CSS에 정의된 원래 색으로 돌아감)
            if (linkText) {
                linkText.style.color = ''; 
            }
        });
    }
}

const menuBtn = document.querySelector('.menu_btn');
const gnb = document.querySelector('#gnb');
const search = document.querySelector('.btm_right .recent_view')
const searchBtn = document.querySelector('.head_right .search')
const overlay = document.querySelector('#head_contents .search_overlay_bg')
const closeBtn = document.querySelector('.search_overlay .close_btn')
const header = document.querySelector('header')
const searchBbtn = document.querySelector('.head_right .search')
console.log(search)

searchBbtn.addEventListener('click', (e) => {
    e.preventDefault();
    header.classList.add('search_on');
});

// X 버튼 클릭 → 닫기
closeBtn.addEventListener('click', () => {
    header.classList.remove('search_on');
});

// index.js
window.addEventListener('load', function() {
    const mainHeader = document.querySelector('header');
    const gnbLi = document.querySelectorAll('#gnb > li');
    if (mainHeader) {
        mainHeader.addEventListener('mouseenter', () => {
            mainHeader.classList.add('on');
        });
        mainHeader.addEventListener('mouseleave', () => {
            mainHeader.classList.remove('on');
            gnbLi.forEach(li => {
                if(li.children[2]) li.children[2].style.display = 'none';
            });
        });
    }
});

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.classList.add('active');
});

// X 버튼 클릭 → 닫기
closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});


menuBtn.addEventListener('click', () => {
    gnb.classList.toggle('active');
});

const gnbItems = document.querySelectorAll('#gnb > li');

gnbItems.forEach(item => {
    const link = item.querySelector('a');
    const lnb = item.querySelector('.lnb_bg');

    if (lnb) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            lnb.style.display =
                lnb.style.display === 'block' ? 'none' : 'block';
        });
    }
});


window.addEventListener('DOMContentLoaded', () => {
    new Swiper('.btm_right .recent_view', {
        slidesPerView: 4,
        spaceBetween: 20,
    });
});
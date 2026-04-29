const dtSwip = document.querySelector('.main_info .photo_wrap')
const review = document.querySelector('.epilogue .review_wrap')
const cateTitle = document.querySelectorAll('.nav_wrap li a')
const cateActive = document.querySelectorAll('.nav_wrap li')
const cateContent = document.querySelectorAll('#info_wrap > div')
console.log(dtSwip, review, cateTitle, cateContent)

dtSwiper = new Swiper(dtSwip,{
    slidesPerView:2,
    spaceBetween:20,
})

reviewSwip = new Swiper(review,{
    slidesPerView:3.3,
    spaceBetween:10,
})

const viewMoreBtns = document.querySelectorAll('.view_more');

viewMoreBtns.forEach((btn) => {
    btn.addEventListener('click', function() {
        const parent = this.parentElement;
        const imgBox = parent.querySelector('.item_detail, .schedule_img_view');

        if (imgBox) {
            const isOpening = !imgBox.classList.contains('active');
            
            // 1. 클래스 토글 (딱딱 끊기며 접힘/펼침)
            imgBox.classList.toggle('active');

            // 2. 텍스트 변경
            this.textContent = isOpening ? '접기' : '자세히 보기';

            // 3. 접었을 때(펼쳐져 있다가 닫혔을 때)만 스크롤 고정 로직 실행
            if (!isOpening) {
                // 버튼의 현재 위치를 가져와서 스크롤을 즉시 이동시킵니다.
                // 'auto'로 설정하면 애니메이션 없이 딱 그 자리에 고정됩니다.
                this.scrollIntoView({ block: 'end', behavior: 'auto' });
                
                // 만약 하단 여백이 너무 없다면 아래 코드를 대신 써보세요.
                // window.scrollTo(0, window.scrollY + this.getBoundingClientRect().top - window.innerHeight + 100);
            }
        }
    });
});

// ---------------------------------------------------------------중간네비게이션 스크롤 및 클릭이동
// --- 1. 스크롤 감지 및 active 변경 (Intersection Observer) ---
const observerOptions = {
    root: null,
    rootMargin: '-15% 0px -70% 0px', // 화면 상단 15% 지점에 도달하면 변경
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            
            // 모든 li에서 active 제거 (범위를 .nav_wrap으로 한정하여 스와이퍼 보호)
            cateActive.forEach(li => li.classList.remove('active'));
            
            // 현재 섹션 인덱스에 맞는 li에 active 추가
            if (cateActive[index]) {
                cateActive[index].classList.add('active');
            }
        }
    });
}, observerOptions);

// 각 섹션 감시 시작 
cateContent.forEach((section, idx) => {
    section.setAttribute('data-index', idx); 
    observer.observe(section);
});

// --- 2. 클릭 시 이동 기능 ---
cateTitle.forEach((title) => {
    title.addEventListener('click', function (e) {
        e.preventDefault();

        const i = this.dataset.index;
        const target = cateContent[i];
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 90, // 헤더 높이에 맞게 살짝 조절
                behavior: "smooth"
            });
        }
    });
});

// ---------------------------------------------------------------스티키바 인원수설정 및 금액
// 1. 단가 설정 
const PRICES = {
    adult: 999000,
    kid: 899000,
    baby: 699000
};

// 2. 요소 선택
const partyCounts = document.querySelectorAll('.party_count'); // 성인, 아동, 유아 그룹들
const totalPriceDisplay = document.querySelector('.price_reserv .price'); // 하단 총 금액
const totalPointDisplay = document.querySelector('.point p'); // 하단 적립 포인트

// 3. 금액 업데이트 함수
function updateTotalPrice() {
    let total = 0;

    partyCounts.forEach(group => {
        const count = parseInt(group.querySelector('.count').value);
        
        // 클래스명(adult, kid, baby)에 따라 단가 매칭
        if (group.classList.contains('adult')) total += count * PRICES.adult;
        else if (group.classList.contains('kid')) total += count * PRICES.kid;
        else if (group.classList.contains('baby')) total += count * PRICES.baby;
    });

    // 총 금액 표시 (천단위 콤마 추가)
    totalPriceDisplay.textContent = total.toLocaleString() + '원';

    // 적립 포인트 계산 (3%)
    const point = Math.floor(total * 0.02);
    totalPointDisplay.textContent = point.toLocaleString() + 'P 적립예정';
}

// 4. 각 그룹(성인, 아동, 유아)에 이벤트 연결
partyCounts.forEach(group => {
    const minusBtn = group.querySelector('.minus_btn');
    const plusBtn = group.querySelector('.plus_btn');
    const input = group.querySelector('.count');

    // 플러스 버튼 클릭
    plusBtn.addEventListener('click', () => {
        input.value = parseInt(input.value) + 1;
        updateTotalPrice();
    });

    // 마이너스 버튼 클릭
    minusBtn.addEventListener('click', () => {
        const currentValue = parseInt(input.value);
        
        // 조건 체크: 성인은 1 미만으로, 나머지는 0 미만으로 내려가지 않음
        if (group.classList.contains('adult')) {
            if (currentValue > 1) {
                input.value = currentValue - 1;
            }
        } else {
            if (currentValue > 0) {
                input.value = currentValue - 1;
            }
        }
        updateTotalPrice();
    });

    // 직접 입력 시에도 반영 (선택 사항)
    input.addEventListener('change', () => {
        if (group.classList.contains('adult') && input.value < 1) input.value = 1;
        if (input.value < 0) input.value = 0;
        updateTotalPrice();
    });
});

// 초기 금액 계산 실행
updateTotalPrice();
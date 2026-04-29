const headBg = document.querySelector('#head_contents');
const gnb = document.querySelectorAll('#gnb > li');

// 모든 lnb를 닫는 함수 (중복 코드를 줄이기 위해 분리)
function closeAllLnb() {
    for (let j of gnb) {
        if (j.children[1]) {
            j.children[1].style.display = 'none';
        }
    }
}

for (let i of gnb) {
    const link = i.children[0]; // a 태그
    const lnb = i.children[1];  // .lnb

    if (!lnb) continue;

    link.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation(); // 부모(document)로 클릭 이벤트가 퍼지는 것을 방지

        // 일단 다 닫고
        closeAllLnb();

        // 클릭한 것만 열기
        lnb.style.display = 'flex';
    });
}

// 문서 전체를 클릭했을 때 실행
document.addEventListener('click', function (e) {
    // 클릭한 요소가 gnb 메뉴 내부가 아니라면 모두 닫기
    // .closest('#gnb')는 클릭한 대상의 상위 요소 중 #gnb가 있는지 찾는 함수입니다.
    if (!e.target.closest('#gnb')) {
        closeAllLnb();
    }
});


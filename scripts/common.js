const headBg = document.querySelector('#head_contents');

const gnb = document.querySelectorAll('#gnb > li');

for (let i of gnb) {
    const link = i.children[0]; // a 태그
    const lnb = i.children[1];  // .lnb

    if (!lnb) continue;

    link.addEventListener('click', function (e) {
        e.preventDefault();

        // 전체 닫기
        for (let j of gnb) {
            if (j.children[1]) {
                j.children[1].style.display = 'none';
            }
        }

        // 클릭한 것만 열기
        lnb.style.display = 'flex';
    });
}
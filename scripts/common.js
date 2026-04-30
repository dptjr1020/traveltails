const headBg = document.querySelector('#head_contents');
const gnb = document.querySelectorAll('#gnb > li');

for (let i of gnb) {
    const lnb = i.children[1]; // .lnb

    // lnb가 없는 메뉴(그냥 링크만 있는 경우)는 패스
    if (!lnb) continue;

    // 1. 마우스를 올렸을 때 (mouseenter)
    i.addEventListener('mouseenter', function () {
        // 모든 lnb를 닫을 필요 없이, 현재 마우스가 올라간 메뉴의 lnb만 보여줌
        lnb.style.display = 'flex';
    });

    // 2. 마우스가 나갔을 때 (mouseleave)
    i.addEventListener('mouseleave', function () {
        lnb.style.display = 'none';
    });
}


window.addEventListener('load', () => {
    history.scrollRestoration = 'manual';
    window.scrollTo({ top: 0, behavior: 'auto' });

    const header = document.querySelector('header');
    const mainSections = document.querySelectorAll('main section');

    const setPadding = () => {
        mainSections.forEach(sec => {
            const value = header.offsetHeight + 40;
            sec.style.paddingTop = `${value}px`;
        });
    };

    setPadding(); // load 시 바로 실행
    window.addEventListener('resize', setPadding); // window 변화 대응

    const skillItems = document.querySelectorAll(".skillList li");

    const descriptions = [
        "시멘틱 마크업으로 구조를 설계하고 접근성을 고려해 작성합니다.",
        "유지보수를 고려한 구조(컴포넌트화/재사용성)로 스타일을 구성합니다.",
        "DOM 조작과 이벤트 기반 인터랙션을 구현합니다.",
        "jQuery를 활용한 간단한 UI 인터랙션 구현이 가능합니다.",
        "다양한 해상도에 대응하는 반응형 웹을 구현합니다.",
        "웹 접근성을 고려한 마크업과 UI 구현을 지향합니다.",
        "웹 표준을 준수한 마크업을 작성합니다.",
        "이미지 보정 및 간단한 배너 제작이 가능합니다.",
        "벡터 기반 그래픽 수정이 가능합니다."
    ];

    skillItems.forEach((li, index) => {
        const originalText = li.innerHTML;

        li.addEventListener("mouseover", () => {
            li.textContent = descriptions[index];
            li.classList.add("active")
        });
        
        li.addEventListener("mouseout", () => {
            li.innerHTML  = originalText;
            li.classList.remove("active")
        });
    });
});

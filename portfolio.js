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
});

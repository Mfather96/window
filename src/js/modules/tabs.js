const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
          tabs = document.querySelectorAll(tabSelector),
          contents = document.querySelectorAll(contentSelector);

    function hideContent() {
        contents.forEach(elem => elem.style.display = 'none');
        tabs.forEach(tab => tab.classList.remove(activeClass))
    }

    function showContent(i = 0) {
        contents[i].style.display = display;
        tabs[i].classList.add(activeClass);
    }

    hideContent();
    showContent();

    header.addEventListener('click', (e) => {
        const target = e.target;

        if ( target &&
            (target.classList.contains(tabSelector.slice(1)) || target.parentNode.classList.contains(tabSelector.slice(1)))) {
            tabs.forEach((tab, index) => {
                if (target === tab || target.parentNode === tab) {
                    hideContent();
                    showContent(index);
                }
            })
        }
    })
}

export default tabs;

const images = () => {

    const imgPopup = document.createElement('div'),
        bigImg = document.createElement('img'),
        workSection = document.querySelector('.works');

    imgPopup.classList.add('popup');
    imgPopup.style.cssText = `
        display: none;
        justify-content: center;
        align-items: center;
    `;
    bigImg.style.cssText = `
        border-radius: 15px;
        max-height: 70vh;
        max-width: 70vw;
        box-shadow: 0 0 30px 20px #fff;
    `;

    imgPopup.append(bigImg);
    workSection.appendChild(imgPopup);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            let path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
        }
    })
};

export default images;
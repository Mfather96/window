const modals = () => {

    function bindModal(triggerSelector, modalSelector, modalCloseSelector, closeByClickOverlay = true) {
        const triggers = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            modalClose = document.querySelector(modalCloseSelector),
            windows = document.querySelectorAll('[data-modal]');

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(window => window.style.display = 'none');

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            })
        })

        modalClose.addEventListener('click', () => {
            windows.forEach(window => window.style.display = 'none');
            modal.style.display = 'none';
            document.body.style.overflow = '';
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeByClickOverlay) {
                windows.forEach(window => window.style.display = 'none');

                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        })
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time)
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalByTime('.popup', 3000);
};

export default modals;

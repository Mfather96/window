import numInputsValidator from "./numInputsValidator";

const formsModule = (state) => {

    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы скоро с вами свяжемся',
        failure: 'Приносим извинения, но наш сервер не работает'
    }

    numInputsValidator('input[name="user_phone"]');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');

            form.appendChild(statusMessage);
            const formData = new FormData(form);
            if (form.getAttribute('data-state') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(response => {
                    console.log(response);
                    statusMessage.textContent = message.success;
                })
                .catch(() => {
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                })

        })
    })

    function clearInputs() {
        inputs.forEach(input => {
            input.value = '';
        })
    }

    async function postData(url, data) {
        document.querySelector('.status').textContent = message.loading;

        let res = await fetch(url, {
            method: "POST",
            body: data
        })

        return res.text();
    }
};

export default formsModule;

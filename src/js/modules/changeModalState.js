import numInputsValidator from "./numInputsValidator";

const changeModalState = (state) => {
    const stateForm = document.querySelectorAll('.balcon_icons_img'),
          stateWidth = document.querySelectorAll('#width'),
          stateHeight = document.querySelectorAll('#height'),
          stateType = document.querySelectorAll('#view_type'),
          stateProfile = document.querySelectorAll('.checkbox');

    numInputsValidator('#width');
    numInputsValidator('#height');

    bindActionToElements('click', stateForm, 'form');
    bindActionToElements('input', stateWidth, 'width');
    bindActionToElements('input', stateHeight, 'height');
    bindActionToElements('change', stateType, 'type');
    bindActionToElements('change', stateProfile, 'profile');

    function bindActionToElements(event, element, prop) {
        element.forEach((elem, i) => {
            elem.addEventListener(event, () => {
                switch (elem.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if (elem.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'cold' : state[prop] = 'warm';
                            element.forEach((box, j) => {
                                box.checked = false;

                                if (i === j) {
                                    box.checked = true;
                                }
                            })
                        } else {
                            state[prop] = elem.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = elem.value;
                        break;
                }
                console.log(state);

            })
        });
    }
}

export default changeModalState;

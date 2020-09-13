import { darkModeCheckbox } from './variables';

console.log('alo');

function getStyle() {
    window.
        getComputedStyle(document).
        getPropertyValue()
}

function changeThemes(theme) {
    document.body.style.backgroundColor = theme
} 

darkModeCheckbox.addEventListener('change', ({target}) => {
    target.checked ? changeThemes('black') : changeThemes('#f5f5f5'); 
})

function changeColors() {
    console.log('WEBPACK ESTÁ LENDO ATÉ AQUI.');
}

export default changeColors();
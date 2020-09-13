import { darkModeCheckbox, html, body } from './variables';

const darkMode = {
    htmlBg: '#333333',
    bodyBg: '#333333'
}

const lightMode = {
    htmlBg: '#f5f5f5',
    bodyBg: '#f5f5f5'
}

const textColors = [
    '#f5f5f5',
    'black'
]

const changingElements = [
    html,
    body
]

const changeTheme = (theme, id) => {
    Object.keys(theme).map((key, index) => {
        changingElements[index].style.backgroundColor = theme[key];
    })

    body.style.color = textColors[id];
}

darkModeCheckbox.addEventListener('change', ({target}) => {
    target.checked
    ? changeTheme(darkMode, 0)
    : changeTheme(lightMode, 1)
})

const successMessage = () => console.warn('WEBPACK LENDO ATÉ AQUI.');

export default successMessage();
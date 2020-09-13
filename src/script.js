import { input, searchButton, selectApp, selectImg, warningDiv, warningDivP, output } from './variables';
import { renderError } from './render-functions';
import { selectPopulator } from './populator-functions';
import { getReq } from './request';
import './dark-mode';

export const apis = [
    {
        name: 'Github',
        img: 'https://image.flaticon.com/icons/svg/733/733609.svg',
        color: 'var(--github-color)',
        imgColor: 'var(--github-img-color)'
    },
    {
        name: 'Twitter',
        img: 'https://image.flaticon.com/icons/svg/733/733579.svg',
        color: 'var(--twitter-color)',
        imgColor: 'var(--twitter-img-color)'
    },
    {
        name: 'Instagram',
        img: 'https://image.flaticon.com/icons/svg/174/174855.svg',
        color: 'var(--instagram-color)',
        imgColor: 'var(--instagram-img-color)'
    },
]


// Handle the calls to the changing select color function
selectApp.addEventListener('change', (e) => {
    selectApp.style.backgroundColor = ''
    let target = e.target.value

    switch (target >= 0) {
        case target == '0':
            selectStyles(target)
            break
        case target == '1' :
            selectStyles(target)
            break
        case target == '2':
            selectStyles(target)
            break
    }
})


// Handles the searchButton click
searchButton.addEventListener('click', () => {
    output.innerHTML = '';

    if (isInputEmpty()) {
        warningDivP.innerHTML = 'Por favor, digite um valor no campo de usuário'
        renderError(warningDiv, 'hide')
        
    } else {
        // Pegar o campo selecionado do select e mandar como parâmetro
        requestFromApi(selectApp.value)
    }
})

const isInputEmpty = () => input.value === '';


// Handles the possible choices from getting APIs
function requestFromApi(app) {
    switch (app) {
        case 'default':
            getReq(`https://api.github.com/users/${input.value}`)
            break
        case '0':
            getReq(`https://api.github.com/users/${input.value}`)
            break
        case '1':
            output.innerHTML = 'Twitter API ainda não adicionada.'
            break
        case '2':
            output.innerHTML = 'Instagram API ainda não adicionada.'
            break
    }
}


// Change the Select styles and the image source
const selectStyles = (target) => {
    selectApp.style.backgroundColor = apis[target].color
    selectImg.style.backgroundColor = apis[target].imgColor
    selectImg.src = apis[target].img

    selectApp.style.transition = '0.2s'
    selectImg.style.transition = '0.2s'
}

selectPopulator();

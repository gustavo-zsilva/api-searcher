import { loadingGif } from './variables';

// Makes the Loading Gif visible
export const renderLoading = () => {
    loadingGif.classList.toggle('hide')
}

// Render when an error occurs
export const renderError = (item, classe) => {
    item.classList.toggle(classe)

    setTimeout(() => {
        item.classList.toggle(classe)
    }, 2000)
}




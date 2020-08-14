const input = document.querySelector('.search input')
const searchButton = document.querySelector('.search-button')
const selectApp = document.querySelector('#select')
const selectImg = document.querySelector('.select-img')

const warningDiv = document.querySelector('.warning')
const warningDivP = document.querySelector('.warning p')

const output = document.querySelector('.output-results')

let loadingGif = document.querySelector('.loading img')

const apis = [
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

// Function that handles populating the select with options
function selectPopulator() {
    apis.map((item, index) => {
        let option = document.createElement('option')

        option.innerHTML = item.name
        option.value = index

        selectApp.appendChild(option)
    })
}

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

// Function that makes the async request to the selected API
function getReq(url) {

    renderLoading()

    axios.get(url)
        .then(response => {
            loadingGif.classList.toggle('hide')

            let user = response.data

            const { name, bio, avatar_url, blog, company, email, location, followers, following, id, repos_url, twitter_username, hireable, public_repos, site_admin, starred_url, subscriptions_url, type, updated_at, url } = user

            populateOutput( name, bio, avatar_url, blog, company, email, location, followers, following, id, repos_url, twitter_username, hireable, public_repos, site_admin, starred_url, subscriptions_url, type, updated_at, url )

        })
        .catch(error => {
            loadingGif.classList.toggle('hide')

            warningDivP.innerHTML = error
            
            renderError(warningDiv, 'hide')
        }) 
}

const outputLabels = [
    [
        'Name: ',
        'Bio: ',
        'Avatar Url: ',
        'Blog: ',
        'Company: ',
        'Email: ',
        'Location: ',
        'Followers: ',
        'Following: ',
        'Id: ',
        'Repositories: ',
        'Twitter Username: ',
        'Hireable: ',
        'Public Repositories: ',
        'Is Site Admin: ',
        'Starred Url\'s: ',
        'Subscriptions Url',
        'Type: ',
        'Updated At: ',
        'Profile Url: '
    ]
]

// Populates the output with the given params
function populateOutput(...params) {
    params.map((param, index) => {
        output.innerHTML += `<p> ${outputLabels[0][index]} ${param} </p>`
    })
}

// Makes the Loading Gif visible
const renderLoading = () => {
    loadingGif.classList.toggle('hide')
}

// Render when an error occurs
const renderError = (item, classe) => {
    item.classList.toggle(classe)

    setTimeout(() => {
        item.classList.toggle(classe)
    }, 2000)
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

const input = document.querySelector('.search input')
const searchButton = document.querySelector('.search-button')
const selectApp = document.querySelector('#select')
const selectImg = document.querySelector('.select-img')

const warningDiv = document.querySelector('.warning')

const output = document.querySelector('.output-results')

let loadingGif = document.querySelector('.loading img')

const apis = [
    {
        name: 'Github',
        img: 'https://image.flaticon.com/icons/svg/733/733609.svg'
    },
    {
        name: 'Twitter',
        img: 'https://image.flaticon.com/icons/svg/733/733579.svg'
    },
    {
        name: 'Instagram',
        img: 'https://image.flaticon.com/icons/svg/174/174855.svg'
    }
]

function selectPopulator() {
    apis.map((item, index) => {
        let option = document.createElement('option')

        option.innerHTML = item.name
        option.value = index

        selectApp.appendChild(option)
    })
}

searchButton.addEventListener('click', () => {
    output.innerHTML = '';

    if (isInputEmpty()) {
        warningDiv.classList.toggle('hide')

        setTimeout(() => {
            warningDiv.classList.toggle('hide')
        }, 2000)
    } else {
        // Pegar o campo selecionado do select e mandar como parâmetro
        requestFromApi(selectApp.value)
    }
})

const isInputEmpty = () => input.value === '';

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

function getReq(url) {

    renderLoading()

    axios.get(url)
        .then(response => {
            loadingGif.classList.toggle('hide')

            let user = response.data

            const { name, bio, avatar_url, blog, company, email, location, followers, following, id, twitter_username } = user

            populateOutput(name, bio, avatar_url, blog, company, email, location, followers, following, id, twitter_username)

            // console.log(user)
        })
        .catch(error => {
            loadingGif.classList.toggle('hide')

            const warningDivP = document.querySelector('.warning p')
            warningDivP.innerHTML = error
            warningDiv.classList.toggle('hide')

            setTimeout(() => {
                warningDiv.classList.toggle('hide')
            }, 2000)

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
        'Twitter Username: ',
    ]
]

function populateOutput(...params) {
    params.map((param, index) => {
        output.innerHTML += `${outputLabels[0][index]} ${param} <br>`
    })
}

function renderLoading() {
    loadingGif.classList.toggle('hide')
}

selectPopulator();

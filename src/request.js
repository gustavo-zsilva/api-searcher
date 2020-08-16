import { loadingGif, warningDivP, warningDiv } from './variables';
import { renderLoading, renderError } from './render-functions';
import { populateOutput } from './populator-functions';

// Function that makes the async request to the selected API
export function getReq(url) {

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
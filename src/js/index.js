const form = document.querySelector('#form')
const input = document.querySelector('.input-dev')

form.addEventListener('submit', e => {
    e.preventDefault()

    const inputValue = input.value === '' ? false : input.value
    if(!inputValue) {
        return
    }
    
    getGithubUser(inputValue)
    
})

async function getGithubUser(inputValue) {
    const response = await fetch(`https://api.github.com/users/${inputValue}`)
    const data = await response.json()

    insertUserDataOnPage(data)
}

function insertUserDataOnPage(data) {
    const avatar = document.querySelector('#avatar')
    avatar.src = data.avatar_url

    const nickname = document.querySelector('.nickname')
    const name = document.querySelector('.name')
    nickname.textContent = data.login
    name.textContent = data.name

    const dateJoined = document.querySelector('.date-joined')
    const dateApi = data.created_at
    const [year, month] = dateApi.split('-')
    dateJoined.textContent = `joined ${month}-${year}`

    const bio = document.querySelector('#bio-text')
    bio.textContent = data.bio === null ? 'this profile has no bio' : data.bio

    const totalRepos = document.querySelector('#total-repos')
    const totalFollowers = document.querySelector('#total-followers')
    const totalFollowing = document.querySelector('#total-following')

    totalRepos.textContent = data.public_repos
    totalFollowers.textContent = data.followers
    totalFollowing.textContent = data.following

    const location = document.querySelector('#location')
    const twitterUser = document.querySelector('#twitter_username')
    const blog = document.querySelector('#blog-link')
    const company = document.querySelector('#company')

    location.textContent = data.location === null ?'not available' : data.location
    twitterUser.textContent = data.twitter_username === null ? 'not available' : data.twitter_username
    blog.textContent = data.blog === '' ? 'not available' : data.blog
    company.textContent = data.company === null ? 'not available' : data.company
}
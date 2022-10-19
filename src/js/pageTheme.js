const label = document.querySelector('#label')
const checkbox = document.querySelector('.theme-checkbox')
setPageToDarkMode()


label.addEventListener('click', () => {
    if(!checkbox.checked) {
        check()
        setPageToLightMode()
    } else {
        unCheck()
        setPageToDarkMode()
    }
})

function check() {
    checkbox.checked = true
}

function unCheck() {
    checkbox.checked = false
}

function setPageToLightMode() {
    document.body.style.backgroundColor = 'var(--background-light)'

    const header = document.querySelector('#header')
    header.style.color = 'var(--text-light)'
    const themeTitle = document.querySelector('.theme-title')
    themeTitle.textContent = 'DARK'
    const sunIcon = document.querySelector('#light')
    const moonIcon = document.querySelector('#dark')
    sunIcon.style.display = 'none'
    moonIcon.style.display = 'inline-block'

    const inputContainer = document.querySelector('.input-dev-container')
    inputContainer.style.backgroundColor = 'var(--content-light)'
    const input = document.querySelector('.input-dev')
    input.style.color = 'var(--text-light)'
    input.classList.add('placeholder-light')
    const formBtn = document.querySelector('.submit-btn')
    formBtn.style.backgroundColor = 'var(--background-light)'
    formBtn.style.color = 'var(--text-light)'

    const content = document.querySelector('.content')
    content.style.backgroundColor = 'var(--content-light)'
    content.style.color = 'var(--text-light)'

    const profileData = document.querySelector('.profile-data')
    profileData.style.backgroundColor = 'var(--background-light)'
    profileData.style.color = 'var(--text-light)'

    const linkText = document.querySelectorAll('.link-text')
    linkText.forEach(link => {
        link.style.color = 'var(--text-light)'
    })
}

function setPageToDarkMode() {
    document.body.style.backgroundColor = 'var(--background-dark)'

    const header = document.querySelector('#header')
    header.style.color = 'var(--text-dark)'
    const themeTitle = document.querySelector('.theme-title')
    themeTitle.textContent = 'LIGHT'
    const sunIcon = document.querySelector('#light')
    const moonIcon = document.querySelector('#dark')
    sunIcon.style.display = 'inline-block'
    moonIcon.style.display = 'none'

    const inputContainer = document.querySelector('.input-dev-container')
    inputContainer.style.backgroundColor = 'var(--content-dark)'
    const input = document.querySelector('.input-dev')
    input.style.color = 'var(--text-dark)'
    input.classList.add('placeholder-dark')
    const formBtn = document.querySelector('.submit-btn')
    formBtn.style.backgroundColor = 'var(--background-dark)'
    formBtn.style.color = 'var(--text-dark)'

    const content = document.querySelector('.content')
    content.style.backgroundColor = 'var(--content-dark)'
    content.style.color = 'var(--text-dark)'

    const profileData = document.querySelector('.profile-data')
    profileData.style.backgroundColor = 'var(--background-dark)'
    profileData.style.color = 'var(--text-dark)'

    const linkText = document.querySelectorAll('.link-text')
    linkText.forEach(link => {
        link.style.color = 'var(--text-dark)'
    })
}
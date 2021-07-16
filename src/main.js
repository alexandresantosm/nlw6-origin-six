const navElement = document.querySelector('#header nav')
const toggleElements = document.querySelectorAll('nav .toggle')

function handleToggleClick() {
  navElement.classList.toggle('show')
}

for (const toggleElement of toggleElements) {
  toggleElement.addEventListener('click', handleToggleClick)
}

const linkMenuElements = document.querySelectorAll('nav ul li a')

function handleLinkMenuClick() {
  navElement.classList.remove('show')
}

for (const linkMenuElement of linkMenuElements) {
  linkMenuElement.addEventListener('click', handleLinkMenuClick)
}

const headerElement = document.querySelector('#header')
const navHeight = headerElement.offsetHeight

function addShadowInHeader() {
  if (window.scrollY >= navHeight) {
    console.log(navHeight)
    headerElement.classList.add('scroll')
  } else {
    headerElement.classList.remove('scroll')
  }
}

window.addEventListener('scroll', addShadowInHeader)

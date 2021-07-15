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

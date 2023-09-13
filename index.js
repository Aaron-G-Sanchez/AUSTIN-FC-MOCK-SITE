//GLOBAL ATTRIBUTES//
const root = document.querySelector('.root')

const navBar = document.createElement('nav')
navBar.setAttribute('class', 'menu')

const navBarList = document.createElement('ul')
navBarList.setAttribute('class', 'nav-container')

const logoContainer = document.createElement('div')
logoContainer.setAttribute('class', 'logo-container')

const afcLogo = document.createElement('img')
const logoAttributes = {
  class: 'afc-logo',
  src: '/images/AFC-LOGO.png'
}
Object.keys(logoAttributes).forEach((key) => {
  afcLogo.setAttribute(key, logoAttributes[key])
})

root.appendChild(navBar)
navBar.appendChild(navBarList)
navBar.appendChild(logoContainer)
logoContainer.appendChild(afcLogo)

const navBarOptions = ['The Club', 'Tickets', 'Shop']
navBarOptions.forEach((i) => {
  const navBarItem = document.createElement('li')
  const navBarLink = document.createElement('a')
  navBarLink.innerHTML = i
  navBarList.appendChild(navBarItem)
  navBarItem.appendChild(navBarLink)
})

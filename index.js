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
// navBar.appendChild(logoContainer)
// logoContainer.appendChild(afcLogo)

const navBarOptions = ['The Club', 'Tickets', 'Shop']
const navBarTargets = {
  0: 'https://google.com',
  1: 'https://github.com/Aaron-G-Sanchez',
  2: 'https://www.mlsstore.com/austin-fc/t-10362219+z-9310610-350450886?_s=bm-AustinFC-AUFC-MLS-HeaderTopNav-2023'
}

navBarOptions.forEach((i, index) => {
  const navBarLink = document.createElement('a')
  navBarLink.setAttribute('href', navBarTargets[index])
  const navBarItem = document.createElement('li')
  navBarLink.innerHTML = i
  navBarItem.appendChild(navBarLink)
  navBarList.appendChild(navBarItem)
})

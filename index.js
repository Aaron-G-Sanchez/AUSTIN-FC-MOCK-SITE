//GLOBAL ATTRIBUTES//
const root = document.querySelector('.root')

const navBar = document.createElement('nav')
navBar.setAttribute('class', 'meanu')

const navBarOptions = ['The Club', 'Tickets', 'Shop']
const navBarList = document.createElement('ul')
navBarList.setAttribute('class', 'nav-container')

root.appendChild(navBar)
navBar.appendChild(navBarList)

for (i = 0; i < navBarOptions.length; i++) {
  let navBarItem = document.createElement('li')
  navBarItem.innerHTML = navBarOptions[i]
  navBarList.appendChild(navBarItem)
}

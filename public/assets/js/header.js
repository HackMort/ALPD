/**
 * Toggle mobile menu
 * @param {string} buttonID - ID of the button that will toggle the menu
 * @param {string} menuClass - Class of the menu that will be toggled
 * @param {string} toggleClass - Class that will be toggled
 * @example
 * toggleMenu('toggle-menu-button', '.mobile__menu', 'is--open')
 **/
function ToggleMobileMenu (buttonID, menuClass, toggleClass = 'is--open') {
  if (!buttonID || !menuClass) {
    console.error('Button ID or Menu Class not found or invalid')
    return
  }
  const mobileMenuToogleBtn = document.getElementById(buttonID)
  const mobileNav = document.querySelector(menuClass)
  if (!mobileMenuToogleBtn || !mobileNav) {
    return
  }
  mobileMenuToogleBtn.addEventListener('click', () => {
    mobileMenuToogleBtn.classList.toggle(toggleClass)
    mobileNav.classList.toggle(toggleClass)
  })
}
/**
 * Menus
 * @param {string} menuClass - Class of the menu
 * @param {string} currentPageClass - Class that will be added to the current page
 * @example
 * Menu('.primary__navigation', 'current-page')
 **/
function MainMenu (menuClass = 'main__navigation', currentPageClass = 'current-page') {
  if (!menuClass) {
    console.error('Menu Class not found or invalid')
    return
  }
  const menuItems = document.querySelectorAll(`.${menuClass} li a`)
  if (!menuItems) {
    return
  }
  const mobileQuery = window.matchMedia('(max-width: 1199px)')
  const currentPage = window.location.pathname.replace(/\/+$/, '') // Remove trailing slash if any, this is needed in order to work in the Dev Server.
  const parentMenuItemClass = 'has__sub_menu'
  const subMenuItemClass = 'nav__sub_menu_item_link'
  const toggleClass = 'is--open'
  menuItems.forEach((item) => {
    if (item.getAttribute('href') === currentPage) {
      item.classList.add(currentPageClass)
      if (item.classList.contains(subMenuItemClass)) {
        const parent = item.closest(`.${parentMenuItemClass}`)
        parent.classList.add(currentPageClass)
      }
    }
    item.addEventListener('click', (e) => {
      if (!mobileQuery.matches) {
        return
      }
      if (item.parentElement.classList.contains(parentMenuItemClass)) {
        e.preventDefault()
        item.parentElement.classList.toggle(toggleClass)
        // This is only needed if we have a sub menu
        // const subNav = item.nextElementSibling
        // if (subNav) {
        //   subNav.classList.toggle(toggleClass)
        // }
      }
    })
  })
}

function StickyHeader (headerClass = 'site__header', stickyClass = 'is--sticky') {
  if (!headerClass) {
    console.error('Header Class not found or invalid')
    return
  }
  const header = document.querySelector(`.${headerClass}`)
  if (!header) {
    return
  }
  const headerHeight = header.offsetHeight
  const stickyHeader = () => {
    if (window.pageYOffset > headerHeight) {
      header.classList.add(stickyClass)
    } else {
      header.classList.remove(stickyClass)
    }
  }
  window.addEventListener('scroll', stickyHeader)
}

export { ToggleMobileMenu, MainMenu, StickyHeader }

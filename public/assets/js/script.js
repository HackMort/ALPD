import { Tabs } from './tabs.js'
import { cookieValidation, cookieFormValidation } from './validate.js'
import { Accordions } from './accordions.js'
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('DOM fully loaded and parsed')
  /**
   * Validation
   * @see public/assets/js/validation.js
   * Call the function from validation.js
  */
  cookieValidation()
  cookieFormValidation()
  /**
   * Tabs
   * @see public/assets/js/tabs.js
   * Call the function from tabs.js
  */
  Tabs()
  /**
   * Accordions
   * @see public/assets/js/accordions.js
   * Call the function from accordions.js
  */
  Accordions()

  // Toggle Menu Button
  const mobileMenuToogleBtn = document.getElementById('toggle-menu-button')
  const mobileNav = document.querySelector('.mobile__menu')
  if (mobileMenuToogleBtn) {
    mobileMenuToogleBtn.addEventListener('click', () => {
      mobileMenuToogleBtn.classList.toggle('is--open')
      mobileNav.classList.toggle('is--open')
    })
  }

  // Menu Dropdown
  const menuItems = document.querySelectorAll('.primary__navigation li a')
  const mobileQuery = window.matchMedia('(max-width: 1024px)')
  const currentPage = window.location.pathname.replace(/\/+$/, '') // Remove trailing slash if any, this is needed in order to work in the Dev Server.
  menuItems.forEach((item) => {
    if (item.getAttribute('href') === currentPage) {
      item.classList.add('current-page')
      if (item.classList.contains('nav__sub_menu_item_link')) {
        const parent = item.closest('.has__sub_menu')
        parent.classList.add('current-page')
      }
    }
    item.addEventListener('click', (e) => {
      if (!mobileQuery.matches) {
        return
      }
      if (item.parentElement.classList.contains('has__sub_menu')) {
        e.preventDefault()
        item.parentElement.classList.toggle('is--open')
        // const subNav = item.nextElementSibling
        // if (subNav) {
        //   subNav.classList.toggle('is--open')
        // }
      }
    })
  })
})

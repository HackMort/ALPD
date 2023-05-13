/* eslint-disable no-unused-vars */
import { ToggleMobileMenu, MainMenu, StickyHeader } from './header.js'
import { Tabs } from './tabs.js'
// import { cookieValidation, cookieFormValidation } from './validate.js'
import { Accordions } from './accordions.js'
import { stickyInternalNav, highlightActiveInternalNavOnScroll, setActiveIternalNavItemOnClick, setNavTopPosition } from './internal-nav.js'

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('DOM fully loaded and parsed')
  /**
   * Validation
   * @see public/assets/js/validation.js
   * Call the function from validation.js
  */
  // cookieValidation()
  // cookieFormValidation()

  /**
   * Toggle Mobile Menu
   * @see public/assets/js/header.js
   * Call the function from header.js
   * @example
   * ToggleMobileMenu('toggle-menu-button', '.mobile__menu')
   * Where 'toggle-menu-button' is the ID of the button that will toggle the menu
   * and '.mobile__menu' is the class of the menu that will be toggled
   */
  ToggleMobileMenu('toggle-menu-button', '.mobile__menu')

  /**
   * Main Menu
   * @see public/assets/js/header.js
   * Call the function from header.js
   * @example
   * MainMenu('main__navigation', 'current-page')
   * Where 'main__navigation' is the class of the menu
   * and 'current-page' is the class that will be added to the current item with the same href as the current page
   */
  MainMenu('main__navigation', 'current-page')

  /**
   * Sticky Header
   * @see public/assets/js/header.js
   * Call the function from header.js
   * @example
   * StickyHeader('site__header', 'is--sticky')
   * Where 'site__header' is the class of the header
   * and 'is--sticky' is the class that will be added to the header when the page is scrolled
   */
  StickyHeader('site__header', 'is--sticky')

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

  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header__inner')
    if (!header) {
      return
    }
    const headerInnerHeight = header.offsetHeight
    highlightActiveInternalNavOnScroll(headerInnerHeight)
    setNavTopPosition()
    stickyInternalNav()()
  })

  window.addEventListener('resize', () => {
    setNavTopPosition()
  })

  setActiveIternalNavItemOnClick()
})

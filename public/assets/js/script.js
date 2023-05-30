/* eslint-disable no-unused-vars */
import { ToggleMobileMenu, MainMenu, StickyHeader } from './header.js'
import { Tabs, ShowSection } from './tabs.js'
// import { cookieValidation, cookieFormValidation } from './validate.js'
import { Accordions } from './accordions.js'
import { stickyInternalNav, highlightActiveInternalNavOnScroll, setActiveIternalNavItemOnClick, setNavTopPosition } from './internal-nav.js'

/**
 * This function returns a promise that resolves to a number representing the offset top value based on
 * the window width.
 */
const getOffsetTop = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(window.innerWidth < 768 ? 220 : (window.innerWidth >= 768 && window.innerWidth < 1100) ? 330 : 350)
    }, 250)
  })

/**
 * This function scrolls the window to a specified target element with a smooth animation and an
 * optional offset.
 * @param target - The HTML element that we want to scroll to.
 * @param offsetTop - `offsetTop` is a number representing the distance between the top of the viewport
 * and the top of the target element. It is used to adjust the final scroll position by subtracting it
 * from the total offset calculated using `getBoundingClientRect()` and `window.pageYOffset`. This can
 * be useful when you want
 */
const scrollTo = (target, offsetTop) => {
  const totalOffset =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                offsetTop

  window.scrollTo({
    top: totalOffset,
    behavior: 'smooth'
  })
}

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('DOM fully loaded and parsed')

  /* This code is checking if there is a hash value in the URL and if there is, it is selecting the
corresponding element on the page using `document.querySelector()`. Then, it is using the
`getOffsetTop()` function to calculate the offset value based on the window width and scrolling the
window to the selected element using `scrollTo()` function with the calculated offset value. This is
useful for automatically scrolling to a specific section of the page when the page loads. */
  const hash = window.location.hash
  const target = hash && document.querySelector(hash)

  if (target) {
    getOffsetTop().then((offset) => {
      scrollTo(target, offset)
    })
  }

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
   * Show Section
   * @see public/assets/js/tabs.js
   * Call the function from tabs.js to show the section selected by select input
  */
  ShowSection()

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

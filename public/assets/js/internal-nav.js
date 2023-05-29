/* eslint-disable no-undef */
/*
     * highlightActiveInternalNavOnScroll
     * @description
     * - Add class is--active to internal navigation items when the section is in viewport
     * It requires IntersectionObserver API
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
     */
export function highlightActiveInternalNavOnScroll (headerInnerHeight) {
  const internalNavItems = document.querySelectorAll(
    '.internal__nav_list_item'
  )
  const internalNav = document.querySelector(
    '.internal__nav_list'
  )

  if (!internalNav) {
    return
  }

  const activeLi =
            document.querySelector('.internal__nav_list_item.is--active') ||
            internalNavItems[0]
  const sections = document.querySelectorAll('.section')
  const headerHeight =
            screen.width > 768
              ? headerInnerHeight + 150
              : headerInnerHeight + 200
  const sectionObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  }
  const sectionObserver = new window.IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        // console.log(entry.target.getAttribute('id'), 'entry.target.getAttribute(id)')
        // Distance between the top of the section and the top of the viewport
        const sectionTop = entry.boundingClientRect.top

        // Get the position of the active item in the internal navigation
        const internalNavWidth = internalNav.offsetWidth
        const activeLiPosition = activeLi.offsetLeft

        // Validate if the section that are in viewport and is closer of the top of the viewport
        if (
          entry.isIntersecting &&
                        sectionTop <= headerHeight &&
                        sectionTop >= 0
        ) {
          const sectionId = entry.target.getAttribute('id')
          internalNavItems.forEach((item) => {
            item.classList.remove('is--active')
          })

          let activeLi = document.querySelector(
                            `.internal__nav_list_item a[href="#${sectionId}"]`
          )

          if (activeLi) {
            activeLi = activeLi.parentElement
            activeLi.classList.add('is--active')
          }

          // Scroll the internal navigation to the active item
          internalNav.scrollLeft = activeLiPosition - internalNavWidth / 2
        }
      })
    },
    sectionObserverOptions
  )
  sections.forEach((section) => {
    sectionObserver.observe(section)
  })
}

/**
  * setActiveIternalNavItemOnClick
  * @description
  * - Add class is--active to internal navigation items when the link is clicked
  * - Scroll to section
  * It requires IntersectionObserver API
  * * @see https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
*/
export function setActiveIternalNavItemOnClick () {
  const internalNav = document.querySelector('.internal__nav')
  if (!internalNav) {
    return
  }

  internalNav &&
    internalNav.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target;

      if (target.tagName === "A") {
        const sectionID = target.getAttribute("href");
        if (sectionID !== "#") {
          const targetSection = document.querySelector(sectionID);

          let marginTop = 0;

          //Is mobile
          if (window.screen.width < 768) {
            marginTop = 290;

            if (window.pageYOffset > 0) {
              targetSection.getBoundingClientRect().top <= 0
                ? (marginTop = 130) //Up
                : sectionID === "#hpp-prevalence" ||
                  sectionID === "#multidisciplinary-care-team"
                ? (marginTop = 140)
                : (marginTop = 150); //Down
            }
          } else {
            //Is desktop
            marginTop = 430;

            if (window.pageYOffset > 0) {
              targetSection.getBoundingClientRect().top <= 0
                ? (marginTop = 230) //Up
                : sectionID === "#hpp-prevalence" ||
                  sectionID === "#multidisciplinary-care-team"
                ? (marginTop = 220)
                : (marginTop = 350); //Down
            }
          }

          // Scroll to section
          const totalOffset =
            targetSection.getBoundingClientRect().top +
            window.pageYOffset -
            marginTop;

          window.scrollTo({
            top: totalOffset,
            behavior: "smooth",
          });
        }
      }
    });
}

export function stickyInternalNav (internalNavClass = 'internal__nav', stickyClass = 'is--sticky') {
  if (!internalNavClass) {
    console.error('Internal nav class not found or invalid')
    return
  }

  let extraOffset = 0
  const internalNav = document.querySelector(`.${internalNavClass}`)
  if (!internalNav) {
    return
  }
  const previousSibling = internalNav.previousElementSibling

  if (previousSibling) {
    extraOffset += previousSibling.offsetHeight
  }

  const internalNavHeight = internalNav.offsetHeight
  return () => {
    if (window.pageYOffset > (internalNavHeight + extraOffset)) {
      internalNav.classList.add(stickyClass)
    } else {
      internalNav.classList.remove(stickyClass)
    }
  }
}

/* Change CSS variable for top position of the
navigation container when has the class is--fixed */
export function setNavTopPosition (internalNavClass = 'internal__nav', headerInnerClass = 'header__inner') {
  const internalNav = document.querySelector(`.${internalNavClass}`)
  if (!internalNav) {
    return
  }
  if (internalNav) {
    const headerInner = document.querySelector(`.${headerInnerClass}`)
    const headerInnerStyles = getComputedStyle(headerInner)
    const headerInnerHeight = headerInnerStyles.getPropertyValue('height')
    internalNav.style.setProperty('--nav-top-position', headerInnerHeight)
  }
}

/**
  * The function looks for <ul role="tablist"> elements
  * Here's an example of a tablist:
  * <ul role="tablist">
  *  <li role="presentation">
  *   <a href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">Tab 1</a>
  * </li>
  * <li role="presentation">
  *  <a href="#tab2" role="tab" aria-controls="tab2" tabindex="-1">Tab 2</a>
  * </li>
  * </ul>
  * The function also looks for <section role="tabpanel"> elements
  * Here's an example of a tabpanel:
  * <section id="tab1" role="tabpanel" aria-labelledby="tab1">
  * <h2>Tab 1</h2>
  * <p>Tab 1 content</p>
  * </section>
  */
export function Tabs () {
  const tablist = document.querySelectorAll("ul[role='tablist']")
  if (!tablist || tablist.length === 0) {
    return
  }
  const tabLinks = []
  tablist.forEach((tabListItem) => {
    const tabs = tabListItem.querySelectorAll("li[role='presentation']")
    tabs.forEach((tabItem) => {
      const link = tabItem.querySelector("a[role='tab']")
      tabLinks.push(link)
    })
  })

  // console.log(tabLinks)
  const panels = document.querySelectorAll("section[role='tabpanel']")
  // console.log(panels)

  const LEFT_ARROW = 'ArrowLeft'
  const RIGHT_ARROW = 'ArrowRight'
  const DOWN_ARROW = 'ArrowDown'
  /* eslint-disable-next-line no-unused-vars */
  const UP_ARROW = 'ArrowUp'

  tabLinks.forEach(function (tab, i) {
    tab.addEventListener('click', (e) => {
      e.preventDefault()
      const currentTabList = e.currentTarget.closest('ul[role="tablist"]')
      // console.log('currentTabList', currentTabList)
      const currentTab = currentTabList.querySelector('[aria-selected]')
      // console.log('currentTab', currentTab)
      // console.log('e.currentTarget', e.currentTarget)
      if (e.currentTarget !== currentTab) {
        switchTab(currentTab, e.currentTarget)
      }
    })

    tab.addEventListener('keydown', (e) => {
      const index = tabLinks.indexOf(e.currentTarget)
      if (e.currentTarget.classList.contains('tab-link-vertical') || e.currentTarget.classList.contains('modal__inner_tab_link')) {
        return
      }
      switch (e.key) {
        case DOWN_ARROW:
          panels[i].focus()
          break
        case LEFT_ARROW:
          e.preventDefault()
          if (tabLinks[index - 1]) {
            switchTab(e.currentTarget, tabLinks[index - 1])
          }
          break
        case RIGHT_ARROW:
          e.preventDefault()
          if (tabLinks[index + 1]) {
            switchTab(e.currentTarget, tabLinks[index + 1])
          }
          break

        default:
          break
      }
    })
  })

  const switchTab = (prevTab, newTab) => {
    newTab.focus()
    newTab.removeAttribute('tabindex')
    newTab.setAttribute('aria-selected', 'true')
    prevTab.removeAttribute('aria-selected')
    prevTab.setAttribute('tabindex', '-1')
    // panels[tabLinks.indexOf(prevTab)].hidden = true
    // panels[tabLinks.indexOf(newTab)].hidden = false
    document.getElementById(prevTab.getAttribute('href').replace('#', '')).hidden = true
    document.getElementById(newTab.getAttribute('href').replace('#', '')).hidden = false
  }
}

export function ShowSection () {
  /* Show the selected section in the dropdown */
  const select = document.getElementById('hpp-multisystemic-select')

  if (!select) {
    return
  }

  select.addEventListener('change', function () {
    const selectedOption = select.options[select.selectedIndex].value

    const sections = document.getElementsByTagName('section')
    for (let i = 0; i < sections.length; i++) {
      // If a section is not hidden
      if (sections[i].getAttribute('aria-hidden') === 'false') {
        sections[i].setAttribute('aria-hidden', 'true')
        sections[i].setAttribute('hidden', 'true')
      }
    }

    // Showing the selected section
    const targetSection = document.getElementById(selectedOption)
    targetSection.setAttribute('aria-hidden', 'false')
    targetSection.removeAttribute('hidden')
  })

  /* Show the selected section in the tabs */
  const option1 = document.querySelector("a[href='#multisystemic1']")
  const option2 = document.querySelector("a[href='#multisystemic2']")
  const option3 = document.querySelector("a[href='#multisystemic3']")

  const bgFolder = document.querySelector('.hpp-multisystemic__tabs')
  // Default option
  bgFolder.classList.add('multisystemic1')

  option1.addEventListener('click', function () {
    // Remove the other classes
    bgFolder.classList.remove('multisystemic2')
    bgFolder.classList.remove('multisystemic3')
    bgFolder.classList.add('multisystemic1')
  })

  option2.addEventListener('click', function () {
    // Remove the other classes
    bgFolder.classList.remove('multisystemic1')
    bgFolder.classList.remove('multisystemic3')
    bgFolder.classList.add('multisystemic2')
  })

  option3.addEventListener('click', function () {
    // Remove the other classes
    bgFolder.classList.remove('multisystemic1')
    bgFolder.classList.remove('multisystemic2')
    bgFolder.classList.add('multisystemic3')
  })
}

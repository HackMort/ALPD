document.addEventListener('DOMContentLoaded', function () {
  const prevalenceLink = document.querySelector(
    '.internal__nav_list li:last-of-type a'
  )
  if (!prevalenceLink) {
    return
  }
  const currentTarget = prevalenceLink.getAttribute('href')
  const tabsSection = document.getElementById('hpp-multisystemic')
  const tabLinks = tabsSection.querySelectorAll(
    '.hpp-multisystemic__tabs--nav-item a'
  )

  prevalenceLink.addEventListener('click', setActiveLinkClass)

  tabLinks.forEach((item) => {
    item.addEventListener('click', () => {
      const target = item.getAttribute('href')
      prevalenceLink.setAttribute('href', `${target} ${currentTarget}`)
    })
  })

  function setActiveLinkClass () {
    const navLinks = document.querySelectorAll('.internal__nav_list li a')
    navLinks.forEach((item) => {
      item.parentElement.classList.remove('is--active')
    })
    setTimeout(() => {
      prevalenceLink.parentElement.classList.add('is--active')
    }, 1000)
  }
})

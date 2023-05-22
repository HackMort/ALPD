function isDesktop () {
  return window.matchMedia('(min-width: 1024px)').matches
}

let desktop = isDesktop()

function setSuffix () {
  const viewListButtons = Array.from(document.querySelectorAll(
    '.btn--usual-suspect-modal-trigger'
  ))

  viewListButtons.forEach((viewListButton) => {
    const currentTarget = viewListButton.dataset.target

    const desktopSuffix = '-desktop'

    if (desktop) {
      if (!currentTarget.includes(desktopSuffix)) {
        viewListButton.dataset.target = currentTarget + '-desktop'
      }
    } else {
      if (currentTarget.includes(desktopSuffix)) {
        const suffixIndex = currentTarget.indexOf(desktopSuffix)
        viewListButton.dataset.target = currentTarget.substring(
          0,
          suffixIndex
        )
      }
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  setSuffix()
})

window.addEventListener('resize', () => {
  desktop = isDesktop()
  setSuffix()
})

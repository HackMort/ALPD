/**
  * The function looks for <div class="accordion"> elements
  * Here's an example of an accordion:
  * <div class="accordion">
  * <article id={id} role="tab" class="accordion__item" aria-expanded={expanded}>
  * <div class="accordion__item_header">
  * <h6 class="accordion__item_title" role="button" tabindex="0" aria-controls={id}> {header} </h6>
  * </div>
  * <div class="accordion__item_content" role="tabpanel" aria-labelledby={id} tabindex="0"> <slot /> </div>
  * </article>
  * </div>
  */

export function Accordions () {
  const accordion = document.querySelector('.accordion')
  if (accordion) {
    const accordionItems = document.querySelectorAll('.accordion__item')
    accordionItems.forEach((item) => {
      const accTrigger = item.querySelector('.accordion__item_title')
      accTrigger.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        const expanded = item.getAttribute('aria-expanded') === 'true' || false
        const itemClass = item.classList.contains('accordion__item--expanded')

        if (itemClass && expanded === true) {
          item.classList.remove('accordion__item--expanded')
          item.setAttribute('aria-expanded', false)
        } else if (itemClass && expanded === false) {
          item.classList.remove('accordion__item--expanded')
          item.setAttribute('aria-expanded', false)
        } else {
          item.setAttribute('aria-expanded', !expanded)

          accordionItems.forEach((current) => {
            if (current !== item) {
              current.setAttribute('aria-expanded', false)
            }
          })
        }
      })
    })
  }
}

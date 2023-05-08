const enterSiteURL = 'enter-site.html'
const currentHref = window.location.href
const recurrentVisitor = window.localStorage.getItem('recurrent-visitor') === 'true'

if (!recurrentVisitor && !currentHref.includes(enterSiteURL)) {
  window.location.href = enterSiteURL
}

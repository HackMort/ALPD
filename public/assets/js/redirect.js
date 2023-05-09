const enterSiteURL = '/enter-site/'
const currentHref = window.location.href
const recurrentVisitor = window.localStorage.getItem('recurrent-visitor') === 'true'

if (!recurrentVisitor && !currentHref.includes(enterSiteURL) && window.location.pathname !== '/validate/') {
  window.location.href = enterSiteURL
}

import settings from '@/settings'
const title = settings.title || 'QS Template Vue'

export function setPageTitle(pageTitle) {
  if (pageTitle) {
    return document.title = `${pageTitle} | ${title}`
  }
  document.title = title
}
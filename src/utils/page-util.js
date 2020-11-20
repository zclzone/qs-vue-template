const title = 'qs vue template'

export function setPageTitle(pageTitle) {
  if (pageTitle) {
    return document.title = `${pageTitle} | ${title}`
  }
  document.title = title
}
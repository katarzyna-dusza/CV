export const countedZoom = (sectionName) => {
  return 1 - ($(`.${sectionName}`).offset().left / window.innerWidth)
}

export const isMobi = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
}

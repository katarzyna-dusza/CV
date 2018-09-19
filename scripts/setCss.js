/* setting styles */
export const positionFixedChild = (section) => {
  $(`.${section} > div`).css({
      'position': 'fixed'
  });
}

export const positionFixed = (section) => {
  $(`.${section}`).css({
      'position': 'fixed'
  });
}

export const transformScaleFixed = (section) => {
  $(`${section} > .content > .text`).css({
      'transform': 'scale(1)'
  });
}

export const positionAbsoluteChild = (section) => {
  $(`.${section} > div`).css({
      'position': 'absolute'
  });
}

export const transformScaleZoom = (section, zooming) => {
  $(`.${section} > .content > .text`).css({
      'transform': `scale(${zooming})`
  });
}

export const paddingBottom = (section, padding) => {
  $(`.${section}`).css({
      'padding-bottom': padding
  });
}

export const left = (section, left) => {
  $(`.${section}`).css({
      'left': left
  });
}

export const opacity = (section, zooming) => {
  $(`.${section} > .content > .image-wrapper`).css({
      'opacity': zooming / 2
  });
}

/* helpers */
export const countedZoom = (section) => {
  return 1 - ($(`.${section}`).offset().left / window.innerWidth)
}

export const isMobi = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
}

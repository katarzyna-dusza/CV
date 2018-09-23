export const positionFixedChild = (sectionName) => {
  $(`.${sectionName} > div`).css({
      'position': 'fixed'
  });
};

export const positionFixed = (sectionName) => {
  $(`.${sectionName}`).css({
      'position': 'fixed'
  });
};

export const transformScaleFixed = (sectionName) => {
  $(`${sectionName} > .content > .text`).css({
      'transform': 'scale(1)'
  });
};

export const positionAbsoluteChild = (sectionName) => {
  $(`.${sectionName} > div`).css({
      'position': 'absolute'
  });
};

export const transformScaleZoom = (sectionName, zooming) => {
  $(`.${sectionName} > .content > .text`).css({
      'transform': `scale(${zooming})`
  });
};

export const paddingBottom = (sectionName, padding) => {
  $(`.${sectionName}`).css({
      'padding-bottom': padding
  });
};

export const left = (sectionName, left) => {
  $(`.${sectionName}`).css({
      'left': left
  });
};

export const opacity = (sectionName, zooming) => {
  $(`.${sectionName} > .content > .image-wrapper`).css({
      'opacity': zooming / 2
  });
};

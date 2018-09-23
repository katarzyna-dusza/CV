import * as cssModifier from './cssModifier';
import * as utils from './utils';

$(window).on('load', () => {
  $('.loader').fadeOut();
});

(() => {
  $(window).scroll(() => {
    const currentPosition = $(document).scrollTop();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const scrollPercent = (currentPosition / windowHeight) - 2;
    const elementPosition = windowWidth - scrollPercent * windowWidth;
    const zooming = (currentPosition / windowHeight) * 2;

    const about = $('.about').offset().top;
    const sapFirst = $('.experience.sap-first').offset().top;
    const sapSecond = $('.experience.sap-second');
    const xsolve = $('.experience.xsolve');
    const autea = $('.experience.autea');
    const aeiFirst = $('.education.aei-first').offset().top;
    const aeiSecond = $('.education.aei-second');
    const skills = $('.skills').offset().top;
    const openwhisk = $('.portfolio.openwhisk').offset().top;
    const blog = $('.portfolio.blog');
    const other = $('.portfolio.other');
    const contact = $('.contact').offset().top;

    if (currentPosition >= about) {
      cssModifier.positionFixedChild('about');
      cssModifier.transformScaleFixed('about');
    }

    if (currentPosition < about) {
      cssModifier.positionAbsoluteChild('about');
      cssModifier.transformScaleZoom('about', zooming  - 1);
      cssModifier.opacity('about', zooming);
    }

    if (currentPosition >= sapFirst) {
      cssModifier.positionFixedChild('experience.sap-first');
      cssModifier.transformScaleFixed('experience.sap-first');

      if (0 <= elementPosition) {
        cssModifier.left('experience.sap-second', elementPosition);
      }

      if (25 > elementPosition) {
        cssModifier.left('experience.sap-second', 0);
      }
    }

    if (currentPosition < sapFirst) {
      cssModifier.positionAbsoluteChild('experience.sap-first');
      cssModifier.transformScaleZoom('experience.sap-first', zooming - 3);
      cssModifier.paddingBottom('experience.sap-first', 3 * window.innerHeight);
      cssModifier.left('experience.sap-second', '100%');
    }

    if (0 === $('.experience.sap-second').offset().left) {
      cssModifier.positionFixed('experience.sap-second');
      cssModifier.transformScaleFixed('experience.sap-second');

      if (0 <= windowWidth + elementPosition) {
        cssModifier.left('experience.xsolve', windowWidth + elementPosition);
      }

      if (25 > windowWidth + elementPosition) {
        cssModifier.left('experience.xsolve', 0);
      }
    }

    if (0 < $('.experience.sap-second').offset().left) {
      cssModifier.transformScaleZoom('experience.sap-second', utils.countedZoom('experience.sap-second'));
      cssModifier.left('experience.xsolve', '100%');
    }

    if (0 === $('.experience.xsolve').offset().left) {
      cssModifier.positionFixed('experience.xsolve');
      cssModifier.transformScaleFixed('experience.xsolve');

      if (0 <= 2 * windowWidth + elementPosition) {
        cssModifier.left('experience.autea', 2 * windowWidth + elementPosition);
      }

      if (25 > 2 * windowWidth + elementPosition) {
        cssModifier.left('experience.autea', 0);
      }
    }

    if (0 < $('.experience.xsolve').offset().left) {
      cssModifier.transformScaleZoom('experience.xsolve', utils.countedZoom('experience.xsolve'));
      cssModifier.left('experience.autea', '100%');
    }

    if (0 < $('.experience.autea').offset().left) {
      cssModifier.transformScaleZoom('experience.autea', utils.countedZoom('experience.autea'));
    }

    if (0 === $('.experience.autea').offset().left) {
      cssModifier.positionFixed('experience.autea');
      cssModifier.transformScaleFixed('experience.autea');
    }

    if (currentPosition >= aeiFirst) {
      cssModifier.positionFixedChild('education.aei-first');
      cssModifier.transformScaleFixed('education.aei-first');

      if (0 <= 4 * windowWidth + elementPosition) {
        cssModifier.left('education.aei-second', 4 * windowWidth + elementPosition);
      }

      if (25 > 4 * windowWidth + elementPosition) {
        cssModifier.left('education.aei-second', 0);
      }
    }

    if (currentPosition < aeiFirst) {
      cssModifier.positionAbsoluteChild('education.aei-first');
      cssModifier.paddingBottom('education.aei-first', window.innerHeight);
      cssModifier.left('education.aei-second', '100%');

      if (1 > zooming - 11) {
        cssModifier.transformScaleZoom('education.aei-first', zooming  - 11);
      }
    }

    if (0 < $('.education.aei-second').offset().left) {
      cssModifier.transformScaleZoom('education.aei-second', utils.countedZoom('education.aei-second'));
    }

    if (0 === $('.education.aei-second').offset().left) {
      cssModifier.positionFixed('education.aei-second');
      cssModifier.transformScaleFixed('education.aei-second');
    }

    if (currentPosition >= skills) {
      cssModifier.positionFixedChild('skills');
      cssModifier.transformScaleFixed('skills');
    }

    if (currentPosition < skills) {
      cssModifier.positionAbsoluteChild('skills');

      if (1 > zooming - 15) {
        cssModifier.transformScaleZoom('skills', zooming - 15);
      }
    }

    if (currentPosition >= openwhisk) {
      cssModifier.positionFixedChild('portfolio.openwhisk');
      cssModifier.transformScaleFixed('portfolio.openwhisk');

      if (0 <= 7 * windowWidth + elementPosition) {
        cssModifier.left('portfolio.blog', 7 * windowWidth + elementPosition);
      }

      if (25 > 7 * windowWidth + elementPosition) {
        cssModifier.left('portfolio.blog', 0);
      }
    }

    if (currentPosition < openwhisk) {
      cssModifier.positionAbsoluteChild('portfolio.openwhisk');
      cssModifier.paddingBottom('portfolio.openwhisk', 2 * window.innerHeight);
      cssModifier.left('portfolio.blog', '100%');

      if (1 > zooming - 17) {
        cssModifier.transformScaleZoom('portfolio.openwhisk', zooming - 17);
      }
    }

    if (0 === $('.portfolio.blog').offset().left) {
      cssModifier.positionFixed('portfolio.blog');
      cssModifier.transformScaleFixed('portfolio.blog');

      if (0 <= 8 * windowWidth + elementPosition) {
        cssModifier.left('portfolio.other', 8 * windowWidth + elementPosition);
      }

      if (25 > 8 * windowWidth + elementPosition) {
        cssModifier.left('portfolio.other', 0);
      }
    }

    if (0 < $('.portfolio.blog').offset().left) {
      cssModifier.transformScaleZoom('portfolio.blog', zooming - 19);
      cssModifier.left('portfolio.other', '100%');
    }

    if (0 === $('.portfolio.other').offset().left) {
      cssModifier.positionFixed('portfolio.other');
      cssModifier.transformScaleFixed('portfolio.other');
    }

    if (0 < $('.portfolio.other').offset().left) {
      cssModifier.transformScaleZoom('portfolio.other', zooming - 21);
    }

    if (currentPosition >= contact) {
      cssModifier.positionFixedChild('contact');
      cssModifier.transformScaleFixed('contact');
    }

    if (currentPosition < contact) {
      cssModifier.positionAbsoluteChild('contact');

      if (1 > zooming - 23) {
        cssModifier.transformScaleZoom('contact', zooming - 23);
      }
    }
  });
})();

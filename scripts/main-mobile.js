import * as cssModifier from './cssModifier';
import * as utils from './utils';

(() => {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    $('.scrollable-sections').css({
        'overflow': 'scroll'
    });

    $('.scrollable-sections').scroll(() => {
      const currentPosition = $('.scrollable-sections').scrollTop();
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

      if (currentPosition - about >= windowHeight) {
        cssModifier.positionFixedChild('about');
        cssModifier.transformScaleFixed('about');
      }

      if (currentPosition - about < windowHeight) {
        cssModifier.positionAbsoluteChild('about');
        cssModifier.transformScaleZoom('about', zooming - 1);
      }

      if (currentPosition - sapFirst >= 2 * windowHeight) {
        cssModifier.positionFixedChild('experience.sap-first');
        cssModifier.transformScaleFixed('experience.sap-first');

        if (elementPosition >= 0) {
          cssModifier.left('experience.sap-second', elementPosition);
        }

        if (elementPosition < 25) {
          cssModifier.left('experience.sap-second', 0);
        }
      }

      if (currentPosition - sapFirst < 2 * windowHeight) {
        cssModifier.positionAbsoluteChild('experience.sap-first');
        cssModifier.transformScaleZoom('experience.sap-first', zooming - 3);
        cssModifier.paddingBottom('experience.sap-first', 3 * window.innerHeight);
        cssModifier.left('experience.sap-second', '100%');
      }

      if ($('.experience.sap-second').offset().left === 0) {
        cssModifier.positionFixed('experience.sap-second');
        cssModifier.transformScaleFixed('experience.sap-second');

        if (windowWidth + elementPosition >= 0) {
          cssModifier.left('experience.xsolve', windowWidth + elementPosition);
        }

        if (windowWidth + elementPosition < 25) {
          cssModifier.left('experience.xsolve', 0);
        }
      }

      if ($('.experience.sap-second').offset().left > 0) {
        cssModifier.transformScaleZoom('experience.sap-second', utils.countedZoom('experience.sap-second'));
        cssModifier.left('experience.xsolve', '100%');
      }

      if ($('.experience.xsolve').offset().left === 0) {
        cssModifier.positionFixed('experience.xsolve');
        cssModifier.transformScaleFixed('experience.xsolve');

        if (2 * windowWidth + elementPosition >= 0) {
          cssModifier.left('experience.autea', 2 * windowWidth + elementPosition);
        }

        if (2 * windowWidth + elementPosition < 25) {
          cssModifier.left('experience.autea', 0);
        }
      }

      if ($('.experience.xsolve').offset().left > 0) {
        cssModifier.transformScaleZoom('experience.xsolve', utils.countedZoom('experience.xsolve'));
        cssModifier.left('experience.autea', '100%');
      }

      if ($('.experience.autea').offset().left > 0) {
        cssModifier.transformScaleZoom('experience.autea', utils.countedZoom('experience.autea'));
      }

      if ($('.experience.autea').offset().left === 0) {
        cssModifier.positionFixed('experience.autea');
        cssModifier.transformScaleFixed('experience.autea');
      }

      if (currentPosition - aeiFirst >= 6 * windowHeight) {
        cssModifier.positionFixedChild('education.aei-first');
        cssModifier.transformScaleFixed('education.aei-first');

        if (4 * windowWidth + elementPosition >= 0) {
          cssModifier.left('education.aei-second', 4 * windowWidth + elementPosition);
        }

        if (4 * windowWidth + elementPosition < 25) {
          cssModifier.left('education.aei-second', 0);
        }
      }

      if (currentPosition - aeiFirst < 6 * windowHeight) {
        cssModifier.positionAbsoluteChild('education.aei-first');
        cssModifier.paddingBottom('education.aei-first', window.innerHeight);
        cssModifier.left('education.aei-second', '100%');

        if (zooming - 11 < 1) {
          cssModifier.transformScaleZoom('education.aei-first', zooming  - 11);
        }
      }

      if ($('.education.aei-second').offset().left > 0) {
        cssModifier.transformScaleZoom('education.aei-second', utils.countedZoom('education.aei-second'));
      }

      if ($('.education.aei-second').offset().left === 0) {
        cssModifier.positionFixed('education.aei-second');
        cssModifier.transformScaleFixed('education.aei-second');
      }

      if (currentPosition - skills >= 8 * windowHeight) {
        cssModifier.positionFixedChild('skills');
        cssModifier.transformScaleFixed('skills');
      }

      if (currentPosition - skills < 8 * windowHeight) {
        cssModifier.positionAbsoluteChild('skills');

        if (zooming - 15 < 1) {
          cssModifier.transformScaleZoom('skills', zooming - 15);
        }
      }

      if (currentPosition - openwhisk >= 9 * windowHeight) {
        cssModifier.positionFixedChild('portfolio.openwhisk');
        cssModifier.transformScaleFixed('portfolio.openwhisk');

        if (7 * windowWidth + elementPosition >= 0) {
          cssModifier.left('portfolio.blog', 7 * windowWidth + elementPosition);
        }

        if (7 * windowWidth + elementPosition < 25) {
          cssModifier.left('portfolio.blog', 0);
        }
      }

      if (currentPosition - openwhisk < 9 * windowHeight) {
        cssModifier.positionAbsoluteChild('portfolio.openwhisk');
        cssModifier.paddingBottom('portfolio.openwhisk', 2 * window.innerHeight);
        cssModifier.left('portfolio.blog', '100%');

        if (zooming - 17 < 1) {
          cssModifier.transformScaleZoom('portfolio.openwhisk', zooming - 17);
        }
      }

      if ($('.portfolio.blog').offset().left === 0) {
        cssModifier.positionFixed('portfolio.blog');
        cssModifier.transformScaleFixed('portfolio.blog');

        if (8 * windowWidth + elementPosition >= 0) {
          cssModifier.left('portfolio.other', 8 * windowWidth + elementPosition);
        }

        if (8 * windowWidth + elementPosition < 25) {
          cssModifier.left('portfolio.other', 0);
        }
      }

      if ($('.portfolio.blog').offset().left > 0) {
        cssModifier.transformScaleZoom('portfolio.blog', zooming - 19);
        cssModifier.left('portfolio.other', '100%');
      }

      if ($('.portfolio.other').offset().left === 0) {
        cssModifier.positionFixed('portfolio.other');
        cssModifier.transformScaleFixed('portfolio.other');
      }

      if ($('.portfolio.other').offset().left > 0) {
          cssModifier.transformScaleZoom('portfolio.other', zooming - 21);
      }

      if (currentPosition - openwhisk >= 15 * windowHeight) {
        cssModifier.positionFixedChild('contact');
        cssModifier.transformScaleFixed('contact');
      }

      if (currentPosition - openwhisk < 15 * windowHeight) {
        cssModifier.positionAbsoluteChild('contact');

        if (zooming - 23 < 1) {
          cssModifier.transformScaleZoom('contact', zooming - 23);
        }
      }
    });
  }
})();

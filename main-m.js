(function() {
  if (/Mobi/.test(navigator.userAgent)) {
    $('.scrollable-sections').css({
        'overflow': 'scroll'
    });

    $(".scrollable-sections").scroll(function() {
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

        const currentPosition = $(".scrollable-sections").scrollTop();
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        const scrollPercent = (currentPosition / windowHeight) - 2;
        const elementPosition = windowWidth - scrollPercent * windowWidth;

        const zooming = (currentPosition / windowHeight) * 2;
        const zooming2 = (currentPosition / windowHeight);
        const zooming3 = (currentPosition / windowHeight) / 2;

        console.log(currentPosition - aeiFirst);
        console.log(windowHeight);
        console.log(currentPosition - aeiFirst > 5 * windowHeight)

        if (currentPosition - about >= windowHeight) {
            $('.about > div').css({
                'position': 'fixed'
            });

            $('.about > .content > .text').css({
                'transform': 'scale(1)'
            });
        }

        if ( currentPosition - about < windowHeight ) {
            $('.about > div').css({
                'position': 'absolute'
            });
            $('.about > .content > .text').css({
                'transform': 'scale(' + (zooming -1) + ')'
            });
        }

        if ( currentPosition - sapFirst >= 2 * windowHeight ) {
            $('.experience.sap-first > div').css({
                'position': 'fixed'
            });

            $('.experience.sap-first > .content > .text').css({
                'transform': 'scale(1)'
            });

            if (elementPosition >= 0) {
                sapSecond.css({
                    'left': elementPosition
                });
            }

            if (elementPosition < 25) {
                sapSecond.css({
                    'left': 0
                });
            }
        }

        if ( currentPosition - sapFirst < 2 * windowHeight ) {
            $('.experience.sap-first > div').css({
                'position': 'absolute'
            });
            $('.experience.sap-first').css({
                'padding-bottom': 3 * window.innerHeight
            });

            $('.experience.sap-first > .content > .text').css({
                'transform': 'scale(' + (zooming -3) + ')'
            });

            sapSecond.css({
                'left': '100%'
            });
        }

        if ($('.experience.sap-second').offset().left === 0) {
            $('.experience.sap-second').css({
                'position': 'fixed'
            });

            $('.experience.sap-second > .content > .text').css({
                'transform': 'scale(1)'
            });

            if (windowWidth + elementPosition >= 0) {
                xsolve.css({
                    'left':  windowWidth + elementPosition
                });
            }

            if (windowWidth + elementPosition < 25) {
                xsolve.css({
                    'left': 0
                });
            }
        }

        if ($('.experience.sap-second').offset().left > 0) {
            xsolve.css({
                'left': '100%'
            });

            $('.experience.sap-second > .content > .text').css({
                'transform': 'scale(' + (1 - ($('.experience.sap-second').offset().left / window.innerWidth)) + ')'
            });
        }

        if ($('.experience.xsolve').offset().left === 0) {
            $('.experience.xsolve').css({
                'position': 'fixed'
            });

            $('.experience.xsolve > .content > .text').css({
                'transform': 'scale(1)'
            });

            if (2 * windowWidth + elementPosition >= 0) {
                autea.css({
                    'left': 2 * windowWidth + elementPosition
                });
            }

            if (2 * windowWidth + elementPosition < 25) {
                autea.css({
                    'left': 0
                });
            }
        }

        if ($('.experience.xsolve').offset().left > 0) {
            autea.css({
                'left': '100%'
            });

            $('.experience.xsolve > .content > .text').css({
                'transform': 'scale(' + (1 - ($('.experience.xsolve').offset().left / window.innerWidth)) + ')'
            });
        }

        if ($('.experience.autea').offset().left > 0) {
            $('.experience.autea > .content > .text').css({
                'transform': 'scale(' + (1 - ($('.experience.autea').offset().left / window.innerWidth)) + ')'
            });
        }

        if ($('.experience.autea').offset().left === 0) {
            $('.experience.autea').css({
                'position': 'fixed'
            });

            $('.experience.autea > .content > .text').css({
                'transform': 'scale(1)'
            });
        }



        if ( currentPosition - aeiFirst >= 6 * windowHeight ) {
            $('.education.aei-first > div').css({
                'position': 'fixed'
            });

            $('.education.aei-first > .content > .text').css({
                'transform': 'scale(1)'
            });

            if (4 * windowWidth + elementPosition >= 0) {
                aeiSecond.css({
                    'left': 4 * windowWidth + elementPosition
                });
            }

            if (4 * windowWidth + elementPosition < 25) {
                aeiSecond.css({
                    'left': 0
                });
            }
        }

        if ( currentPosition - aeiFirst < 6 * windowHeight ) {
            $('.education.aei-first > div').css({
                'position': 'absolute'
            });
            $('.education.aei-first').css({
                'padding-bottom': window.innerHeight
            });

            if (zooming -11 < 1) {
              $('.education.aei-first > .content > .text').css({
                  'transform': 'scale(' + (zooming -11) + ')'
              });
            }

            aeiSecond.css({
                'left': '100%'
            });
        }

        if ($('.education.aei-second').offset().left > 0) {
            $('.education.aei-second > .content > .text').css({
                'transform': 'scale(' + (1 - ($('.education.aei-second').offset().left / window.innerWidth)) + ')'
            });
        }

        if ($('.education.aei-second').offset().left === 0) {
            $('.education.aei-second').css({
                'position': 'fixed'
            });

            $('.education.aei-second > .content > .text').css({
                'transform': 'scale(1)'
            });
        }



        if ( currentPosition - skills >= 8 * windowHeight ) {
            $('.skills > div').css({
                'position': 'fixed'
            });

            $('.skills > .content > .text').css({
                'transform': 'scale(1)'
            });
        }

        if ( currentPosition - skills < 8 * windowHeight ) {
          $('.skills > div').css({
              'position': 'absolute'
          });

          if (zooming -15 < 1) {
            $('.skills > .content > .text').css({
                'transform': 'scale(' + (zooming -15) + ')'
            });
          }
        }


        if ( currentPosition - openwhisk >= 9 * windowHeight) {
            $('.portfolio.openwhisk > div').css({
                'position': 'fixed'
            });

            $('.portfolio.openwhisk > .content > .text').css({
                'transform': 'scale(1)'
            });

            if (7 * windowWidth + elementPosition >= 0) {
                blog.css({
                    'left': 7 * windowWidth + elementPosition
                });
            }

            if (7 * windowWidth + elementPosition < 25) {
                blog.css({
                    'left': 0
                });
            }

        }

        if ( currentPosition - openwhisk < 9 * windowHeight ) {
            $('.portfolio.openwhisk > div').css({
                'position': 'absolute'
            });
            $('.portfolio.openwhisk').css({
                'padding-bottom': 2 * window.innerHeight
            });
            blog.css({
                'left': '100%'
            });

            if (zooming -17 < 1) {
              $('.portfolio.openwhisk > .content > .text').css({
                  'transform': 'scale(' + (zooming -17) + ')'
              });
            }
        }

        if ($('.portfolio.blog').offset().left === 0) {
            $('.portfolio.blog').css({
                'position': 'fixed'
            });

            $('.portfolio.blog > .content > .text').css({
                'transform': 'scale(1)'
            });

            if (8 * windowWidth + elementPosition >= 0) {
                other.css({
                    'left':  8 * windowWidth + elementPosition
                });
            }

            if (8 * windowWidth + elementPosition < 25) {
                other.css({
                    'left': 0
                });
            }
        }

        if ($('.portfolio.blog').offset().left > 0) {
            other.css({
                'left': '100%'
            });

            $('.portfolio.blog > .content > .text').css({
                'transform': 'scale(' + (zooming -19) + ')'
            });
        }

        if ($('.portfolio.other').offset().left === 0) {
            $('.portfolio.other').css({
                'position': 'fixed'
            });

            $('.portfolio.other > .content > .text').css({
                'transform': 'scale(1)'
            });
        }

        if ($('.portfolio.other').offset().left > 0) {
            $('.portfolio.other > .content > .text').css({
                'transform': 'scale(' + (zooming -21) + ')'
            });
        }

        if ( currentPosition - openwhisk >= 15 * windowHeight ) { //currentPosition >= contact
            $('.contact > div').css({
                'position': 'fixed'
            });

            $('.contact > .content > .text').css({
                'transform': 'scale(1)'
            });
        }

        if ( currentPosition - openwhisk < 15 * windowHeight ) {
            $('.contact > div').css({
                'position': 'absolute'
            });

            if (zooming -23 < 1) {
              $('.contact > .content > .text').css({
                  'transform': 'scale(' + (zooming -23) + ')'
              });
            }
        }
    });
  }
})();
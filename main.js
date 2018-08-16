(function() {
    function addZoomAnimation(zooming) {
        $('section > div.content').each(function(index, value) {
            if (value.hasAttribute('zoom')) {
                $('section > div.content').eq(index).css({
                    'transform': 'scale(' + zooming + ',' + zooming + ')'
                });
            }
        });
    }

    $(window).scroll(function() {
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
        const footer = $('.footer').offset().top;

        const currentPosition = $(document).scrollTop();
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        const scrollPercent = (currentPosition / windowHeight) - 2;
        const elementPosition = windowWidth - scrollPercent * windowWidth;

        const zooming = (currentPosition / windowHeight) * 2;
        const zooming2 = (currentPosition / windowHeight);
        const zooming3 = (currentPosition / windowHeight) / 2;

        if ( currentPosition >= about ) {
            $('.about > div').css({
                'position': 'fixed'
            });
        }

        if ( currentPosition < about ) {
            $('.about > div').css({
                'position': 'absolute'//,
                // 'transform': 'scale(' + zooming + ',' + zooming + ')'
            });
            $('.about > .content > .text').css({
                // 'position': 'absolute'//,
                'transform': 'scale(' + (zooming -1) + ')'
            });
            $('.about > .content > .image-wrapper').css({
                'opacity': zooming / 2
            });
            // addZoomAnimation(zooming);
        }

        if ( currentPosition >= sapFirst ) {
            $('.experience.sap-first > div').css({
                'position': 'fixed'
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

        if ( currentPosition < sapFirst ) {
            $('.experience.sap-first > div').css({
                'position': 'absolute'
            });
            $('.experience.sap-first').css({
                'padding-bottom': 3 * window.innerHeight
            });

            $('.experience.sap-first > .content > .text').css({
                // 'position': 'absolute'//,
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
                // 'position': 'absolute'//,
                'transform': 'scale(' + (1 - ($('.experience.sap-second').offset().left / window.innerWidth)) + ')'
            });

        }

        if ($('.experience.xsolve').offset().left === 0) {
            $('.experience.xsolve').css({
                'position': 'fixed'
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
                // 'position': 'absolute'//,
                'transform': 'scale(' + (1 - ($('.experience.xsolve').offset().left / window.innerWidth)) + ')'
            });
        }

        if ($('.experience.autea').offset().left > 0) {
            $('.experience.autea > .content > .text').css({
                // 'position': 'absolute'//,
                'transform': 'scale(' + (1 - ($('.experience.autea').offset().left / window.innerWidth)) + ')'
            });
        }

        if ( currentPosition >= aeiFirst ) {
            $('.education.aei-first > div').css({
                'position': 'fixed'
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

        if ( currentPosition < aeiFirst ) {
            $('.education.aei-first > div').css({
                'position': 'absolute'
            });
            $('.education.aei-first').css({
                'padding-bottom': window.innerHeight
            });
            aeiSecond.css({
                'left': '100%'
            });

            $('.education.aei-first > .content > .text').css({
                // 'position': 'absolute'//,
                'transform': 'scale(' + (zooming -11) + ')'
            });
            // $('.experience.sap-second').css('position', 'fixed');
            // $('.experience.sap-second').css('left', '0');
        }

        if ($('.education.aei-second').offset().left > 0) {
            $('.education.aei-second > .content > .text').css({
                // 'position': 'absolute'//,
                'transform': 'scale(' + (1 - ($('.education.aei-second').offset().left / window.innerWidth)) + ')'
            });
        }

        if (currentPosition >= skills) {
            $('.skills > div').css({
                'position': 'fixed'
            });
        }

        if ( currentPosition < skills ) {
            $('.skills > div').css({
                'position': 'absolute'
            });

            $('.skills > .content > .text').css({
                // 'position': 'absolute'//,
                'transform': 'scale(' + (zooming -15) + ')'
            });
        }

        if (currentPosition >= openwhisk) {
            $('.portfolio.openwhisk > div').css({
                'position': 'fixed'
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

        if ( currentPosition < openwhisk ) {
            $('.portfolio.openwhisk > div').css({
                'position': 'absolute'
            });
            $('.portfolio.openwhisk').css({
                'padding-bottom': 2 * window.innerHeight
            });
            blog.css({
                'left': '100%'
            });
        }

        if ($('.portfolio.blog').offset().left === 0) {
            $('.portfolio.blog').css({
                'position': 'fixed'
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
        }

        if (currentPosition >= footer) {
            $('.footer > div').css({
                'position': 'fixed'
            });
        }

        if ( currentPosition < footer ) {
            $('.footer > div').css({
                'position': 'absolute'
            });
        }
    });
})();
function scrollToElement(element) {
    $('html, body').animate({
        scrollTop: element.offset().top
    }, 1000);
}

function goTo(navElement) {
    const aboutElement = $('.' + navElement.id);
    scrollToElement(aboutElement);
}

function clearNavigationElements() {
    $('.panel__elem--navigation').each(function(index, elem) {
        $('.panel__elem--navigation').eq(index).removeClass('current');
    })
}

function clearLocationElements() {
    $('.panel__elem--location').each(function(index, elem) {
        $('.panel__elem--location > i').eq(index).text('radio_button_unchecked');
    })
}

function fillPreviousLocationElements(currentIndex) {
    $('.panel__elem--location').each(function(index, elem) {
        if (currentIndex >= index) {
            $('.panel__elem--location > i').eq(index).text('radio_button_checked');
        }
    })
}

function currentNavigationElement(currentPosition) {
    const about = $('.about').offset().top;
    const sapFirst = $('.experience.sap-first').offset().top;
    const aeiFirst = $('.education.aei-first').offset().top;
    const skills = $('.skills').offset().top;
    const openwhisk = $('.portfolio.openwhisk').offset().top;
    const contact = $('.contact').offset().top;

    clearNavigationElements();

    switch (true) {
        case (currentPosition >= about && currentPosition < sapFirst):
            return $('#about').addClass('current');
        case (currentPosition >= sapFirst && currentPosition < aeiFirst):
            return $('#experience').addClass('current');
        case (currentPosition >= aeiFirst && currentPosition < skills):
            return $('#education').addClass('current');
        case (currentPosition >= skills && currentPosition < openwhisk):
            return $('#skills').addClass('current');
        case (currentPosition >= openwhisk && currentPosition < contact):
            return $('#portfolio').addClass('current');
        case (currentPosition >= contact):
            return $('#contact').addClass('current');
        default:
            return $('#intro').addClass('current');
    }
}

function currentLocationElement(currentPosition) {
    const icon = $('.panel__elem--location > i');
    const about = $('.about').offset().top;
    const sapFirst = $('.experience.sap-first').offset().top;
    const sapSecond = $('.experience.sap-second').offset().left;
    const xsolve = $('.experience.xsolve').offset().left;
    const autea = $('.experience.autea').offset().left;
    const aeiFirst = $('.education.aei-first').offset().top;
    const aeiSecond = $('.education.aei-second').offset().left;
    const skills = $('.skills').offset().top;
    const openwhisk = $('.portfolio.openwhisk').offset().top;
    const blog = $('.portfolio.blog').offset().left;
    const other = $('.portfolio.other').offset().left;
    const contact = $('.contact').offset().top;
    let currentIndex = 0;

    clearLocationElements();

    switch (true) {
        case (currentPosition >= about && currentPosition < sapFirst):
            currentIndex = 1;
            icon.eq(currentIndex).text('radio_button_checked');
            break;
        case (currentPosition >= sapFirst && currentPosition < aeiFirst && sapSecond !== 0):
            currentIndex = 2;
            icon.eq(currentIndex).text('radio_button_checked');
            break;
        case (currentPosition >= sapFirst && currentPosition < aeiFirst && sapSecond === 0 && xsolve !== 0):
            currentIndex = 3;
            icon.eq(currentIndex).text('radio_button_checked');
            break;
        case (currentPosition >= sapFirst && currentPosition < aeiFirst && sapSecond === 0 && xsolve === 0 && autea !== 0):
            currentIndex = 4;
            icon.eq(currentIndex).text('radio_button_checked');
            break;
        case (currentPosition >= sapFirst && currentPosition < aeiFirst && sapSecond === 0 && xsolve === 0 && autea === 0):
            currentIndex = 5;
            icon.eq(currentIndex).text('radio_button_checked');
            break;
        case (currentPosition >= aeiFirst && currentPosition < skills && aeiSecond !== 0):
            currentIndex = 6;
            icon.eq(currentIndex).text('radio_button_checked');
            break;
        case (currentPosition >= aeiFirst && currentPosition < skills && aeiSecond === 0):
            currentIndex = 7;
            icon.eq(currentIndex).text('radio_button_checked');
            break;
        case (currentPosition >= skills && currentPosition < openwhisk):
            currentIndex = 8;
            icon.eq(currentIndex).text('radio_button_checked');
            break;
        case (currentPosition >= openwhisk && currentPosition < contact && blog !== 0):
            currentIndex = 9;
            icon.eq(currentIndex).text('radio_button_checked');
            break;
        case (currentPosition >= openwhisk && currentPosition < contact && blog === 0 && other !== 0):
            currentIndex = 10;
            icon.eq(currentIndex).text('radio_button_checked');
            break;
        case (currentPosition >= openwhisk && currentPosition < contact && blog === 0 && other === 0):
            currentIndex = 11;
            icon.eq(currentIndex).text('radio_button_checked');
            break;
        case (currentPosition >= contact):
            currentIndex = 12;
            icon.eq(currentIndex).text('radio_button_checked');
            break;
        default:
            currentIndex = 0;
            icon.eq(currentIndex).text('radio_button_checked');
            break;
    }

    fillPreviousLocationElements(currentIndex);
}

$(window).scroll(function() {
    const currentPosition = $(document).scrollTop();
    currentNavigationElement(currentPosition);
    currentLocationElement(currentPosition);
});
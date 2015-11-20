
$(document).ready(function() {
    // Slider
    //
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        slidesToShow: 5,
    });

    // Autocomplete
    //
    multiComplete('#q', '.region-list').listen();

    // Search button
    //
    $('#search-button').click(() => {
        $('#form').submit();
    });

    // Communities menu
    //
    $('#menu-item-communities').mouseenter(function() {

        $('#menu-communities').slideToggle(100);
        $('#menu-item-communities').addClass('selected');

        searchMenu.hideOptionsMenu();
    });

    $('#menu-item-communities').mouseleave(function() {

        $('#menu-communities').hide(100);
        $('#menu-item-communities').removeClass('selected');
    });
});

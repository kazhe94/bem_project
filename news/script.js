$('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $('.mobile-nav').slideToggle('slow');
    $('.mobile-props-block').toggle('fast');
    $('body').toggleClass('stop-scroll');
    $('body').bind('touchmove', function(e){e.preventDefault()});

});  
$( document ).ready(function() {
    $('.menu-btn').on('click', function(e){
        e.preventDefault;
        $('.nav-menu').toggleClass('active');
        $('.menu-btn').toggleClass('menu-btn_active')
        $('body').toggleClass('stop-scroll');
    });
    $('a[href^="#link"]').on('click', function(e){
        e.preventDefault();
        if ($('.nav-menu').hasClass('active')) {
            $('.nav-menu').removeClass('active');
        }
        if ($('.menu-btn').hasClass('menu-btn_active')) {
            $('.menu-btn').removeClass('menu-btn_active');
        }
        if ($('body').hasClass('stop-scroll')) {
            $('body').removeClass('stop-scroll');
        }
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        centerSlides: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.arrow-right',
          prevEl: '.arrow-left',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            // when window width is >= 480px
            850: {
              slidesPerView: 2,
              spaceBetween: 30,  
            },
            // when window width is >= 640px
            1170: {
              slidesPerView: 3,
              spaceBetween: 30,
            }
          }
      });
      $('.get-form').on('click', function(){
          $('.modal-wrapper').addClass('modal-active');
          $('body').addClass('stop-scroll');
      });
      $('.close-button').on('click', function(){
        $('.modal-wrapper').removeClass('modal-active');
        $('body').removeClass('stop-scroll');
      });
      $('.modal-wrapper').on('click', function(event){
        if (event.target == this) {
          $('.modal-wrapper').removeClass('modal-active');
          $('body').removeClass('stop-scroll');
        }
        });

      $('#phone-input').mask("+7(999)999-99-99");

      $('#form').validate({
        errorPlacement: function(error, element) {
          return false
      },
        rules: {
          name: {
          required: true,
          minlength: 3
          },
          phone: {
            required: true,
            minlength: 10
          }
        },
      });
});


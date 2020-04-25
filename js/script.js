$( document ).ready(function() {
    $('.menu-btn').on('click', function(e){
        e.preventDefault;
        $('.header__list').toggleClass('header__list_active');
        $('.menu-btn').toggleClass('menu-btn_active')
        $('body').toggleClass('stop-scroll');
    });
    $('a[href^="#link"]').on('click', function(e){
        e.preventDefault();
        if ($('.header__list').hasClass('header__list_active')) {
            $('.header__list').removeClass('header__list_active');
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
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
              centerSlides: true,
            },
            // when window width is >= 850px
            850: {
              slidesPerView: 2,
              spaceBetween: 30,  
            },
            // when window width is >= 1170px
            1170: {
              slidesPerView: 3,
              spaceBetween: 30,
            }
          }
      });
      function closeModal () {
        $('.modal').removeClass('modal_active');
        $('body').removeClass('stop-scroll');
        $('.form__input').removeClass('error')
      };
      $('.get-form').on('click', function(){
        
        if($(this).hasClass('callback-btn') || $(this).hasClass('header__mobile-callback-btn')) {
          $('.email-input').css('display', 'none')
        } else {
          $('.email-input').css('display', 'block')
        }
          $('.modal').addClass('modal_active');
          $('body').addClass('stop-scroll');
      });
      $('.modal__close-button').on('click', function(){
        closeModal();
      });
      $('.modal').on('click', function(event){
        if (event.target == this) {
          closeModal();
        }
        });

      $('#phone-input').mask("+7(999)999-99-99");
});


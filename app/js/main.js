$(function() {
    wow = new WOW({
        boxClass:     'wow',      
        animateClass: 'animated', 
        offset:       0,          
        mobile:       false,       
        live:         true   
    }
    )
    wow.init();

    var mixer = mixitup('.portfolio__list');

    $('.filter__button').on('mixitup-control-active', function() {
        $.scrollify.update();
    })

    $(window).on('scroll', function() {
        $('.header__menu').toggleClass('header__menu--active', $(this).scrollTop() > 0);
    });

    $.scrollify({
        section : "section",
        sectionName : false,
        interstitialSection : "",
        easing: "easeInOutSine",
        scrollSpeed: 1000,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: false,
        overflowScroll: true,
        updateHash: false,
        touchScroll:true,
        before:function(index) {
           
          },
        after:function() {},
        afterResize:function() {
            
        },
        afterRender:function() {
            
          }
      });

    // $('.portfolio__more-link').on('click', function() {
    //     $('.more').removeClass('sr-only');
    //     $('.portfolio__more').css('display', 'none');
    //     // $.scrollify.update();
        
    // })

    var index = 7;
    $('.portfolio__box:gt('+index+')').hide();
    $('.portfolio__show--more').on('click', function() {
        $('.portfolio__box:gt('+index+')').fadeIn().show();
        $('.portfolio__title').text('Show less');
        $('.portfolio__show--more').css('display', 'none');
        $('.portfolio__show--less').css('display', 'block');
    });

    $('.portfolio__show--less').on('click', function() {
        $('.portfolio__box:gt('+index+')').hide("slow");
        $('.portfolio__title').text('WANT TO SEE MORE?');
        $('.portfolio__show--more').css('display', 'block');
        $('.portfolio__show--less').css('display', 'none');
    });
});
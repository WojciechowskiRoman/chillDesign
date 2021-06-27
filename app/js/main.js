$(function() {
    
    wow = new WOW({
        boxClass:     'wow',      
        animateClass: 'animated', 
        offset:       0,          
        mobile:       true,       
        live:         true   
    });
    
    wow.init();

    $('.menu__burger, .menu__link').on('click', function() {
        if( window.innerWidth <= 768 ){
            $('.menu__burger').toggleClass('menu__burger--active');
            $('.menu__list').toggleClass('menu__list--active');
            $('.body').toggleClass('lock');
            $('.overflow').toggleClass('overflow--active');
        }
    });

    $('.filter__button').on('mixitup-control-active', function() {
        $.scrollify.update();
    });

    $(window).on('scroll', function() {
        $('.header__menu').toggleClass('header__menu--active', $(this).scrollTop() > 0);
    });

    let index = 7;
    $('.portfolio__box:gt('+index+')').hide();
    $('#showPortfolioMore').on('click', function() {
        $('.portfolio__box:gt('+index+')').fadeIn().show();
        $('.portfolio__title').text('Show less');
        $('#showPortfolioMore').css('display', 'none');
        $('#showPortfolioLess').css('display', 'block');
    });

    $('#showPortfolioLess').on('click', function() {
        $('.portfolio__box:gt('+index+')').hide("slow");
        $('.portfolio__title').text('WANT TO SEE MORE?');
        $('#showPortfolioMore').css('display', 'block');
        $('#showPortfolioLess').css('display', 'none');
    });

    let blog = 2;

    $('.blog__item:gt('+ blog +')').hide();
    
    $('#showBlogMore').on('click', function() {
        $('.blog__item:gt(' + blog + ')').fadeIn().show();
        $('#showBlogMore').css('display', 'none');
        $('#showBlogLess').css('display', 'block');
    });

    $('#showBlogLess').on('click', function() {
        $('.blog__item:gt('+blog+')').hide("slow");
        $('#showBlogMore').css('display', 'block');
        $('#showBlogLess').css('display', 'none');
    });

    $("a[href^='.']").on('click', function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top - 60+'px'}, 1300);
        return false;
    });
    
    let list = document.querySelectorAll('.portfolio__button');
    let item = document.querySelectorAll('.portfolio__box');

    for(let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function() {
            for(let j = 0; j < list.length; j++) {
                list[j].classList.remove('portfolio__button--active')
            }
            this.classList.add('portfolio__button--active');

            let dataFilter = this.getAttribute('data-filter');

            for(let k = 0; k < item.length; k++) {
                item[k].classList.remove('active');
                item[k].classList.add('hide');

                if(item[k].getAttribute('data-item') == dataFilter ||
                dataFilter == 'all') {
                    item[k].classList.remove('hide');
                    item[k].classList.add('active');
                }
            }
        });
    }
});
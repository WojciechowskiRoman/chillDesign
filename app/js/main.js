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

    // var mixer = mixitup('.portfolio__list');

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
        before:function(index) {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
      });

    let index = 7;
    $('.portfolio__box:gt('+index+')').hide();
    $('.show--more').on('click', function() {
        $('.portfolio__box:gt('+index+')').fadeIn().show();
        $('.portfolio__title').text('Show less');
        $('.show--more').css('display', 'none');
        $('.show--less').css('display', 'block');
    });

    $('.show--less').on('click', function() {
        $('.portfolio__box:gt('+index+')').hide("slow");
        $('.portfolio__title').text('WANT TO SEE MORE?');
        $('.show--more').css('display', 'block');
        $('.show--less').css('display', 'none');
    });

    const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

    if(menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener('click', onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__menu').offsetHeight;

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                });
                e.preventDefault();
            }
        }
    }
    
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
        })
    }
});
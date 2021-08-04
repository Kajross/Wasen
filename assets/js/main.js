/*----------------------------------------------

Main Scripts

Theme    : Wasen
Version  : 1.0.0
Author   : Kajross
Support  : Kajross

Description: Personal Portfolio Template
Author/Developer URL: https://themeforest.net/user/kajross
License: Themeforest Standard Licenses: https://themeforest.net/licenses

----------------------------------------------*/

/*----------------------------------------------

		01 Preloader
		02 Wow js
		03 Back To Top Button
		04 Navbar
		05 Slide Navigation
		06 TypeJs
		07 Swiper
		08 Progress Bar
		09 Masonry Grid
		10 Popup
        11 Team Carousel
        12 Numbers
		13 Contact Form
		
----------------------------------------------*/

/*------------------------------------------------------------------

01 Preloader

------------------------------------------------------------------*/

jQuery(function () {
    "use strict";

    $(window).on('load', function () {
        $('body').addClass('loaded_hiding');
        window.setTimeout(function () {
            $('body').addClass('loaded');
            $('body').removeClass('loaded_hiding');
        }, 500);
    });
});

/*------------------------------------------------------------------

02 Wow js

------------------------------------------------------------------*/

jQuery(function ($) {
    "use strict";

    function bodyScrollAnimation() {
        if ($(window).width() > 768) {
            new WOW({
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0,
                mobile: false,
                duration: 1000,
                live: true,
                scrollContainer: null
            }).init();
        }
    }
    bodyScrollAnimation();
});

/*------------------------------------------------------------------

03 Back To Top

------------------------------------------------------------------*/

jQuery(function ($) {
    "use strict";

    var btn = $('.back-to-top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

});

/*------------------------------------------------------------------

04 Navbar

------------------------------------------------------------------*/

jQuery(function () {
    "use strict";

    $(() => {

        //On Scroll Functionality 
        $(window).scroll(() => {
            var windowTop = $(window).scrollTop();
            windowTop > 60 ? $('nav').addClass('navbar--shadow') : $('nav').removeClass('navbar--shadow');
        });

        //Click Logo To Scroll To Top
        $('.logo').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 800);
        });

        //Smooth Scrolling Using Navigation Menu
        $('.button-link').on('click', function (e) {
            $('html,body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 100
            }, 800);
            e.preventDefault();
        });

        //Smooth Scrolling Using Navigation Menu
        $('nav a[href*="#"]').on('click', function (e) {
            $('html,body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 100
            }, 800);
            e.preventDefault();
        });

        //Toggle Menu
        $('.menu__toggle').on('click', () => {
            $('.menu__toggle').toggleClass('closeMenu');
            $('.menu__list').toggleClass('showMenu');

            $('li').on('click', () => {
                $('.menu__list').removeClass('showMenu');
                $('.menu__toggle').removeClass('closeMenu');
            });
        });
    });
});

/*------------------------------------------------------------------

05 Slide Navigation

------------------------------------------------------------------*/

jQuery(window).scroll(function () {
    "use strict";

    var $sections = $('.section');
    $sections.each(function (i, el) {
        var top = $(el).offset().top - 300;
        var bottom = top + $(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if (scroll > top && scroll < bottom) {
            $('.menu__list li').removeClass('menu__item--active');
            $('a[href="#' + id + '"]').parent().addClass('menu__item--active');
        }
    });
});

/*------------------------------------------------------------------

06 TypeJs

------------------------------------------------------------------*/

jQuery(function () {
    "use strict";

    var options = {
        strings: ["web developer.", "UI/UX designer.",
            "photographer.",
        ],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        startDelay: 400,
    };
    var typed = new Typed("#typing", options);
});

/*------------------------------------------------------------------

07 Swiper

------------------------------------------------------------------*/

jQuery(function () {
    "use strict";

    //Offer Swiper
    let offerSwiper = new Swiper('.offer__swiper', {
        effect: 'coverflow',
        grabCursor: true,
        slidesPerView: 1,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        loop: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        coverflowEffect: {
            rotate: 15,
            stretch: 330,
            depth: 900,
            modifier: 1,
            slideShadows: false,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                spaceBetween: 100,
                coverflowEffect: {
                    rotate: 15,
                    stretch: 0,
                    depth: 400,
                },
            },
            // when window width is >= 768px
            768: {
                coverflowEffect: {
                    spaceBetween: 250,
                    rotate: 15,
                    stretch: 320,
                    depth: 900,
                },
            }
        }
    });

    //Comment Swiper
    let commentSwiper = new Swiper('.comment__swiper', {
        grabCursor: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 100,
        observeParents: true,
        breakpoints: {
            // when window width is >= 320px
            320: {
                spaceBetween: 50
            },
            // when window width is >= 640px
            640: {
                spaceBetween: 150
            }
        }
    });


    offerSwiper.controller.control = commentSwiper;
    commentSwiper.controller.control = offerSwiper;
});

/*------------------------------------------------------------------

08 Progress Bar

------------------------------------------------------------------*/

jQuery(function ($) {
    "use strict";

    $(window).on('scroll', function () {
        $(".skills__progress span").each(function () {
            var bottom_of_object =
                $(this).offset().top + $(this).outerHeight();
            var bottom_of_window =
                $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if (bottom_of_window >= bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });
});

/*------------------------------------------------------------------

09 Masonry Grid

------------------------------------------------------------------*/

jQuery(function ($) {
    "use strict";

    var $grid = $('.works').imagesLoaded(function () {
        $grid.masonry({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.works__item',
            columnWidth: '.works__item',
            gutter: 30,
            percentPosition: true,
        });
    });
});

/*------------------------------------------------------------------

10 Popup

------------------------------------------------------------------*/

jQuery(function ($) {
    "use strict";

    $('.works__link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
});

/*------------------------------------------------------------------

11 Team Carousel

------------------------------------------------------------------*/

jQuery(function ($) {
    "use strict";

    $('.team').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        lazyLoad: false,
        autoplay: false,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});

/*------------------------------------------------------------------

Numbers

------------------------------------------------------------------*/

jQuery(function ($) {
    "use strict";

    $('.numbers__count').counterUp({
        delay: 10,
        time: 2000,
        offset: 1200,
    });
});

/*------------------------------------------------------------------

Contact Form

------------------------------------------------------------------*/

jQuery(function ($) {
    "use strict";

    // Animation
    $('.form__input').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() !== "") {
                $(this).addClass('has-val');
            } else {
                $(this).removeClass('has-val');
            }
        });
    });

    // Validate
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit', function () {
        var check = true;

        if ($(name).val().trim() === '') {
            showValidate(name);
            check = false;
        }


        if ($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) === null) {
            showValidate(email);
            check = false;
        }

        if ($(message).val().trim() === '') {
            showValidate(message);
            check = false;
        }

        return check;
    });

    $('.validate-form .form__input').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }

});
$(document).ready(function(){

    // Aos Scroll Library
    AOS.init();

    // Rotational Paragraphs In Header
    function autoChange() {
        $(".header .text-info .active").each(function(){
            if (!$(this).is(":last-child")) {
                $(this).delay(2000).fadeOut(500, function(){
                    $(this).removeClass("active").next().addClass("active").fadeIn();
                    autoChange();
                });
            } else {
                $(this).delay(2000).fadeOut(500, function(){
                    $(this).removeClass("active");
                    $(".text-info p").eq(0).addClass("active").fadeIn();
                    autoChange();
                });
            }
        });
    };
    autoChange();

    // drop down
    $(".main-links .fa-chevron-down").on("click",function(){
        $(".drop-links").slideToggle(500);
        $(this).toggleClass("fa-chevron-down").toggleClass("fa-chevron-up");
    });

    // sticky navbar
    $(window).on("scroll",function(){
        if ($(window).scrollTop() >= $(".header").height()) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });

    // mobile menu navbar
    $(".menu .menu-content .fa-chevron-down").on("click",function(){
        $(".menu-drop-links").slideToggle(500);
        $(this).toggleClass("fa-chevron-down").toggleClass("fa-chevron-up");
    });

    $(".header .header-content .fa-bars").on("click",function(){
        $(".menu").toggleClass("view");
        $(this).toggleClass("fa-bars").toggleClass("fa-times");
    });

    $(".menu .menu-content .menu-links li a , .menu-drop-links li a").each(function(){
        $(this).on("click",function(){
            $(".menu").toggleClass("view");
            $(".fa-times").toggleClass("fa-bars").toggleClass("fa-times");
        });
    });

    $(".menu").on("click",function(){
        $(this).removeClass("view");
        $(".fa-times").addClass("fa-bars").removeClass("fa-times");
    });

    $(".menu-content").on("click",function(e){
        e.stopPropagation();
    });

    // press on logo in navbar to go home
    $(".navbar .nav-items .nav-logo img").on("click",function(){
        $("html").animate({
            scrollTop : 0
        }, 800);
    });

    // press on navbar links to go to sections
    $("li a").click(function(e){
        $("html,body").animate({
            scrollTop : $("#" + $(this).data("scroll")).offset().top
        }, 800);
    });

    // get started button
    $(".left-button").on("click",function(){
        $("html").animate({
            scrollTop : $(".about-us").offset().top - 50
        }, 1000);
    });

    // our services button
    $(".right-button").on("click",function(){
        $("html").animate({
            scrollTop : $(".our-services").offset().top - 110
        }, 1000);
    });

    // subscribe button (prevent page reload)
    $(".subscribe-button button").on("click",function(e){
        e.preventDefault();
    });

    // scroll to top button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $(".header .fa-chevron-up").fadeIn(500);
        } else {
            $(".header .fa-chevron-up").fadeOut(500);
        }
    });

    $(".header .fa-chevron-up").click(function(){
        $("html,body").animate({
            scrollTop : 0
        }, 500);
    });

    // Dark Mode Button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $(".header .fa-moon").fadeIn(500);
        } else {
            $(".header .fa-moon").fadeOut(500);
        }
    });

    $(".header .fa-moon").on("click",function(){
        $(".navbar").toggleClass("nav-dark");
        $(".drop-links").toggleClass("drop-down-dark");
        $(".drop-links li a").toggleClass("drop-down-text");
        $(".about-us").toggleClass("about-us-dark");
        $(".about-us h2").toggleClass("about-us-h2");
        $(".about-us p").toggleClass("about-us-p");
        $(".about-us h3").toggleClass("about-us-h3");
        $(".our-services").toggleClass("our-services-dark");
        $(".our-services h2").toggleClass("our-services-h2");
        $(".our-services p").toggleClass("our-services-p");
        $(".our-services h4").toggleClass("our-services-h4");
        $(".portfolio").toggleClass("portfolio-dark");
        $(".portfolio h2").toggleClass("portfolio-h2");
        $(".portfolio p").toggleClass("portfolio-p");
        $(".portfolio .item-overlay").toggleClass("portfolio-dark-overlay");
        $(".portfolio h4").toggleClass("portfolio-h4");
        $(".testimonials").toggleClass("testimonials-dark");
        $(".testimonials h2").toggleClass("testimonials-h2");
        $(".testimonials p").toggleClass("testimonials-p");
        $(".testimonials span").toggleClass("testimonials-span");
        $(".testimonials .client-text").toggleClass("testimonials-client-text");
        $(".testimonials q").toggleClass("testimonials-q");
        $(".our-team").toggleClass("our-team-dark");
        $(".our-team h2").toggleClass("our-team-h2");
        $(".our-team p").toggleClass("our-team-p");
        $(".our-team h4").toggleClass("our-team-h4");
        $(".our-team span").toggleClass("our-team-span");
        $(".our-team i").toggleClass("our-team-i");
        $(".contact-us").toggleClass("contact-us-dark");
        $(".contact-us h2").toggleClass("contact-us-h2");
        $(".contact-us p").toggleClass("contact-us-p");
        $(".contact-us input").toggleClass("contact-us-input");
        $(".contact-us :submit").toggleClass("contact-us-submit");
        $(".contact-us textarea").toggleClass("contact-us-textarea");
        $(".footer").toggleClass("footer-dark");
    });

    // portfolio gallery hover animation
    $(".portfolio-content-gallery .item").each(function(){
        $(this).on("mouseenter",function(){
            $(this).find(".item-overlay").slideDown(400);
        });
        $(this).on("mouseleave",function(){
            $(this).find(".item-overlay").slideUp(200);
        });
    });

    // contact us section (input border-color changer)
    $(".contact-us .contact-form form input, textarea").on("focus",function(){
        $(this).css("border-color","#03C4EB");
    }).on("blur",function(){
        $(this).css("border-color","#ccc");
    });

    // contact us form (prevent submit)
    $(".contact-us .contact-form form").submit(function(e){
        e.preventDefault();
    });
});
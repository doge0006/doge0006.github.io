$((function() {
    "use strict"; function a() {
        var a=$(".nav-menu"); $(window).scrollTop()>50?a.addClass("is-scrolling"):a.removeClass("is-scrolling")
    }

    a(), $(window).on("scroll", (function() {
                a()

            })), $(".navbar-nav > li:not(.dropdown) > a").on("click", (function() {
                $(".navbar-collapse").collapse("hide")

            })); var n=$("#navbar"); n.on("show.bs.collapse", (function(a) {
                $(this).parents(".nav-menu").addClass("menu-is-open")

            })), n.on("hide.bs.collapse", (function(a) {
                $(this).parents(".nav-menu").removeClass("menu-is-open")

            })), $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on("click", (function(a) {
                if(location.pathname.replace(/^\//, "")==this.pathname.replace(/^\//, "")&&location.hostname==this.hostname) {
                    var n=$(this.hash); (n=n.length?n:$("[name=" +this.hash.slice(1)+"]")).length&&(a.preventDefault(), $("html, body").animate({
                            scrollTop:n.offset().top
                        }

                        , 1e3, (function() {
                                var a=$(n); if(a.focus(), a.is(":focus"))return !1; a.attr("tabindex", "-1"), a.focus()
                            })))
            }

        })); var s=$(".testimonials"); s.length&&$.fn.owlCarousel&&s.owlCarousel({
    items:1, nav: !0, dots: !1, navText:['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>']

}); var o=$(".img-gallery"); o.length&&$.fn.owlCarousel&&o.owlCarousel({
nav: !1, center: !0, loop: !0, autoplay: !0, dots: !0, navText:['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>'], responsive: {
    0: {
        items:1
    }

    , 768: {
        items:3
    }
}
})
}));

window.addEventListener('load', function() {
    var image = document.getElementById('dynamic-image');
    image.style.transform = 'scale(1)';
    image.parentElement.style.position = 'fixed';
    image.parentElement.style.top = 'calc(50% - 250px)';
});

(function() {
    "use strict"; 
    function a() {
        var a=$(".nav-menu"); 
        $(window).scrollTop()>50?a.addClass("is-scrolling"):a.removeClass("is-scrolling")
    }

    a(), $(window).on("scroll", (function() {
        a()
    })), $(".navbar-nav > li:not(.dropdown) > a").on("click", (function() {
        $(".navbar-collapse").collapse("hide")
    })); 
    var n=$("#navbar"); 
    n.on("show.bs.collapse", (function(a) {
        $(this).parents(".nav-menu").addClass("menu-is-open")
    })), n.on("hide.bs.collapse", (function(a) {
        $(this).parents(".nav-menu").removeClass("menu-is-open")
    })), $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on("click", (function(a) {
        if(location.pathname.replace(/^\//, "")==this.pathname.replace(/^\//, "")&&location.hostname==this.hostname) {
            var n=$(this.hash); 
            (n=n.length?n:$("[name=" +this.hash.slice(1)+"]")).length&&(a.preventDefault(), $("html, body").animate({
                scrollTop:n.offset().top
            }, 1e3, (function() {
                var a=$(n); 
                if(a.focus(), a.is(":focus"))return !1; 
                a.attr("tabindex", "-1"), a.focus()
            })))
        }
    })); 

    var s=$(".testimonials"); 
    s.length&&$.fn.owlCarousel&&s.owlCarousel({
        items:1, nav: !0, dots: !1, navText:['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>']
    }); 

    var o=$(".img-gallery"); 
    o.length&&$.fn.owlCarousel&&o.owlCarousel({
        nav: !1, center: !0, loop: !0, autoplay: !0, dots: !0, navText:['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>'], responsive: {
            0: { items:1 },
            768: { items:3 }
        }
    })
})();

window.addEventListener('load', function() {
    var image = document.getElementById('dynamic-image');
    image.style.transform = 'scale(1)';
    image.parentElement.style.position = 'fixed';
    
    if(window.innerWidth <= 600) { // For mobile devices
        image.parentElement.style.top = 'calc(50% - 150px)';
    } else { // For larger devices
        image.parentElement.style.top = 'calc(50% - 250px)';
    }
});

window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var image = document.getElementById('dynamic-image');

    if(window.innerWidth <= 600) { // For mobile devices
        if (scrollPosition <= 550) {
            image.style.transform = 'scale(' + (1 + scrollPosition / 2000) + ')';
            image.parentElement.style.position = 'fixed';
            image.parentElement.style.top = 'calc(50% - 150px)';
        } else if (scrollPosition > 500 && scrollPosition <= 1000) {
            image.style.transform = 'scale(' + (2 - scrollPosition / 2000) + ')';
            image.parentElement.style.position = 'fixed';
            image.parentElement.style.top = 'calc(50% - 150px)';
        }

        if (scrollPosition > 550) {
            image.parentElement.style.position = 'absolute';
            image.parentElement.style.top = '767px';
            image.style.transform = 'scale(1)';
        }
    } else { // For larger devices
        if (scrollPosition <= 550) {
            image.style.transform = 'scale(' + (1 + scrollPosition / 1000) + ')';
            image.parentElement.style.position = 'fixed';
            image.parentElement.style.top = 'calc(50% - 250px)';
        } else if (scrollPosition > 500 && scrollPosition <= 1000) {
            image.style.transform = 'scale(' + (2 - scrollPosition / 1000) + ')';
            image.parentElement.style.position = 'fixed';
            image.parentElement.style.top = 'calc(50% - 250px)';
        }

        if (scrollPosition > 550) {
            image.parentElement.style.position = 'absolute';
            image.parentElement.style.top = '767px';
            image.style.transform = 'scale(1)';
        }
    }
});


! function(e) {
    "use strict";
    if (e(window).on("load", (function() {
            e(".preloader").fadeOut()
        })), e(window).on("resize", (function() {
            e(".slick-slider").slick("refresh")
        })), e(".preloader").length > 0 && e(".preloaderCls").each((function() {
            e(this).on("click", (function(t) {
                t.preventDefault(), e(".preloader").css("display", "none")
            }))
        })), e.fn.themeholymobilemenu = function(t) {
            var s = e.extend({
                menuToggleBtn: ".themeholy-menu-toggle",
                bodyToggleClass: "themeholy-body-visible",
                subMenuClass: "themeholy-submenu",
                subMenuParent: "themeholy-item-has-children",
                subMenuParentToggle: "themeholy-active",
                meanExpandClass: "themeholy-mean-expand",
                appendElement: '<span class="themeholy-mean-expand"></span>',
                subMenuToggleClass: "themeholy-open",
                toggleSpeed: 400
            }, t);
            return this.each((function() {
                var t = e(this);

                function a() {
                    t.toggleClass(s.bodyToggleClass);
                    var a = "." + s.subMenuClass;
                    e(a).each((function() {
                        e(this).hasClass(s.subMenuToggleClass) && (e(this).removeClass(s.subMenuToggleClass), e(this).css("display", "none"), e(this).parent().removeClass(s.subMenuParentToggle))
                    }))
                }
                t.find("li").each((function() {
                    var t = e(this).find("ul");
                    t.addClass(s.subMenuClass), t.css("display", "none"), t.parent().addClass(s.subMenuParent), t.prev("a").append(s.appendElement), t.next("a").append(s.appendElement)
                }));
                var o = "." + s.meanExpandClass;
                e(o).each((function() {
                    e(this).on("click", (function(t) {
                        var a;
                        t.preventDefault(), a = e(this).parent(), e(a).next("ul").length > 0 ? (e(a).parent().toggleClass(s.subMenuParentToggle), e(a).next("ul").slideToggle(s.toggleSpeed), e(a).next("ul").toggleClass(s.subMenuToggleClass)) : e(a).prev("ul").length > 0 && (e(a).parent().toggleClass(s.subMenuParentToggle), e(a).prev("ul").slideToggle(s.toggleSpeed), e(a).prev("ul").toggleClass(s.subMenuToggleClass))
                    }))
                })), e(s.menuToggleBtn).each((function() {
                    e(this).on("click", (function() {
                        a()
                    }))
                })), t.on("click", (function(e) {
                    e.stopPropagation(), a()
                })), t.find("div").on("click", (function(e) {
                    e.stopPropagation()
                }))
            }))
        }, e(".themeholy-menu-wrapper").themeholymobilemenu(), e(window).scroll((function() {
            e(this).scrollTop() > 500 ? e(".sticky-wrapper").addClass("sticky") : e(".sticky-wrapper").removeClass("sticky")
        })), e(".scroll-top")) {
        var t = document.querySelector(".scroll-top"),
            s = document.querySelector(".scroll-top path"),
            a = s.getTotalLength();
        s.style.transition = s.style.WebkitTransition = "none", s.style.strokeDasharray = a + " " + a, s.style.strokeDashoffset = a, s.getBoundingClientRect(), s.style.transition = s.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        var o = function() {
            var t = e(window).scrollTop(),
                o = e(document).height() - e(window).height(),
                n = a - t * a / o;
            s.style.strokeDashoffset = n
        };
        o(), e(window).scroll(o);
        jQuery(window).on("scroll", (function() {
            jQuery(this).scrollTop() > 50 ? jQuery(t).addClass("show") : jQuery(t).removeClass("show")
        })), jQuery(t).on("click", (function(e) {
            return e.preventDefault(), jQuery("html, body").animate({
                scrollTop: 0
            }, 750), !1
        }))
    }
    e("[data-bg-src]").length > 0 && e("[data-bg-src]").each((function() {
        var t = e(this).attr("data-bg-src");
        e(this).css("background-image", "url(" + t + ")"), e(this).removeAttr("data-bg-src").addClass("background-image")
    })), e("[data-bg-color]").length > 0 && e("[data-bg-color]").each((function() {
        var t = e(this).attr("data-bg-color");
        e(this).css("background-color", t), e(this).removeAttr("data-bg-color")
    })), e("[data-mask-src]").length > 0 && e("[data-mask-src]").each((function() {
        var t = e(this).attr("data-mask-src");
        e(this).css({
            "mask-image": "url(" + t + ")",
            "-webkit-mask-image": "url(" + t + ")"
        }), e(this).addClass("bg-mask"), e(this).removeAttr("data-mask-src")
    })), e(".center-first").on("init reInit afterChange", (function(e, t, s, a) {})), e(".themeholy-carousel").each((function() {
        var t = e(this);

        function s(e) {
            return t.data(e)
        }
        var a = '<button type="button" class="slick-prev"><i class="' + s("prev-arrow") + '"></i></button>',
            o = '<button type="button" class="slick-next"><i class="' + s("next-arrow") + '"></i></button>';
        e("[data-slick-next]").each((function() {
            e(this).on("click", (function(t) {
                t.preventDefault(), e(e(this).data("slick-next")).slick("slickNext")
            }))
        })), e("[data-slick-prev]").each((function() {
            e(this).on("click", (function(t) {
                t.preventDefault(), e(e(this).data("slick-prev")).slick("slickPrev")
            }))
        })), 1 == s("arrows") && (t.closest(".arrow-wrap").length || t.closest(".container").parent().addClass("arrow-wrap")), t.slick({
            dots: !!s("dots"),
            fade: !!s("fade"),
            arrows: !!s("arrows"),
            speed: s("speed") ? s("speed") : 1e3,
            asNavFor: !!s("asnavfor") && s("asnavfor"),
            autoplay: 0 != s("autoplay"),
            infinite: 0 != s("infinite"),
            slidesToShow: s("slide-show") ? s("slide-show") : 1,
            adaptiveHeight: !!s("adaptive-height"),
            centerMode: !!s("center-mode"),
            autoplaySpeed: s("autoplay-speed") ? s("autoplay-speed") : 8e3,
            centerPadding: s("center-padding") ? s("center-padding") : "0",
            focusOnSelect: 0 != s("focuson-select"),
            pauseOnFocus: !!s("pauseon-focus"),
            pauseOnHover: !!s("pauseon-hover"),
            variableWidth: !!s("variable-width"),
            vertical: !!s("vertical"),
            verticalSwiping: !!s("vertical-swipe"),
            swipeToSlide: !!s("swipetoslide"),
            prevArrow: s("prev-arrow") ? a : '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
            nextArrow: s("next-arrow") ? o : '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
            rtl: "rtl" == e("html").attr("dir"),
            responsive: [{
                breakpoint: 1600,
                settings: {
                    arrows: !!s("xl-arrows"),
                    dots: !!s("xl-dots"),
                    slidesToShow: s("xl-slide-show") ? s("xl-slide-show") : s("slide-show"),
                    centerMode: !!s("xl-center-mode"),
                    centerPadding: "0"
                }
            }, {
                breakpoint: 1400,
                settings: {
                    arrows: !!s("ml-arrows"),
                    dots: !!s("ml-dots"),
                    slidesToShow: s("ml-slide-show") ? s("ml-slide-show") : s("slide-show"),
                    centerMode: !!s("ml-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 1200,
                settings: {
                    arrows: !!s("lg-arrows"),
                    dots: !!s("lg-dots"),
                    slidesToShow: s("lg-slide-show") ? s("lg-slide-show") : s("slide-show"),
                    centerMode: !!s("lg-center-mode") && s("lg-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 992,
                settings: {
                    arrows: !!s("md-arrows"),
                    dots: !!s("md-dots"),
                    slidesToShow: s("md-slide-show") ? s("md-slide-show") : 1,
                    centerMode: !!s("md-center-mode") && s("md-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: !!s("sm-arrows"),
                    dots: !!s("sm-dots"),
                    slidesToShow: s("sm-slide-show") ? s("sm-slide-show") : 1,
                    centerMode: !!s("sm-center-mode") && s("sm-center-mode"),
                    centerPadding: 0,
                    variableWidth: !!s("sm-variable-width")
                }
            }, {
                breakpoint: 576,
                settings: {
                    arrows: !!s("xs-arrows"),
                    dots: !!s("xs-dots"),
                    slidesToShow: s("xs-slide-show") ? s("xs-slide-show") : 1,
                    centerMode: !!s("xs-center-mode") && s("xs-center-mode"),
                    centerPadding: 0,
                    variableWidth: !!s("xs-variable-width")
                }
            }]
        })
    })), e("[data-ani-duration]").each((function() {
        var t = e(this).data("ani-duration");
        e(this).css("animation-duration", t)
    })), e("[data-ani-delay]").each((function() {
        var t = e(this).data("ani-delay");
        e(this).css("animation-delay", t)
    })), e("[data-ani]").each((function() {
        var t = e(this).data("ani");
        e(this).addClass(t), e(".slick-current [data-ani]").addClass("themeholy-animated")
    })), e(".themeholy-carousel").on("afterChange", (function(t, s, a, o) {
        e(s.$slides).find("[data-ani]").removeClass("themeholy-animated"), e(s.$slides[a]).find("[data-ani]").addClass("themeholy-animated")
    }));
    var n, i, r, l = ".ajax-contact",
        c = '[name="email"]',
        d = e(".form-messages");

    function p() {
        var t = e(l).serialize();
        (function() {
            var t, s = !0;

            function a(a) {
                a = a.split(",");
                for (var o = 0; o < a.length; o++) t = l + " " + a[o], e(t).val() ? (e(t).removeClass("is-invalid"), s = !0) : (e(t).addClass("is-invalid"), s = !1)
            }
            a('[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'), e(c).val() && e(c).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) ? (e(c).removeClass("is-invalid"), s = !0) : (e(c).addClass("is-invalid"), s = !1);
            return s
        })() && jQuery.ajax({
            url: e(l).attr("action"),
            data: t,
            type: "POST"
        }).done((function(t) {
            d.removeClass("error"), d.addClass("success"), d.text(t), e(l + ' input:not([type="submit"]),' + l + " textarea").val("")
        })).fail((function(e) {
            d.removeClass("success"), d.addClass("error"), "" !== e.responseText ? d.html(e.responseText) : d.html("Oops! An error occured and your message could not be sent.")
        }))
    }

    function u(e) {
        return parseInt(e, 10)
    }
    e(l).on("submit", (function(e) {
            e.preventDefault(), p()
        })), n = ".popup-search-box", i = ".searchClose", r = "show", e(".searchBoxToggler").on("click", (function(t) {
            t.preventDefault(), e(n).addClass(r)
        })), e(n).on("click", (function(t) {
            t.stopPropagation(), e(n).removeClass(r)
        })), e(n).find("form").on("click", (function(t) {
            t.stopPropagation(), e(n).addClass(r)
        })), e(i).on("click", (function(t) {
            t.preventDefault(), t.stopPropagation(), e(n).removeClass(r)
        })),
        function(t, s, a, o) {
            e(s).on("click", (function(s) {
                s.preventDefault(), e(t).addClass(o)
            })), e(t).on("click", (function(s) {
                s.stopPropagation(), e(t).removeClass(o)
            })), e(t + " > div").on("click", (function(s) {
                s.stopPropagation(), e(t).addClass(o)
            })), e(a).on("click", (function(s) {
                s.preventDefault(), s.stopPropagation(), e(t).removeClass(o)
            }))
        }(".sidemenu-wrapper", ".sideMenuToggler", ".sideMenuCls", "show"), e(".popup-image").magnificPopup({
            type: "image",
            mainClass: "mfp-zoom-in",
            removalDelay: 260,
            gallery: {
                enabled: !0
            }
        }), e(".popup-video").magnificPopup({
            type: "iframe"
        }), e(".popup-content").magnificPopup({
            type: "inline",
            midClick: !0
        }), e(".popup-content").on("click", (function() {
            e(".slick-slider").slick("refresh")
        })), e.fn.sectionPosition = function(t, s) {
            e(this).each((function() {
                var a, o, n, i, r, l = e(this);
                a = Math.floor(l.height() / 2), o = l.attr(t), n = l.attr(s), i = u(e(n).css("padding-top")), r = u(e(n).css("padding-bottom")), "top-half" === o ? (e(n).css("padding-bottom", r + a + "px"), l.css("margin-top", "-" + a + "px")) : "bottom-half" === o && (e(n).css("padding-top", i + a + "px"), l.css("margin-bottom", "-" + a + "px"))
            }))
        };
    e("[data-sec-pos]").length && e("[data-sec-pos]").imagesLoaded((function() {
        e("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for")
    })), e(".filter-active").imagesLoaded((function() {
        if (e(".filter-active").length > 0) {
            var t = e(".filter-active").isotope({
                itemSelector: ".filter-item",
                filter: "*",
                masonry: {}
            });
            e(".filter-menu-active").on("click", "button", (function() {
                var s = e(this).attr("data-filter");
                t.isotope({
                    filter: s
                })
            })), e(".filter-menu-active").on("click", "button", (function(t) {
                t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active")
            }))
        }
    })), e(".counter-number").counterUp({
        delay: 10,
        time: 1e3
    }), e.fn.shapeMockup = function() {
        e(this).each((function() {
            var t = e(this),
                s = t.data("top"),
                a = t.data("right"),
                o = t.data("bottom"),
                n = t.data("left");
            t.css({
                top: s,
                right: a,
                bottom: o,
                left: n
            }).removeAttr("data-top").removeAttr("data-right").removeAttr("data-bottom").removeAttr("data-left").parent().addClass("shape-mockup-wrap")
        }))
    }, e(".shape-mockup") && e(".shape-mockup").shapeMockup(), e(".progress-bar").waypoint((function() {
        e(".progress-bar").css({
            animation: "animate-positive 1.8s",
            opacity: "1"
        })
    }), {
        offset: "75%"
    }), e(".price_slider").slider({
        range: !0,
        min: 10,
        max: 100,
        values: [10, 75],
        slide: function(t, s) {
            e(".from").text("$" + s.values[0]), e(".to").text("$" + s.values[1])
        }
    }), e(".from").text("$" + e(".price_slider").slider("values", 0)), e(".to").text("$" + e(".price_slider").slider("values", 1)), e(".pstep-1").hover((function() {
        e(".step-1").addClass("active"), e(".step-2, .step-3").removeClass("active")
    }), (function() {
        e(".step-1, .step-3").removeClass("active"), e(".step-2").addClass("active")
    })), e(".pstep-3").hover((function() {
        e(".step-3").addClass("active"), e(".step-2, .step-1").removeClass("active")
    }), (function() {
        e(".step-2, .step-3").removeClass("active"), e(".step-2").addClass("active")
    })), e.fn.indicator = function() {
        e(this).each((function() {
            var t = e(this),
                s = t.find("a"),
                a = t.find("button");
            t.append('<span class="indicator"></span>');
            var o, n = t.find(".indicator");

            function i() {
                var s = t.find(".active"),
                    a = s.css("height"),
                    o = s.css("width"),
                    i = s.position().top + "px",
                    r = s.position().left + "px";
                e(window).on("resize", (function() {
                    i = s.position().top + "px", r = s.position().left + "px"
                })), n.get(0).style.setProperty("--height-set", a), n.get(0).style.setProperty("--width-set", o), n.get(0).style.setProperty("--pos-y", i), n.get(0).style.setProperty("--pos-x", r)
            }
            s.length ? o = s : a.length && (o = a), o.on("click", (function(t) {
                t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active"), i()
            })), i(), e(window).on("resize", (function() {
                i()
            }))
        }))
    }, e(".indicator-active").length && e(".indicator-active").indicator(), e('[data-bs-toggle="tab"]').on("shown.bs.tab", (function(t) {
        e(".slick-slider").slick("setPosition")
    })), e("#ship-to-different-address-checkbox").on("change", (function() {
        e(this).is(":checked") ? e("#ship-to-different-address").next(".shipping_address").slideDown() : e("#ship-to-different-address").next(".shipping_address").slideUp()
    })), e(".woocommerce-form-login-toggle a").on("click", (function(t) {
        t.preventDefault(), e(".woocommerce-form-login").slideToggle()
    })), e(".woocommerce-form-coupon-toggle a").on("click", (function(t) {
        t.preventDefault(), e(".woocommerce-form-coupon").slideToggle()
    })), e(".shipping-calculator-button").on("click", (function(t) {
        t.preventDefault(), e(this).next(".shipping-calculator-form").slideToggle()
    })), e('.wc_payment_methods input[type="radio"]:checked').siblings(".payment_box").show(), e('.wc_payment_methods input[type="radio"]').each((function() {
        e(this).on("change", (function() {
            e(".payment_box").slideUp(), e(this).siblings(".payment_box").slideDown()
        }))
    })), e(".rating-select .stars a").each((function() {
        e(this).on("click", (function(t) {
            t.preventDefault(), e(this).siblings().removeClass("active"), e(this).parent().parent().addClass("selected"), e(this).addClass("active")
        }))
    })), e(".quantity-plus").each((function() {
        e(this).on("click", (function(t) {
            t.preventDefault();
            var s = e(this).siblings(".qty-input"),
                a = parseInt(s.val(), 10);
            isNaN(a) || s.val(a + 1)
        }))
    })), e(".quantity-minus").each((function() {
        e(this).on("click", (function(t) {
            t.preventDefault();
            var s = e(this).siblings(".qty-input"),
                a = parseInt(s.val(), 10);
            !isNaN(a) && a > 1 && s.val(a - 1)
        }))
    })), window.addEventListener("contextmenu", (function(e) {
        // Do nothing
    }), false)
}(jQuery);
$(document).ready(function () {

    /* opening */
    $('.counting').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },
            {
                duration: 850,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    //alert('finished');
                }
            });
    });

    /* intro */





    //gnb scroll
    if (matchMedia("screen and (min-width: 300px)").matches) {
        let lastScrollTop1 = 0;

        $(window).scroll(function (event) {
            const a = $(this).scrollTop();
            if ((a > lastScrollTop1) && (lastScrollTop1 > 0)) {
                $("#header").addClass("on");
            } else {
                $("#header").removeClass("on");
            };
            lastScrollTop1 = a;
        });
    }

    if (matchMedia("screen and (min-width: 1600px)").matches) {
        let lastScrollTop = 0;

        window.onscroll = function () {
            const scrollTop = window.scrollY;
            if (scrollTop >= 2600) {
                if ((scrollTop > lastScrollTop) && (lastScrollTop > 0)) {
                    $("#header").addClass("on");
                } else {
                    $("#header").removeClass("on");
                }
            } else {
                $("#header").removeClass("on");
            }
            lastScrollTop = scrollTop;

        };
    }





    /* main_visual icon */
    $(".tab_icon > li").click(function () {
        let idx = $(this).index();
        $(".tab_window > li").eq(idx).addClass("on").siblings().removeClass("on");
    });

    $(".icon2 > li").click(function () {
        let idx = $(this).index();
        $(".tab_window > li").eq(idx + 5).addClass("on").siblings().removeClass("on");
    });


    $(".btn_close,.btn_close2").click(function () {
        $(".tab_window > li").removeClass("on");
    });

    /* video */



    ScrollTrigger.matchMedia({

        "(min-width: 1600px)": function () {
            const slideh2 = gsap.timeline();
            slideh2.from(".h2_tit", { opacity: 0, x: -50, y: -50 })

            ScrollTrigger.create({
                animation: slideh2,
                trigger: "#review",
                start: "top 100%",
                end: "50% 50%",
                scrub: 1,
            });
            const pc = gsap.timeline();
            pc.to(".pc_wrap", 2, { scale: 4, yPercent: 50 })
            pc.to("#header", { opacity: 1, zIndex: 5 })
            pc.to("#intro", 1, { opacity: 0, zIndex: -5, ease: "steps(1)", })


            ScrollTrigger.create({
                animation: pc,
                yPercent: -300 * (main_visual.length - 1),
                trigger: "#main_visual",
                start: "top top",
                end: "+=2500",
                scrub: 1,
                pin: true,
                pinSpacing: true,
            });
        },

        "(max-width: 1599px)": function () {
            const slideh2 = gsap.timeline();
            slideh2.from(".h2_tit", { opacity: 0, y: -50 })

            ScrollTrigger.create({
                animation: slideh2,
                trigger: "#review",
                start: "top 100%",
                end: "50% 50%",
                scrub: 1,
            });
        },

        "all": function () {
        }

    });

    ScrollTrigger.matchMedia({
        "(min-width: 1600px)": function () {
            const scrollarrow = gsap.timeline();
            scrollarrow.from(".arrow img", { opacity: 0, x: -50, rotate: -160 })

            ScrollTrigger.create({
                animation: scrollarrow,
                trigger: "#review",
                start: "top 60%",
                end: "bottom bottom",
                scrub: 1,
            });
        },
        "(max-width: 1599px)": function () {
            const scrollarrow = gsap.timeline();
            scrollarrow.from(".arrow img", { opacity: 0, rotate: -180 })

            ScrollTrigger.create({
                animation: scrollarrow,
                trigger: "#review",
                start: "top 80%",
                end: "+=1000",
                scrub: 1,
            });
        },

        "all": function () {
        }

    });



    const chating = gsap.timeline();
    chating.from(".chat1", { opacity: 0, ease: "steps(1)", })
    chating.from(".chat2", { opacity: 0, ease: "steps(1)", })
    chating.from(".chat3", { opacity: 0, ease: "steps(1)", })
    chating.from(".chat4", { opacity: 0, ease: "steps(1)", })
    chating.from(".chat5", { opacity: 0, ease: "steps(1)", })
    chating.from(".chat6", { opacity: 0, ease: "steps(1)", })



    ScrollTrigger.create({
        animation: chating,
        trigger: ".review_pin",
        start: "top 5%",
        end: "+=2500",
        scrub: true,
        pin: true,
        pinSpacing: true,
    });



    document.addEventListener("DOMContentLoaded", (event) => {
        gsap.registerPlugin(Draggable)

        Draggable.create(".tab_icon > li", {
            bounds: "#main_visual",
            inertia: true
        });
    });





    /* 가로 스크롤 반응형 */

    ScrollTrigger.matchMedia({


        "(min-width: 1200px)": function () {
            const horizontal = document.querySelector("#horizontal");
            const sections = gsap.utils.toArray("#horizontal > section");

            gsap.to(sections, {
                x: -4400 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: horizontal,
                    start: "top top",
                    end: () => "+=" + (horizontal.offsetWidth - innerWidth),
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    anticipatePin: 1
                }
            });
            let smileroll = gsap.timeline();
            smileroll.to(".intrd_tit img", 4, { opacity: 1 })
            smileroll.to(".intrd_tit img", 3, { x: 1450, rotate: 360 })

            ScrollTrigger.create({
                animation: smileroll,
                trigger: "#horizontal",
                start: "top 10%",
                end: "+=5000",
                scrub: 1,
            });
        },

        "(min-width: 768px) and (max-width: 1199px)": function () {
            const horizontal = document.querySelector("#horizontal");
            const sections = gsap.utils.toArray("#horizontal > section");

            gsap.to(sections, {
                x: -3300 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: horizontal,
                    start: "top top",
                    end: () => "+=" + (horizontal.offsetWidth - innerWidth),
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    anticipatePin: 1
                }
            });

            let smileroll = gsap.timeline();
            smileroll.to(".intrd_tit img", { opacity: 1 })
            smileroll.to(".intrd_tit img", { x: 1250, rotate: 360 })

            ScrollTrigger.create({
                animation: smileroll,
                trigger: "#horizontal",
                start: "top 10%",
                end: "+=5500",
                scrub: 1,
            });
        },

        "(min-width: 768px) and (max-width: 899px)": function () {
            let smileroll = gsap.timeline();
            smileroll.to(".intrd_tit img", { opacity: 1 })
            smileroll.to(".intrd_tit img", { x: 1100, rotate: 360 })

            ScrollTrigger.create({
                animation: smileroll,
                trigger: "#horizontal",
                start: "top 10%",
                end: "+=5500",
                scrub: 1,
            });
        },


        "all": function () {
        }

    });


    /* folder slide */

    $(".purslide > ul").hide();
    $(".pur_web > li > .imgbox, .pur_zep > li > .imgbox").click(function () {
        $(this).closest(".purslide").children("ul").stop().slideToggle();
    });



    /* 팝업 오류창 */

    document.getElementById('addImagesBtn').addEventListener('click', function () {
        var imageUrl = 'img/popup_window.png'; // 이미지 URL
        var numberOfImages = 10; // 이미지 수
        var interval = 50; // (밀리초)
        var step = 25; // 간격 (픽셀)

        var container = document.querySelector('.image-container');

        for (var i = 0; i < numberOfImages; i++) {
            (function (index) {
                setTimeout(function () {
                    var img = document.createElement('img');
                    img.src = imageUrl;
                    img.alt = 'Placeholder Image';

                    // 이미지의 위치를 오른쪽 아래 방향으로 설정
                    img.style.left = (index * step) + 'px';
                    img.style.top = (index * step) + 'px';

                    container.appendChild(img);
                }, index * interval);
            })(i);
        }
    });


    const card = new Swiper('.card', {
        slidesPerView: 1,

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,

    });

    const finger = gsap.timeline();
    finger.to(".finger", { x: -100 })

    ScrollTrigger.create({
        animation: finger,
        trigger: ".txt_readyset",
        start: "top 50%",
        end: "+=500",
        scrub: 1,
    });


});







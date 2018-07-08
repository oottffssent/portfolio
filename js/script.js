            //마우스스크롤
            $(function () {
                baloonUp();

                function baloonUp() {
                    $('.scroll').animate({
                        'top': 770
                    }, 800, null, baloonDown);
                }

                function baloonDown() {
                    $('.scroll').animate({
                        'top': 760
                    }, 600, null, baloonUp);
                }
                
                //헤더
                var nav = $('#header');
                $(window).scroll(function () {
                if ($(this).scrollTop() > 20) {
                    nav.addClass("scrollBg");
                  } else if($(this).scrollTop() < 20){
                    nav.removeClass("scrollBg");
                  }
                });
                
                //메뉴스크롤
                $('.gnbPro').click(function () {
                    $('body,html').animate({
                        scrollTop: 1000
                    }, 800);
                    return false;
                });
                $('.gnbPor').click(function () {
                    $('body,html').animate({
                        scrollTop: 2700
                    }, 800);
                    return false;
                });
                $('.gnbCon').click(function () {
                    $('body,html').animate({
                        scrollTop: 3500
                    }, 800);
                    return false;
                });
            });


            
            //슬라이드
            $( document ).ready(function( $ ) {
                $( '#example5' ).sliderPro({
                    width: 670,
                    height: 500,
                    orientation: 'vertical',
                    loop: true,
                    arrows: true,
                    buttons: false,
                    thumbnailsPosition: 'right',
                    thumbnailPointer: true,
                    thumbnailWidth: 290,
                    breakpoints: {
                        800: {
                            thumbnailsPosition: 'bottom',
                            thumbnailWidth: 270,
                            thumbnailHeight: 100
                        },
                        500: {
                            thumbnailsPosition: 'bottom',
                            thumbnailWidth: 120,
                            thumbnailHeight: 50
                        }
                    }
                });
            });
            
            
            //퍼센테이지
            $(document).ready(function ($) {
                function animateElements() {
                    $('.progressbar').each(function () {
                        var elementPos = $(this).offset().top;
                        var topOfWindow = $(window).scrollTop();
                        var percent = $(this).find('.circle').attr('data-percent');
                        var percentage = parseInt(percent, 10) / parseInt(100, 10);
                        var animate = $(this).data('animate');
                        if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                            $(this).data('animate', true);
                            $(this).find('.circle').circleProgress({
                                startAngle: -Math.PI / 2,
                                value: percent / 100,
                                size: 180,
                                thickness: 5,
                                emptyFill: "rgba(0,0,0, .1)",
                            }).on('circle-animation-progress', function (event, progress, stepValue) {
                                $(this).find('div').text((stepValue*100).toFixed(1) + "%");
                            }).stop();
                        }
                    });
                }

                // Show animated elements
                animateElements();
                $(window).scroll(animateElements);
            }); //end document ready function
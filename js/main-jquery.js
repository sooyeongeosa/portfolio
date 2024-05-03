$(document).ready(function(){
    const searchEl = $('.search');
    const searchInputEl = $('input');

    searchEl.click(function(){
        searchInputEl.focus();
    })
    searchInputEl.focus(function(){
        searchEl.addClass('focused');
        searchInputEl.attr('placeholder','통합검색');
    })
    searchInputEl.blur(function(){
        searchEl.removeClass('focused');
        searchInputEl.attr('placeholder','');
    })
    $('.main-menu .item').mouseenter(function(){      
        // console.log(target)
        let index = $(this).index(this);       
        $(this).eq(index).addClass('on');
        $('.main-menu .item.on .item__contents').stop().slideDown("fast")
    })
    $('.main-menu .item').mouseleave(function(){      
        // console.log(target)
        let index = $(this).index(this);       
        $(this).eq(index).stop().removeClass('on');
        $('.main-menu .item .item__contents').slideUp("fast")
    })

    const fadeEls=$('.visual .fade-in');
    fadeEls.each(function(index, fadeEl){
        // gsap.to(요소, 지속시간, 옵션)
        gsap.to(fadeEl, {
            duration:1,
            opacity: 1,
            delay: (index+1)*0.7, //0.7초. 1.4초, 2.1초
        })
    })

    new Swiper(".sw-notice", {
        direction: "vertical",
        autoplay: true,
        loop: true        
    });

    new Swiper(".sw-promotion", {
        autoplay: true,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: true,
        pagination: {
            el:".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
        },
    })

    // PROMOTION 보여주기
    let promotion_btn = $('.promotion-btn');
    let promotionEl = $('.promotion');
    let isHidePromotion = true;

    promotion_btn.click(function(){
        isHidePromotion = !isHidePromotion;
        if(isHidePromotion==true){
            // 숨김처리
            promotionEl.addClass('hide');
            $(this).removeClass('active')
        }else {
            // 보임처리
            promotionEl.removeClass('hide');
            $(this).addClass('active')
        }
    })
    const spyEls = $('section.scroll-spy')
    spyEls.each(function(index,spyEl){
        new ScrollMagic
        .Scene({
            triggerElement:spyEl,
            triggerHook: .9
        })
        .setClassToggle(spyEl,'show')
        .addTo(new ScrollMagic.Controller())
    })

})


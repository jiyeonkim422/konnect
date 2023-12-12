// more_btn.js
$(function () {
    $('.tabcontent > div').hide();
    $('.tabnav a')
        .click(function () {
            $('.tabcontent > div')
                .hide()
                .filter(this.hash)
                .fadeIn();
            $('.tabnav a').removeClass('active');
            $(this).addClass('active');
            return false;
        })
        .filter(':eq(0)')
        .click();
});


// faq_list.js (열림 닫힘)
$(function () {
    $(".faq_list_box").click(function () {
  
      var currentFaqListDetail = $(this).find(".faq_list_detail");
  
      $(".faq_list_detail").not(currentFaqListDetail).slideUp(0);
      currentFaqListDetail.slideToggle('fast');
      $(".faq_list_box").not(this).find(".ic_close_m_bk").removeClass('on');
      $(this).find(".ic_close_m_bk").toggleClass('on').siblings().removeClass('on');
    });
  });



//language.js
$(function () {
    $(".language").click(function () {
        $(".language_list").slideToggle(0);
    });
});
  

// hamburger.js
    document.addEventListener('DOMContentLoaded', function() {
        var headerCate = document.getElementById('header_cate');
        var hamburgerLine = document.getElementById('hamburger_line');
        var hamburgerWrap = document.querySelector('.hamburger_wrap');
        var headerClose = document.getElementById('header_close');

        headerCate.addEventListener('click', function() {
            // Toggle 'is-active' class on #hamburger_line
            hamburgerLine.classList.toggle('is-active');

            // Toggle 'on' class on .hamburger_wrap
            hamburgerWrap.classList.toggle('on');
        });

        headerClose.addEventListener('click', function() {
            // Remove 'on' class from .hamburger_wrap
            hamburgerWrap.classList.remove('on');

            // Remove 'is-active' class from #hamburger_line
            hamburgerLine.classList.remove('is-active');
        });
});


// scrolltrigger.js
gsap.set(".scrolltrigger_1", { borderRadius: "30px", width: "calc(100% - 8%)" });
gsap.set(".scrolltrigger_2", { borderRadius: "0", width: "100%" });


gsap.to(".scrolltrigger_1", {
    borderRadius: "0",
    width: "100%", 
    ease: "none",
    scrollTrigger: {
      trigger: ".scrolltrigger_1",
      start: "0 center",  // Scroll animation starts when the top of the trigger hits the middle of the viewport
      end: "50% center",  // Scroll animation ends when the bottom of the trigger hits the 20% mark of the viewport
      scrub: 1
    },
  });

gsap.to(".scrolltrigger_2", {
  borderRadius: "30px",
  width: "calc(100% - 8%)", 
  ease: "none",
  scrollTrigger: {
    trigger: ".scrolltrigger_2",
    start: "80% center",  // Scroll animation starts when the top of the trigger hits the middle of the viewport
    end: "130% center",  // Scroll animation ends when the bottom of the trigger hits the 20% mark of the viewport
    scrub: 1
  },
});




// flow_content.js
$(window).on('load', function() {
    setFlowBanner();
})

function setFlowBanner() {
    const $wrap = $('.flow_banner');
    const $list = $('.flow_banner .flow_banner_list');
    let wrapWidth = $wrap.width();
    let listWidth = $list.width();
    const speed = 92; //1초에 몇픽셀 이동하는지 설정

    //리스트 복제
    let $clone = $list.clone();
    $wrap.append($clone);
    flowBannerAct()

    //배너 실행 함수
    function flowBannerAct() {
        //무한 반복을 위해 리스트를 복제 후 배너에 추가
        if (listWidth < wrapWidth) {
            const listCount = Math.ceil(wrapWidth * 2 / listWidth);
            for (let i = 2; i < listCount; i++) {
                $clone = $clone.clone();
                $wrap.append($clone);
            }
        }
        $wrap.find('.flow_banner_list').css({
            'animation': `${listWidth / speed}s linear infinite flowRolling`
        });
    }

    // 마우스가 요소 위로 진입했을 때 일시정지
    $wrap.on('mouseenter', function () {
        $wrap.find('.flow_banner_list').css('animation-play-state', 'paused');
    });

    // 마우스가 요소에서 빠져나갈 때 재생
    $wrap.on('mouseleave', function () {
        $wrap.find('.flow_banner_list').css('animation-play-state', 'running');
    });
}

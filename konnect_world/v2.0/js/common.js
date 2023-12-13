 //history back - 페이지 뒤로가기
 function goBack(){
    window.history.back();
}

// 페이지 앞으로가기
function goForward(){
    window.history.forward();
}




// textarea 글자수 제한
$('.textarea_box .textarea_form').keyup(function(){
    var content = $(this).val();
    $('.textarea_box .text_count span').html(content.length);
    if (content.length > 500){
      alert("최대 200자까지 입력 가능합니다.");
      $(this).val(content.substring(0, 500));
      $('.textarea_box .text_count span').html(200);
    }
});


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



// benefit-tab - 탭 선택시 해당정보 노출 
$(document).ready(function () {

    $('.benefit_tab1').addClass('is-active'); // 초깃값 설정
    $('.tab_content1').addClass('is-active');

    $('.tab_top .benefit_tab_list').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.tab_top .benefit_tab_list').removeClass('is-active');        
        $('.tab_content').removeClass('is-active');

        $(this).addClass('is-active');
        $("#" + tab_id).addClass('is-active');
    })

})



// 혜택소개 - 멤버쉽 카드 슬라이드 
var swiper = new Swiper(".flex_membership_swiper", {
  });




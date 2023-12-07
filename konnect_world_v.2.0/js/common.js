// more_btn
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


  

gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
  trigger: ".content_2", // 감시할 요소
  start: "80% center",   // 감시가 시작될 위치
  end: "100% center",  // 감시가 종료될 위치
  markers: false,         // 디버깅을 위한 마커 표시
  scub: 3,
  onEnter: () => {
    // 스크롤이 해당 영역에 들어왔을 때의 동작
    gsap.to(".content_2", {
      borderRadius:"20px",
      width: "calc(100% - 8%)", 
      ease: "power2.out",
    });        
  },
  onLeaveBack: () => {
    // 스크롤이 해당 영역을 빠져나갈 때의  동작
    gsap.to(".content_2", {
      borderRadius: "0", // 다시 사각형 모양으로 설정
      width:'100%',
      ease: "power2.inOut",
    });
  },
});




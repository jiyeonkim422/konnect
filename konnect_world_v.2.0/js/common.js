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


// scrolltrigger.js -1
gsap.set(".content_2", { borderRadius: "0", width: "100%" });

gsap.to(".content_2", {
  borderRadius: "30px",
  width: "calc(100% - 8%)", 
  ease: "none",
  scrollTrigger: {
    trigger: ".content_2",
    start: "80% 50%",  // Scroll animation starts when the top of the trigger hits the middle of the viewport
    end: "130% 20%",  // Scroll animation ends when the bottom of the trigger hits the 20% mark of the viewport
    scrub: 1
  },
});


// scrolltrigger.js -1 (다른방법)
// gsap.registerPlugin(ScrollTrigger);

//   ScrollTrigger.create({
//   trigger: ".content_2", // 감시할 요
//   start: "90% center",   // 감시가 시작될 위치
//   end: "+=4000",  // 감시가 종료될 위치
//   markers: false,         // 디버깅을 위한 마커 표시
//   scub: 1,
//   onEnter: () => {
//     // 스크롤이 해당 영역에 들어왔을 때의 동작
//     gsap.to(".content_2", {
//       borderRadius:"20px",
//       // width: "calc(100% - 8%)", 
//       ease: "ease-in-out",
//     });        
//   },
//   onLeaveBack: () => {
//     // 스크롤이 해당 영역을 빠져나갈 때의  동작
//     gsap.to(".content_2", {
//       borderRadius: "0", // 다시 사각형 모양으로 설정
//       // width:'100%',
//       ease: "ease-in-out",
//     });
//   },      
// });

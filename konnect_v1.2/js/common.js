//롤링 공지사항
//slider-notice.js

$(document).ready(function(){
	var height =  $(".notice").height(); //공지사항의 높이값을 구해주고~~
	var num = $(".rolling li").length; // 공지사항의 개수를 알아볼수 있어요! length라는 것으로!
	var max = height * num; //그렇다면 총 높이를 알 수 있겠죠 ?
	var move = 0; //초기값을 설정해줍니다.
	function noticeRolling(){
		move += height; //여기에서 += 이라는 것은 move = move + height 값이라는 뜻을 줄인 거에요.
		$(".rolling").animate({"top":-move},600,function(){ // animate를 통해서 부드럽게 top값을 올려줄거에요.
			if( move >= max ){ //if문을 통해 최대값보다 top값을 많이 올렸다면 다시 !
				$(this).css("top",0); //0으로 돌려주고~
				move = 0; //초기값도 다시 0으로!
			};
		});
	};
	noticeRollingOff = setInterval(noticeRolling,3000); //자동롤링답게 setInterval를 사용해서 1000 = 1초마다 함수 실행!!
	$(".rolling").append($(".rolling li").first().clone()); //올리다보면 마지막이 안보여서 clone을 통해 첫번째li 복사!

	$(".rolling_stop").click(function(){
		clearInterval(noticeRollingOff); //stop을 누르면 clearInterval을 통해 자동롤링을 해제합니다.
	});
	$(".rolling_start").click(function(){
		noticeRollingOff = setInterval(noticeRolling,1000); //다시 start를 누르면 자동롤링이 실행하도록 !!
	});
});


 //history back - 페이지 뒤로가기
 function goBack(){
    window.history.back();
}

// 페이지 앞으로가기
function goForward(){
    window.history.forward();
}


//메인 이미지 슬라이드
var swiper = new Swiper(".main_swiper", {
    // spaceBetween: 30,
    pagination: {
        el: ".main_pagination",
        clickable: true,
    },
});


//메인 - 멤버쉽 카드 슬라이드 
var swiper = new Swiper(".membership_swiper", {
	spaceBetween: 30,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
});


//메인 - 혜택 슬라이드
  var swiper = new Swiper(".benefit_swiper", {
    spaceBetween: 0,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //메인 -  이벤트 배너 슬라이드
  var swiper = new Swiper(".event_banner_swiper", {
	      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
  });

  //리뷰 슬라이드
  var swiper = new Swiper(".review_swiper", {
    spaceBetween: 30,
    loop:true,
  });

  //브랜드 상세 - 이미지 풀사이즈 슬라이드
  var swiper = new Swiper(".brand_img_swiper", {
    pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});









    // 초깃값 설정
    $('.filter-tab1').addClass('is-active');
    // $('#filter-tab1').addClass('is-active').find('.section--book-list').addClass('is-active')
    // .siblings('.section--best-select').find('.btn--layout-list').addClass('is-active');

    // click 이벤트마다 리스트형으로 초기화
    $('.tab_category_btn').on('click', function() {
        let tab_id = $(this).attr('data-tab');

        $(this).addClass('is-active').parent('li').siblings('li').find('button').removeClass('is-active');
        $("#" + tab_id).siblings('.btn--layout').removeClass('is-active');
        
        $("#" + tab_id).addClass('is-active')
        .find('.section--book-list').addClass('is-active')
        .parents('.filter-tab_content').find('.section--best-select').show()
        .find('.btn--layout-list').addClass('is-active')
        .parents('.filter-tab_content').siblings().find('.section--book-display').removeClass('is-active')
        .siblings('.section--best-select').hide()
        .find('.btn--layout').removeClass('is-active')
        ;
    });


    //filter-tab(탭 1개) - 상단 필터 탭 클릭시 해당내용 노출
    $('.tab_category_btn').on('click', function() {
        $('.filter-tab_content').removeClass('is-active');
        $('.tab_category_btn').removeClass('is-active');
        $(this).addClass('is-active');

        let tab_id = $(this).attr('data-tab');
        console.log(tab_id);

        $("#" + tab_id).addClass('is-active');

    });

	//filter-tab(탭 1개) - 필터탭 여러개 사용시 겹침방지용
	$('.control-category__btn_ver2').on('click', function() {
		$('.filter-tab_content_ver2').removeClass('is-active');
		$('.control-category__btn').removeClass('is-active');
		$(this).addClass('is-active');

		let tab_id = $(this).attr('data-tab');
		console.log(tab_id);

		$("#" + tab_id).addClass('is-active');

	});



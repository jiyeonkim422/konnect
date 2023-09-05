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
    loop:true,
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

    //공통 - 카운트다운 배너
    var swiper = new Swiper(".countdown_swiper", {
      pagination: {
      el: ".swiper-pagination",
      type: "fraction",
        },
    });

 

    //공통 - 브랜드카드 슬라이드
    var swiper = new Swiper(".brandcard_swiper", {
      spaceBetween: 30,
      loop:true,
    });


//메인 - 혜택 슬라이드
var swiper = new Swiper(".card_benefit_swiper", {
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



    ///// tab_btn0.js (탭 기본)
    // 초깃값 설정
    $('.filter-tab1').addClass('is-active');
    $('#filter-tab1').addClass('is-active').find('.tab_item0').addClass('is-active')

    // click 이벤트마다 리스트형으로 초기화
    $('.tab_btn0').on('click', function() {
        let tab_id = $(this).attr('data-tab');

        $(this).addClass('is-active').parent('li').siblings('li').find('button').removeClass('is-active');
        $("#" + tab_id).siblings('.btn--layout').removeClass('is-active');
        
    });
    //tab_btn1 (탭 1개) - 상단 필터 탭 클릭시 해당내용 노출
    $('.tab_btn0').on('click', function() {
        $('.filter-tab_content').removeClass('is-active');
        $('.tab_btn0').removeClass('is-active');
        $(this).addClass('is-active');

        let tab_id = $(this).attr('data-tab');
        console.log(tab_id);

        $("#" + tab_id).addClass('is-active');

    });


    ///// tab_btn1.js
    // 초깃값 설정
    $('.filter-tab1').addClass('is-active');
    $('#filter-tab1').addClass('is-active').find('.tab_item1').addClass('is-active')

    // click 이벤트마다 리스트형으로 초기화
    $('.tab_btn1').on('click', function() {
        let tab_id = $(this).attr('data-tab');

        $(this).addClass('is-active').parent('li').siblings('li').find('button').removeClass('is-active');
        $("#" + tab_id).siblings('.btn--layout').removeClass('is-active');
        
    });
    //tab_btn1 (탭 1개) - 상단 필터 탭 클릭시 해당내용 노출
    $('.tab_btn1').on('click', function() {
        $('.card_benefit_list').removeClass('is-active');
        $('.tab_btn1').removeClass('is-active');
        $(this).addClass('is-active');

        let tab_id = $(this).attr('data-tab');
        console.log(tab_id);

        $("#" + tab_id).addClass('is-active');

    });


    ///// tab_btn2.js - 두번째
    // 초깃값 설정
    $('.filter-tab_voucher1').addClass('is-active');
    $('#filter-tab_voucher1').addClass('is-active').find('.tab_item2').addClass('is-active')

    // click 이벤트마다 리스트형으로 초기화
    $('.tab_btn2').on('click', function() {
        let tab_id = $(this).attr('data-tab');

        $(this).addClass('is-active').parent('li').siblings('li').find('button').removeClass('is-active');
        $("#" + tab_id).siblings('.btn--layout').removeClass('is-active');
        
    });
    //tab_btn2 (탭 1개) - 상단 필터 탭 클릭시 해당내용 노출
    $('.tab_btn2').on('click', function() {
        $('.filter-tab_voucher').removeClass('is-active');
        $('.tab_btn2').removeClass('is-active');
        $(this).addClass('is-active');

        let tab_id = $(this).attr('data-tab');
        console.log(tab_id);

        $("#" + tab_id).addClass('is-active');

    });





	//bs_tab_category_btn(탭 1개) - 바텀시트 내부 tab
	$('.bs_tab_category_btn').on('click', function() {
		$('.filter-tab_content_ver2').removeClass('is-active');
		$('.bs_tab_category_btn').removeClass('is-active');
		$(this).addClass('is-active');

		let tab_id = $(this).attr('data-tab');
		console.log(tab_id);

		$("#" + tab_id).addClass('is-active');

	});


// line_tab - 탭 선택시 해당정보 노출 
$(document).ready(function () {

    $('.line_tab1').addClass('is-active'); // 초깃값 설정
    $('.line_tab_content1').addClass('is-active');

    $('.tab_top .line_tab').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.tab_top .line_tab').removeClass('is-active');
        $('.line_tab_content').removeClass('is-active');

        $(this).addClass('is-active');
        $("#" + tab_id).addClass('is-active');
    })

})





// 카운트다운 - 1
var countDownDate = new Date("2023-09-30 00:00:00").getTime();

function timePart(val, text, color = "white") {
    return `<h1 class="timer" style="color:${color};">${val}<div>${text}</div></h1>`
}

var x = setInterval(function () {


    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let res = timePart(days, 'Day') + timePart(hours, '') + timePart(minutes, '');// + timePart(seconds, 'Seconds', 'red');
    document.getElementById("countdown_1").innerHTML = res

    console.log(distance);

    if (distance < 0) {
        clearInterval(x);

        let res = timePart(0, 'Day') + timePart(0, '') + timePart(0, ''); // + timePart(0, 'Seconds', 'red');
        document.getElementById("countdown_1").innerHTML = res

        //document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

// 카운트다운 - 2
var countDownDate2 = new Date("2023-10-31 00:00:00").getTime();

function timePart(val, text, color = "white") {
    return `<h1 class="timer" style="color:${color};">${val}<div>${text}</div></h1>`
}

var x = setInterval(function () {


    var now = new Date().getTime();

    var distance = countDownDate2 - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let res = timePart(days, 'Day') + timePart(hours, '') + timePart(minutes, '');// + timePart(seconds, 'Seconds', 'red');
    document.getElementById("countdown_2").innerHTML = res

    console.log(distance);

    if (distance < 0) {
        clearInterval(x);

        let res = timePart(0, 'Day') + timePart(0, '') + timePart(0, ''); // + timePart(0, 'Seconds', 'red');
        document.getElementById("countdown_2").innerHTML = res

        //document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

// 카운트다운 - 3
var countDownDate3 = new Date("2023-11-31 00:00:00").getTime();

function timePart(val, text, color = "white") {
    return `<h1 class="timer" style="color:${color};">${val}<div>${text}</div></h1>`
}

var x = setInterval(function () {


    var now = new Date().getTime();

    var distance = countDownDate3 - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let res = timePart(days, 'Day') + timePart(hours, '') + timePart(minutes, '');// + timePart(seconds, 'Seconds', 'red');
    document.getElementById("countdown_3").innerHTML = res

    console.log(distance);

    if (distance < 0) {
        clearInterval(x);

        let res = timePart(0, 'Day') + timePart(0, '') + timePart(0, ''); // + timePart(0, 'Seconds', 'red');
        document.getElementById("countdown_3").innerHTML = res

        //document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);






  //modal(bottom sheet & action sheet) show / 모달창(바텀시트 & 액션시트)

    // var modals = document.getElementsByClassName("bottom_sheet_box");
    // var btns = document.getElementsByClassName("bottom_sheet_show");
    // var spanes = document.getElementsByClassName("bottom_sheet_close");
    // var funcs = [];
    
    // function Modal(num) {
    // return function() {
    //     btns[num].onclick =  function() {
    //         modals[num].style.display = "block";
    //         console.log(num);
    //     };
    
    //     spanes[num].onclick = function() {
    //         modals[num].style.display = "none";
    //     };
    // };
    // }
    
    // for(var i = 0; i < btns.length; i++) {
    //     funcs[i] = Modal(i);
    // }
    
    // for(var j = 0; j < btns.length; j++) {
    //     funcs[j]();
    // }
    
    // window.onclick = function(event) {
    //     if (event.target.className == "modal_box") {
    //         event.target.style.display = "none";
    //     }
    // };



// 바텀시트
const showModalBtn = document.querySelector(".show_modal");
const bottomSheet = document.querySelector(".bottomsheet");
const sheetOverlay = bottomSheet.querySelector(".sheet-overlay");
const sheetContent = bottomSheet.querySelector(".bs_box");
const dragIcon = bottomSheet.querySelector(".drag-icon");
var spanes = document.getElementsByClassName("close_modal");


let isDragging = false, startY, startHeight;

// Show the bottom sheet, hide body vertical scrollbar, and call updateSheetHeight
const showBottomSheet = () => {
    bottomSheet.classList.add("show");
    document.body.style.overflowY = "hidden";
    updateSheetHeight(80);
}

const updateSheetHeight = (height) => {
    sheetContent.style.height = `${height}vh`; //updates the height of the sheet content
    // Toggles the fullscreen class to bottomSheet if the height is equal to 100
    bottomSheet.classList.toggle("fullscreen", height === 100);
}

// Hide the bottom sheet and show body vertical scrollbar
const hideBottomSheet = () => {
    bottomSheet.classList.remove("show");
    document.body.style.overflowY = "auto";
}                                    

// Sets initial drag position, sheetContent height and add dragging class to the bottom sheet
const dragStart = (e) => {
    isDragging = true;
    startY = e.pageY || e.touches?.[0].pageY;
    startHeight = parseInt(sheetContent.style.height);
    bottomSheet.classList.add("dragging");
}

// Calculates the new height for the sheet content and call the updateSheetHeight function
const dragging = (e) => {
    if(!isDragging) return;
    const delta = startY - (e.pageY || e.touches?.[0].pageY);
    const newHeight = startHeight + delta / window.innerHeight * 100;
    updateSheetHeight(newHeight);
}

// Determines whether to hide, set to fullscreen, or set to default 
// height based on the current height of the sheet content
const dragStop = () => {
    isDragging = false;
    bottomSheet.classList.remove("dragging");
    const sheetHeight = parseInt(sheetContent.style.height);
    sheetHeight < 50 ? hideBottomSheet() : updateSheetHeight(80);
    // sheetHeight < 25 ? hideBottomSheet() : sheetHeight > 70 ? updateSheetHeight(70) : hideBottomSheet();
}

dragIcon.addEventListener("mousedown", dragStart);  
document.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

dragIcon.addEventListener("touchstart", dragStart);
document.addEventListener("touchmove", dragging);
document.addEventListener("touchend", dragStop);

sheetOverlay.addEventListener("click", hideBottomSheet);
showModalBtn.addEventListener("click", showBottomSheet);
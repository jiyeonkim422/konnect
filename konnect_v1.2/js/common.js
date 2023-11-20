//롤링 공지사항
//slider-notice.js


$(document).ready(function(){
	var height =  $(".notice").height(); 
	var num = $(".rolling li").length; 
	var max = height * num;
	var move = 0; 
	function noticeRolling(){
		move += height; 
		$(".rolling").animate({"top":-move},600,function(){ 
			if( move >= max ){ 
				$(this).css("top",0); 
				move = 0; 
			};
		});
	};
	noticeRollingOff = setInterval(noticeRolling,3000); 
	$(".rolling").append($(".rolling li").first().clone());

	$(".rolling_stop").click(function(){
		clearInterval(noticeRollingOff); 
	});
	$(".rolling_start").click(function(){
		noticeRollingOff = setInterval(noticeRolling,1000); 
	});
});




// faq list (열림 닫힘)
$(function () {
  $(".faq_list_box").click(function () {

    var currentFaqListDetail = $(this).find(".faq_list_detail");

    $(".faq_list_detail").not(currentFaqListDetail).slideUp(0);
    currentFaqListDetail.slideToggle(0);
    $(".faq_list_box").not(this).find(".ic_arrow_m_thin").removeClass('on');
    $(this).find(".ic_arrow_m_thin").toggleClass('on').siblings().removeClass('on');
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
    spaceBetween: 30,
    pagination: {
        el: ".main_pagination",
        clickable: true,
    },
});


//메인 - 멤버쉽 카드 슬라이드 
var swiper = new Swiper(".membership_swiper", {
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
});




//메인 - 혜택 슬라이드
  var swiper = new Swiper(".benefit_swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //메인 -  이벤트 배너 슬라이드
  var swiper = new Swiper(".event_banner_swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop:true,
	    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
  });

  //리뷰 슬라이드
  var swiper = new Swiper(".review_swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
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
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
      el: ".swiper-pagination",
      type: "fraction",
        },
    });

 

    //공통 - 브랜드카드 슬라이드
    var swiper = new Swiper(".brandcard_swiper", {
      slidesPerView: "auto",
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


    // 나의멤버십 - 보유 멤버쉽 카드 슬라이드 
    var swiper = new Swiper(".my_membership_swiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // 나의멤버십 - 보유 티켓 슬라이드
    var swiper = new Swiper(".ticket_swiper", {
      spaceBetween: 20,
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

        //tab_btn1 (탭 1개) - 상단 필터 탭 클릭시 해당내용 노출
        $('.tab_btn1').on('click', function() {
            $('.nft_tab_list').removeClass('is-active');
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



// bottomsheet line_tab2 - 탭 선택시 해당정보 노출 
$(document).ready(function () {

  $('.line_tab3').addClass('is-active'); // 초깃값 설정
  $('.bs_tab_content1').addClass('is-active');

  $('.tab_top .line_tab').click(function () {
      var tab_id = $(this).attr('data-tab');

      $('.tab_top .line_tab').removeClass('is-active');
      $('.bs_tab_content').removeClass('is-active');

      $(this).addClass('is-active');
      $("#" + tab_id).addClass('is-active');
  })

})



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
    updateSheetHeight();
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
    sheetHeight < 50 ? hideBottomSheet() : updateSheetHeight();
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



//레이어팝업(모달)
$('.show_layerpopup').on('click', function(e) {
    e.preventDefault();
    var el = $($(this).attr('href'));
    if (!el.hasClass('open')) {
      el.addClass('open');
    } else {
      el.removeClass('open');
    }
  });
  
  $('.close_layerpopup').on('click', function(e) {
    $(this).closest('.layerpopup').removeClass('open');
  });







  


//레이어팝업 두개일때
let currentModal = null;

// 모달 열기 함수
function openModal(modalId) {
    if (currentModal) {
        currentModal.style.display = 'none';
    }
    currentModal = document.getElementById(modalId);
    currentModal.style.display = 'block';
}

// 모달1 열기
document.getElementById('openModal1').addEventListener('click', function() {
    openModal('modal1');
});

// 모달1 취소 버튼 클릭 시
document.getElementById('cancel1').addEventListener('click', function() {
    currentModal.style.display = 'none';
});

// 모달1 뒤로 가기 버튼 클릭 시
document.getElementById('goBack1').addEventListener('click', function() {
    document.getElementById('modal1').style.display = 'none';
});

// 모달1 확인 버튼 클릭 시
document.getElementById('confirm1').addEventListener('click', function() {
    openModal('modal2');
});

// 모달2 취소 버튼 클릭 시
document.getElementById('cancel2').addEventListener('click', function() {
    currentModal.style.display = 'none';
});

// 모달2 뒤로 가기 버튼 클릭 시
document.getElementById('goBack2').addEventListener('click', function() {
    currentModal.style.display = 'none';
    openModal('modal1');
});







//alert - alert.js
const modal = document.getElementById("modal_wrap")//
const btnModal = document.getElementById("modal_on_btn")
    btnModal.addEventListener("click", e => {
        modal.style.display = "flex"
    })

const closeBtn = modal.querySelector(".modal_close")
    closeBtn.addEventListener("click", e => {
        modal.style.display = "none"                  
    })

modal.addEventListener("click", e => {
    const evTarget = e.target
    if(evTarget.classList.contains("modal_bg")) {
        modal.style.display = "none"
    }
})

window.addEventListener("keyup", e => {
    if(modal.style.display === "flex" && e.key === "Escape") {
        modal.style.display = "none"
    }
})







   
//input_option.js
// $(function() {
//     $(".default_option").click(function(){
//         $(this).parent().toggleClass("active");
//     });

//     $(".select_option").each(function() {
//         var $selectOption = $(this);
//         $selectOption.find(".select_ul li .option").click(function(){
//             var currentele = $(this).html();
//             $selectOption.find(".default_option li .option").html(currentele);
//             $selectOption.removeClass("active");
//         });
//     });
// });




// 토스트 메세지.js
 function fillWidth(elem, timer, limit) {
	  // if (!timer) { timer = 3000; }	
    // if (!limit) { limit = 100; }
    var width = 1;
    var id = setInterval(frame, timer / 100);
      function frame() {
      if (width >= limit) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
      }
    }
  };

  function toast(msg, timer) {
    if (!timer) { timer = 1000; }
    var $elem = $("<div class='toastWrap'><span class='toast'>" + msg + "<b></b><div class='timerWrap'><div class='timer'></div></div></span></div>");
    $("#toast").append($elem); //top = prepend, bottom = append
    $elem.slideToggle(100, function() {
      $('.timerWrap', this).first().outerWidth($elem.find('.toast').first().outerWidth() - 10);
      if (!isNaN(timer)) {
        fillWidth($elem.find('.timer').first()[0], timer);
        setTimeout(function() {
          $elem.fadeOut(function() {
            $(this).remove();
          });
        }, timer);			
      }
    });
  }

  $("#toast").on("click", "b", function() {
    $(this).closest('.toastWrap').remove();
  })







//수량 옵션
function count(type)  {
    // 결과를 표시할 element
    const resultElement = document.getElementById('quantity_value');
    
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    
    // 더하기/빼기
    if(type === 'plus' && number < 5) {
      number = parseInt(number) + 1;
    }else if(type === 'minus' && number > 1)  {
      number = parseInt(number) - 1;
    }
    
    // 결과 출력
    resultElement.innerText = number;
      // 만약 number가 5일 때 알림창 표시
    if (number >= 5) {          
        alert('최대 n개까지만 ');
    }
  }




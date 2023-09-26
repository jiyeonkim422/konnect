//nav_link_is-active.js
$(document).ready(function() {    

    $(document).ready(function() { 
        $('.nav_link').click(function(){

            if($(this).hasClass('is-active')){
                $('.nav_link').removeClass('is-active');
            } else {
                $('.nav_link').removeClass('is-active');
                $(this).addClass('is-active');
            }
        });
    });
});

     


//datepicker.js
$(function() {
    //input을 datepicker로 선언
    $("#datepicker1,#datepicker2").datepicker({
        dateFormat: 'yy-mm-dd' //달력 날짜 형태
        ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
        ,showMonthAfterYear:true // 월- 년 순서가아닌 년도 - 월 순서
        ,changeYear: true //option값 년 선택 가능
        ,changeMonth: true //option값  월 선택 가능                
        ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
        ,buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
        ,buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함
        ,buttonText: "선택" //버튼 호버 텍스트              
        ,yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
        ,monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 텍스트
        ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip
        ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 텍스트
        ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 Tooltip
        ,minDate: "-5Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
        ,maxDate: "+5y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)  
    });                    
    
    //초기값을 오늘 날짜로 설정해줘야 합니다.
    $('#datepicker1,#datepicker2').datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)            



    // $('#datepicker1').datepicker();
    // $('#datepicker1').datepicker("option", "maxDate", $("#datepicker2").val());
    // $('#datepicker1').datepicker("option", "onClose", function ( selectedDate ) {
    //     $("#datepicker2").datepicker( "option", "minDate", selectedDate );
    // });

    $('#datepicker2').datepicker();
    $('#datepicker2').datepicker("option", "minDate", $("#datepicker1").val());
    $('#datepicker2').datepicker("option", "onClose", function ( selectedDate ) {
        $("#datepicker1").datepicker( "option", "maxDate", selectedDate );
    });



});




 
//input_option.js
$(function() {
    $(".default_option").click(function(){
        $(this).parent().toggleClass("active");
    });

    $(".select_option").each(function() {
        var $selectOption = $(this);
        $selectOption.find(".select_ul li").click(function(){
            var currentele = $(this).html();
            $selectOption.find(".default_option li").html(currentele);
            $selectOption.removeClass("active");
        });
    });
});






//check_box - all select.js (체크박스 전체선택))
function selectAll(selectAll)  {
    const checkboxes 
       = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach((checkbox) => {
      checkbox.checked = selectAll.checked
    })
  }



    ///// tab_btn.js (탭 기본)
    // 초깃값 설정
    $('.filter-tab1').addClass('is-active');
    $('#filter-tab1').addClass('is-active').find('.tab_item').addClass('is-active')

    // click 이벤트마다 리스트형으로 초기화
    $('.tab_btn').on('click', function() {
        let tab_id = $(this).attr('data-tab');

        $(this).addClass('is-active').parent('li').siblings('li').find('button').removeClass('is-active');
        $("#" + tab_id).siblings('.btn--layout').removeClass('is-active');
        
    });
    //tab_btn1 (탭 1개) - 상단 필터 탭 클릭시 해당내용 노출
    $('.tab_btn').on('click', function() {
        $('.filter-tab_content').removeClass('is-active');
        $('.tab_btn').removeClass('is-active');
        $(this).addClass('is-active');

        let tab_id = $(this).attr('data-tab');
        console.log(tab_id);

        $("#" + tab_id).addClass('is-active');

    });










//팝업 - popup.js
  function MM_openBrWindow(theURL,winName,features) { 
    window.open(theURL,winName,features);
}
//이미지 미리보기
  function ViewImage(){ 
    window.open("../popup/popup_img_preview.html","image_preview","width=500,height=450,scrollbars=yes, status=no, resizable=yes, titlebar=no");
}	






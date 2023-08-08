/** side nav **/


//accordion.js (자동 열림 닫힘)
$(document).ready(function() {    
    var accordion_tab = $('.nav_item > .nav_link'), accordion_content = $('.sub_nav_list');
        //accordion p tag click
        accordion_tab.on('click', function(e){
            //tab link 비활성화
            e.preventDefault();
            //활성화 된 class 제거
            accordion_tab.removeClass('is-active');
            //accordion div 내용 숨기기
            accordion_content.slideUp('normal');
            //tab이 숨겨져 있으면 활성화 시키고 div 내용 펼치기
            if($(this).next().is(':hidden') == true) {
                $(this).addClass('is-active');
                $(this).next().slideDown('normal');
             } 			  
     });


    
        
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
        $("#datepicker1,#datepicker2").datepicker({
            //옵션들 생략//
            //옵션들 생략//
        });                           
    });
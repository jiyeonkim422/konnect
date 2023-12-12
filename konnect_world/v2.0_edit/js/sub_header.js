$(function () {
    var fixScroll = 0;
    $(window).scroll(function (event) {
        var scroll = $(this).scrollTop();
        if (scroll > 320) {
            //스크롤 높이 설정
            $(".detail-tab__wrap").addClass("is-fixed");
        } else {
            $(".detail-tab__wrap").removeClass("is-fixed");
        }
        fixScroll = scroll;
    });
});

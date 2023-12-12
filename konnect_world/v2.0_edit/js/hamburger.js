document.addEventListener("DOMContentLoaded", function () {
    document
        .querySelector("#header_cate")
        .addEventListener("click", function (e) {
            if (document.querySelector(".hamburger_wrap").classList.contains("on")) {
                //메뉴 slideOut
                document
                    .querySelector(".hamburger_wrap")
                    .classList
                    .remove("on");
                //slideOut시 menuBtn의 img src를 menu icon으로 변경
                document
                    .getElementById("menuBtn")
                    .src = "./menuBtn.png";
            } else {
                //메뉴 slideIn
                document
                    .querySelector(".hamburger_wrap")
                    .classList
                    .add("on");
                //slideIn시 menuBtn의 img src를 cross icon으로 변경
                document
                    .getElementById("menuBtn")
                    .src = "./cross.png";
            }
        });
});
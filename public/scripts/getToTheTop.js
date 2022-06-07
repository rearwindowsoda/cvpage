const getToTheTopButton = document.getElementById("getToTheTopButton");
window.onscroll = function () {

    if (document.body.scrollTop >= 1200 || document.documentElement.scrollTop > 1200) {
        getToTheTopButton.style.display = "block";
    } else {
        getToTheTopButton.style.display = "none";

    };
}


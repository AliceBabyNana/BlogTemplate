onload = () => {
    /*article details content img responsive*/
    $("#Alice-blog-article-content img").SetImgResponsive();
};


//set img width height responsive
$.fn.SetImgResponsive = function () {
    $(this).addClass('img-responsive');
};



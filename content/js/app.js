onload = () => {
    /*article details content img responsive*/
    $("#Alice-blog-article-content img").SetImgResponsive();
    /*set #category*/
    $("#showCategory").click(() => {
        if ($("#category").attr("Jhide") == "true") {
            $("#showCategory").removeClass('bottom-radius');
            $("#category").removeClass('hidden-xs');
            $("#category").attr("Jhide", "false");
        } else {
            $('#showCategory').addClass('bottom-radius');
            $("#category").addClass('hidden-xs');
            $("#category").attr("Jhide", "true");
        }
    });

};


//set img width height responsive
$.fn.SetImgResponsive = function () {
    $(this).addClass('img-responsive');
};





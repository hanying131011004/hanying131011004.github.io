$(".person").each(function (index,ele) {
    $(ele).on("mouseover",function(){
        $(this).find("ul").css({
            bottom:"-263px",
            transition:"all 0.6s"
        });
    });
    $(ele).on("mouseout",function(){
        $(this).find("ul").css({
            bottom:"0",
            transition:"all 0.6s"
        });
    });
})



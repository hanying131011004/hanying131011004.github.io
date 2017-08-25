//About Me
{
    window.addEventListener("scroll",function () {
        let obj=$("body").scrollTop();
        //console.log(obj);
        let st =$(".aboutme").offset().top;
        //console.log(st);
        let personw=$(".person").width();
        let containw=$(".container").width();
        //console.log(containw);
        if(obj>=st){
            pw=containw/2-personw/2
            $(".person").animate({marginLeft:pw,opacity:"1"});
            $("#intro2").animate({marginLeft:"0",opacity:"1"});
            $("#intro1").animate({marginRight:"0",opacity:"1"})
        }
    })
}

//My Skill
{
    window.addEventListener("scroll",function () {
        let obj=$("body").scrollTop();
        //console.log(obj);
        let st =$(".myskill").offset().top;
        //console.log(st);
        let personw=$(".person").width();
        let containw=$(".container").width();
        //console.log(containw);
        if(obj>=st){
            $(".sk1").animate({marginLeft:"0",opacity:"1"});
            $(".sk2").animate({marginLeft:"0",opacity:"1"});
            $(".sk3").animate({marginRight:"0",opacity:"1"});
            $(".sk4").animate({marginRight:"0",opacity:"1"});
        }
    })
}

//My Portfolio
{
    $(".item").each(function () {
        $(this).on("mouseover",function(){
            $(this).find("a").animate({marginTop:"-50"},800);

        })
        $(this).on("mouseout",function(){
            $(this).find("a").animate({marginTop:"0"},800);
        })
    })
}
























var provinces = [];
var cities = [];
var data =[];
$.ajax({
    url:"http://api.jisuapi.com/weather/city?appkey=d4576cfda3212bab",
    dataType:"jsonp",
    success:function (r) {
        console.log(r);
        data=r.result;
        provinces=$.grep(r.result,function (value,index) {
            if(value.parentid==0){
                return true;
            }
        });
        $.each(provinces,function (index, value) {
            $("<option>").html(value.city).val(value.cityid).appendTo("#province")
        });
        $("#province").on("change blur",function () {
            var id=$(this).val();
            cities=$.grep(data,function (value) {
                if(value.parentid===id){
                    return true;
                }
            });
            $("#city").empty();
            $.each(cities,function (index,value) {
                $("<option>").html(value.city).val(value.city).appendTo("#city");
            })
        });
    }
});

$("#submit").click(function () {
    $(".infor").css("display","block");
});

$("#city").on("change blur",function () {
    var city=$(this).val();
    $.ajax({
        url:"http://api.jisuapi.com/weather/query?appkey=d4576cfda3212bab&city="+city,
        dataType:"jsonp",
        success:function (r) {
            console.log(r);
            var result = r.result;
            var dayly=result.daily;
            $(".date").html(result.date);
            $(".week").html(result.week);
            $(".city").html(result.city);
            $(".weatherimg img").attr("src","weatherimg/"+result.img+".png");
            $(".temperature").html(result.hourly[0].temp+"")
            $(".temprange").html(result.templow+"&nbsp;~&nbsp;"+result.temphigh);
            $(".weather").html(result.weather);
            $(".wind").html(result.winddirect+"&nbsp;&nbsp;&nbsp;"+result.windpower);
            var str="";
            $.each(dayly,function (index,value) {
                str+=`<li>
                <div class="pweek">${value.week}</div>
                <div class="pdate">${value.date}</div>
                <div class="pimg"><img src="weatherimg/${value.day.img}.png" alt=""></div>
                <div class="pweather">${value.day.weather}</div>
                <div class="pwind">${value.day.winddirect}&nbsp;&nbsp;${value.day.windpower}</div>
            </li>`
            });
            $('.future').html(str);
        }
    });
})

/**
 * Created by 顾 磊 on 2016/12/4.
 */
$(function () {
    

    setInterval(function () {
        
        
        $("#sun img").css("position", "absolute").animate({"left": "+=100", "opacity": 1},3000);
        $("#sun img").css("position", "absolute").animate({"left": "+=-100", "opacity": 0},3000);
        $("#dian").fadeOut(500);
        $("#dian").fadeIn(500);
        $("#bigDian").fadeOut(1000);
        $("#bigDian").fadeIn(1000);
        $("#moons").animate({"width": "200px", "height": "200px"}, 500);
        $("#moons").animate({"width": "100px", "height": "100px"}, 1000);
        $("#moons").animate({"width": "50px", "height": "50px"}, 1500);
        $("#moons").animate({
            "width": "0",
            "height": "0"
        }, 2000).css("position", "absolute").animate({"right": "+=-600", "opacity": 1}, 3000);
        $("#moons").animate({
            "width": "200px",
            "height": "200px"
        }, 500).css("position", "absolute").animate({"right": "+=600", "opacity": 1}, 3000);


    }, 2000);
    setInterval(function () {
        $("#earth").animate({
            "width": "200px",
            "height": "200px"
        }, 500).css("position", "absolute").animate({"left": "+=-600", "opacity": 1}, 3000);
        $("#earth").animate({"width": "100px", "height": "100px"}, 1000);
        $("earth").animate({"width": "50px", "height": "50px"}, 1500);
        $("earth").animate({"width": "0", "height": "0"}, 2000);
        $("#earth").animate({
            "width": "0",
            "height": "0"
        }, 500).css("position", "absolute").animate({"left": "+=600", "opacity": 1}, 0);


    }, 3000);

    $("#send").on("click", function () {
        $(".indoor li").html("");
        $(".text p").html("");
        $(".list li h4").html("");
        $(".fot p").html("");
        $(".position").html("");
        $(".text h3").html("");
        $(".list li span").html("");
        $(".list li i").html("");
        $("#wenduji").html("");
        $(".aa").show();

        $("#sun").find('img').css("opacity", "1");
        $(".indoor li p").show();
        $("#diwenduji").fadeToggle();
        var city= $("#message").val();


        $(city).appendTo("#message");
        $("#message").val("");




        function getIcon(weather) {
            var icon = "地球.png";

            var icons = {
                "晴": "bigsun.png",
                "多云": "大太阳.png",
                "阴": "阴天.png",
                "雪": "雪.png",
                "雨": "雨.png",
                "霾": "雾霾.png",
                "雾": "雾天.png"
            };
            return icons[weather];

        }

        function getIcon1(weather1) {
            var icon = "地球.png";

            var icons = {
                "晴": "小sun.png",
                "多云": "小白天多云.png",
                "阴": "小阴天.png",
                "雪": "小雪.png",
                "雨": "小雨.png",
                "霾": "小雾霾.png",
                "雾": "小雾天.png"
            };
            return icons[weather1];

        }
        var url = "http://v.juhe.cn/weather/index?cityname="+city+'&key=7ddb387d56633abe42176a7637d05cf5';

   
        $.getJSON(url,function (data) {

               $(".position").append(data["result"][1].today.city);
             $(".text h3").append("今日:"+data["HeWeather data service 3.0"][0].now.cond.txt);

             var img = getIcon((data["HeWeather data service 3.0"][0].now.cond.txt));//当日图片


             $("#sun").find("img").attr("src", "image/" + img);
             $(".text p:first").append("当前温度:"+data["HeWeather data service 3.0"][0].now.tmp + "C°");
             $(".text p:nth-child(3)").append("PM2.5指数:"+data["HeWeather data service 3.0"][0].aqi.city.pm25);
             $(".text p:nth-child(4)").append("相对湿度:"+data["HeWeather data service 3.0"][0].now.hum + "%");
             $(".text p:nth-child(5)").append("空气质量:"+data["HeWeather data service 3.0"][0].aqi.city.qlty);
             $(".text p:nth-child(6)").append("今日最高温度:"+data["HeWeather data service 3.0"][0]["daily_forecast"][0].tmp.max + "C°" + '~' + data["HeWeather data service 3.0"][0]["daily_forecast"][0].tmp.min + "C°");
             $(".text p:nth-child(7)").append(data["HeWeather data service 3.0"][0].basic.update.loc);
             $(".text p:nth-child(8)").append("今日降雨概率:"+data["HeWeather data service 3.0"][0]["daily_forecast"][0].pop);

 //------------------------------------------------------------后三日日期
             $(".list li").find("span").eq(0).append(data["HeWeather data service 3.0"][0]["daily_forecast"][1].date);
             $(".list").find("li").eq(1).find("span").append(data["HeWeather data service 3.0"][0]["daily_forecast"][2].date);
             $(".list li").eq(2).find("span").append(data["HeWeather data service 3.0"][0]["daily_forecast"][3].date);

 //------------------------------------------------------------后三日天气
             $(".list li:nth-child(1)").find("h4").append(data["HeWeather data service 3.0"][0]["daily_forecast"][1].cond.txt_d);
             $(".list li:nth-child(1) i").append(data["HeWeather data service 3.0"][0]["daily_forecast"][1].tmp.max + "C°" + '~' + data["HeWeather data service 3.0"][0]["daily_forecast"][0].tmp.min + "C°");

             $(".list li:nth-child(2)").find("h4").append(data["HeWeather data service 3.0"][0]["daily_forecast"][2].cond.txt_d);
             $(".list li:nth-child(2) i").append(data["HeWeather data service 3.0"][0]["daily_forecast"][2].tmp.max + "C°" + '~' + data["HeWeather data service 3.0"][0]["daily_forecast"][0].tmp.min + "C°");

             $(".list li:nth-child(3)").find("h4").append(data["HeWeather data service 3.0"][0]["daily_forecast"][3].cond.txt_d);
             $(".list li:nth-child(3) i").append(data["HeWeather data service 3.0"][0]["daily_forecast"][3].tmp.max + "C°" + '~' + data["HeWeather data service 3.0"][0]["daily_forecast"][0].tmp.min + "C°");

             //后三日图片-----------------------------------
             var img_one = getIcon1(data["HeWeather data service 3.0"][0]["daily_forecast"][1].cond.txt_d);
             var img_two = getIcon1(data["HeWeather data service 3.0"][0]["daily_forecast"][2].cond.txt_d);
             var img_three = getIcon1(data["HeWeather data service 3.0"][0]["daily_forecast"][3].cond.txt_d);

             $("#oneday").find("img").attr("src", "image/" + img_one);
             $("#twoday").find("img").attr("src", "image/" + img_two);
             $("#threeday").find("img").attr("src", "image/" + img_three);
 //----------------------------------------------------------体感
             $(".indoor:first").find("li:nth-child(1)").append("体感温度:"+data["HeWeather data service 3.0"][0].now.fl);
             $(".indoor:first").find("li:nth-child(2)").append("气压:"+data["HeWeather data service 3.0"][0].now.pres);
             $(".indoor:first").find("li:nth-child(3)").append("能见度:"+data["HeWeather data service 3.0"][0].now.vis + "km");
             $(".indoor:first").find("li:nth-child(4)").append("风向:"+data["HeWeather data service 3.0"][0].now.wind.deg);
             $(".indoor:first").find("li:nth-child(5)").append(data["HeWeather data service 3.0"][0].now.wind.dir);
             $(".indoor:first").find("li:nth-child(6)").append("风力:"+data["HeWeather data service 3.0"][0].now.wind.sc);
             $(".indoor:first").find("li:nth-child(7)").append("风速:"+data["HeWeather data service 3.0"][0].now.wind.spd);
 //-----------------------------------------------------------------------------------------------------污染源
             $(".indoor #wenduji").find("li:nth-child(1)").append("空气质量指数:"+data["HeWeather data service 3.0"][0].aqi.city.aqi);
             $(".indoor #wenduji").find("li:nth-child(2)").append("一氧化碳1小时平均值(ug/m³):"+data["HeWeather data service 3.0"][0].aqi.city.co);
             $(".indoor #wenduji").find("li:nth-child(3)").append("二氧化氮1小时平均值(ug/m³):"+data["HeWeather data service 3.0"][0].aqi.city.no2);
             $(".indoor #wenduji").find("li:nth-child(4)").append("臭氧1小时平均值(ug/m³):"+data["HeWeather data service 3.0"][0].aqi.city.o3);
             $(".indoor #wenduji").find("li:nth-child(5)").append("PM10 1小时平均值(ug/m³):"+data["HeWeather data service 3.0"][0].aqi.city.pm10);
             $(".indoor #wenduji").find("li:nth-child(6)").append("二氧化硫1小时平均值(ug/m³):"+data["HeWeather data service 3.0"][0].aqi.city.so2);
            $(".aa").hide();

        });

    });


});
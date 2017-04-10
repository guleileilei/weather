/**
 * Created by 顾 磊 on 2016/12/4.
 */
$(function () {


    setInterval(function () {


        $("#sun img").css("position", "absolute").animate({"left": "+=100", "opacity": 1}, 3000);
        $("#sun img").css("position", "absolute").animate({"left": "+=-100", "opacity": 0}, 3000);
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
        var city = $("#message").val();


        $(city).appendTo("#message");
        $("#message").val("");


        function getIcon(weather) {
            var icon = "地球.png";

            var icons = {
                "晴": "bigsun.png",
                "多云": "大太阳.png",
                "阴": "阴天.png",
                "雪": "雪.png",
                "小雨": "雨.png",
                "霾": "雾霾.png",
                "雾": "雾天.png",
                "阵雨":"雷雨.png"
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
                "雾": "小雾天.png",
                "小雨": "小雨.png",
                "阵雨":"小雷雨.png"
            };
            return icons[weather1];

        }

        //var url = "http://v.juhe.cn/weather/index?cityname="+city+'&key=7ddb387d56633abe42176a7637d05cf5';
        var url = "http://wthrcdn.etouch.cn/weather_mini?citykey=" + city;


        $.getJSON(url, function (data) {

            $(".position").append(data.data.city);
            $(".text h3").append("今日:" + data.data["forecast"][0].date);

            var img = getIcon(data.data["forecast"][0].type);//当日图片
            $("#sun").find("img").attr("src", "image/" + img);
            $(".text p:first").append("当前温度:" + data.data.wendu + "C°");
            $(".text p:nth-child(3)").append("风力:" + data.data["forecast"][0].fengli);
            $(".text p:nth-child(4)").append("今日最:" + data.data["forecast"][0].low);
            $(".text p:nth-child(5)").append("今日最:" + data.data["forecast"][0].high);
            $(".text p:nth-child(6)").append("今日天气:"+data.data["forecast"][0].type);
            $(".text p:nth-child(7)").append("今日风向:"+data.data["forecast"][0].fengxiang);
            $(".text p:nth-child(8)").append("今日感冒指数:"+data.data.ganmao);

            ////------------------------------------------------------------后三日日期
            $(".list li").find("span").eq(0).append(data.data["forecast"][1].date);
            $(".list").find("li").eq(1).find("span").append(data.data["forecast"][2].date);
            $(".list li").eq(2).find("span").append(data.data["forecast"][3].date);

            ////------------------------------------------------------------后三日天气
            $(".list li:nth-child(1) h4").append(data.data["forecast"][0].type+':'+data.data["forecast"][0].low+'~' + data.data["forecast"][0].high);
            $(".list li:nth-child(2)").find("h4").append(data.data["forecast"][1].type+':'+data.data["forecast"][1].low+'~' + data.data["forecast"][1].high);
            $(".list li:nth-child(3) h4").append(data.data["forecast"][2].type+':'+data.data["forecast"][2].low+'~' + data.data["forecast"][2].high);
            //           //后三日图片-----------------------------------
            var img_one = getIcon1(data.data["forecast"][0].type);
            var img_two = getIcon1(data.data["forecast"][1].type);
            var img_three = getIcon1(data.data["forecast"][2].type);

            $("#oneday").find("img").attr("src", "image/" + img_one);
            $("#twoday").find("img").attr("src", "image/" + img_two);
            $("#threeday").find("img").attr("src", "image/" + img_three);


            $(".aa").hide();

        });


    });


});
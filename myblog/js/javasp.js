//背景随时间切换
var P1 = 1;
function BeiJing() {
    var dd = new Date();
    var st = document.getElementById("beijing");
    var hour = dd.getHours();//获取当前时
    var btn1 =  document.querySelector('#btn1');
    btn1.onclick = function () {
        if(P1 == 1){P1 = 0;}
        else{P1 = 1;}
    }
    //alert(hour);
    if(P1 == 1){
    if (hour > 3 && hour <= 5) {
        document.body.style.backgroundImage = "url(../images/beijing/4-6.png)";
    } else if (hour > 5 && hour <= 10) {
        document.body.style.backgroundImage = "url(../images/beijing/6-11.png)";
    } else if (hour > 10 && hour <= 12) {
        document.body.style.backgroundImage = "url(../images/beijing/11-13.png)";
    } else if (hour > 12 && hour <= 15) {
        document.body.style.backgroundImage = "url(../images/beijing/13-16.png)";
    } else if (hour > 15 && hour <= 17) {
        document.body.style.backgroundImage = "url(../images/beijing/16-18.png)";
    } else if (hour > 17 && hour <= 21) {
        document.body.style.backgroundImage = "url(../images/beijing/18-22.png)";
    } else {
        document.body.style.backgroundImage = "url(../images/beijing/22-4.png)";
    }}

    else{  document.body.style.backgroundImage = "url(../images/beijing/22-4.png)"}
}
window.setInterval("BeiJing()", 1000);


//问候语随时间切换
//创建一个日期对象
function WenHou() {
    var dd = new Date();
    var st = document.getElementById("hid");
    var hour = dd.getHours();//获取当前时
    //alert(hour);
    if (hour >= 0 && hour <= 3) {
        st.innerHTML = " <h3>陌生人，还没休息啊<br><br>夜深了，该休息了</h3>";
    } else if (hour > 3 && hour <= 6) {
        st.innerHTML = " <h3>陌生人，早上好啊<br><br>一天之计在于晨,加油</h3>";
    } else if (hour > 6 && hour <= 10) {
        st.innerHTML = " <h3>陌生人，上午好啊</h3>";
    } else if (hour > 10 && hour <= 12) {
        st.innerHTML = " <h3>陌生人，中午好啊<br><br>记得要睡午觉哦</h3>";
    } else if (hour > 12 && hour <= 16) {
        st.innerHTML = " <h3>陌生人，下午好啊</h3>";
    } else if (hour > 16 && hour <= 20) {
        st.innerHTML = " <h3>陌生人，傍晚好啊</h3>";
    } else if (hour > 20 && hour <= 24) {
        st.innerHTML = " <h3>陌生人，晚上好啊<br><br>时间不早了要早睡早起哦</h3>";
    }
}
window.setInterval("WenHou()", 1000);


// 右边栏
// 时间
function time() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var day = time.getDate();
    var temps = time.getSeconds();
    if (temps < 10 && temps >= 0) {
        second = "0" + temps;
    }
    else {
        second = temps;
    }
    var tempm = time.getMinutes();
    if (tempm < 10 && tempm >= 0) {
        minute = "0" + tempm;
    }
    else {
        minute = tempm;
    }
    var temph = time.getHours();
    if (temph < 10 && temph >= 0) {
        hour = "0" + temph;
    }
    else {
        hour = temph;
    }
    document.getElementById("time-year").innerHTML = year;
    document.getElementById("time-month").innerHTML = month;
    document.getElementById("time-day").innerHTML = day;
    document.getElementById("time-hour").innerHTML = hour;
    document.getElementById("time-minute").innerHTML = minute;
    document.getElementById("time-seconds").innerHTML = second;

}
window.setInterval("time()", 1000);	
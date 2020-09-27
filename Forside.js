
// Klokke:

var clock = document.getElementById("clock");
var god = document.getElementById("god");

function startTime() {

    var today = new Date();
    var h = today.getHours(); 
    var m = today.getMinutes();
    var s = today.getSeconds();

    setTimeout(startTime, 1000);

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    clock.innerHTML = h + ":" + m + ":" + s;

    if (h >= 05 && h < 11) {
        
        god.innerHTML = "morgen";
    }

    else if (h >= 11 && h < 14) {

        god.innerHTML = "formiddag";
    }

    else if (h >= 14 && h < 19) {

        god.innerHTML = "ettermiddag";
    }

    else if (h >= 19 && h < 23) {

        god.innerHTML = "kveld";
    }

    else if (h >= 23 && h > 05) {

        god.innerHTML = "aften";
    }

}
startTime();

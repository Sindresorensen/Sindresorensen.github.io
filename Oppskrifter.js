
// Klokke: 

var clock = document.getElementById("clock");

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

}
startTime();
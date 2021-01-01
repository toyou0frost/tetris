var _5lineI = 1;
var _5lineColor = "aqua";
var defalutColor = "rgb(0, 0, 0)";

setInterval(function () {
    var _now5line = document.getElementById("_" + _5lineI + "-5");
    var Next = _5lineI + 1;
    var _5lineNext = document.getElementById("_" + Next + "-5");
    var tmp = getComputedStyle(_5lineNext).backgroundColor;
    if (tmp == defalutColor) {
        _5lineI++;
        _5lineNext.style.backgroundColor = _5lineColor;
        _now5line.style.backgroundColor = defalutColor;
    }
    else{
        _5lineI = 1;
    }
}, 500)
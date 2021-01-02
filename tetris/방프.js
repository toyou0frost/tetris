var _5lineI = 1;
var _5lineColor = "rgb(0, 255, 255)";
var defalutColor = "rgb(0, 0, 0)";


setInterval(function () {
    var Next = _5lineI + 1;
    for(var i = 1; i <= 10; i++){
        var _now5line = document.getElementById("_" + _5lineI + "-"+i);
        var _5lineNext = document.getElementById("_" + Next + "-"+i);
        var tmp = getComputedStyle(_5lineNext).backgroundColor;// 버그 1
        var tmp1 = getComputedStyle(_now5line).backgroundColor;// 버그 2
        if (tmp == defalutColor && _now5line != "_20-5" && tmp1 == _5lineColor) { // 버그 3
            _5lineNext.style.backgroundColor = _5lineColor;
            _now5line.style.backgroundColor = defalutColor;
        }
        else{
            _5lineI = 1;
        }
    }
    _5lineI++;
}, 500)

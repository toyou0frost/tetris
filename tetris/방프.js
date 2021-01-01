var _5lineI = 1;
var _5lineColor = "aqua";
var defalutColor = "black"

setInterval(function () {
    var _now5line = document.getElementById("_" + _5lineI + "-5");
    var Next = _5lineI + 1;
    var _5lineNext = document.getElementById("_" + Next + "-5");
    alert("i"+_5lineI);
    alert("N"+Next);
    if (_5lineI != 19) {
        _5lineI++;
    }
    else {
        _5lineI = 1;
    }
    if (_now5line.style.backgroundColor == defalutColor) {
        _5lineNext.style.backgroundColor = _5lineColor;
        alert("a");
        _now5line.style.backgroundColor = defalutColor;
        alert("b");
    }
}, 500)

/*setInterval(function () {
    var _now5line = document.getElementById("_" + _5lineI + "-5");
    var Next = _5lineI + 1;
    var _5lineNext = document.getElementById("_" + Next + "-5");
    if (_5lineI != 18) {
        _5lineI++;
    }
    else {
        alert("b");
        _5lineI = 1;
    }
    _now5line.style.backgroundColor = defalutColor;
    if (_now5line.style.backgroundColor == defalutColor) {
        _5lineNext.style.backgroundColor = _5lineColor;
    }
    else{
        alert("b");
    }
}, 1000)

setInterval(function () {
    var _now5line = document.getElementById("_" + _5lineI + "-5");
    var Next = _5lineI + 1;
    var _5lineNext = document.getElementById("_" + Next + "-5");
    if (_5lineI != 19) {
        _5lineI++;
    }
    else {
        alert("c");
        _5lineI = 1;
    }
    _now5line.style.backgroundColor = defalutColor;
    if (_now5line.style.backgroundColor == defalutColor) {
        _5lineNext.style.backgroundColor = _5lineColor;
    }
    else{
        alert("c");
    }
}, 1000)

setInterval(function () {
    var _now5line = document.getElementById("_" + _5lineI + "-5");
    var Next = _5lineI + 1;
    var _5lineNext = document.getElementById("_" + Next + "-5");
    if (_5lineI != 20) {
        _5lineI++;
    }
    else {
        alert("d");
        _5lineI = 1;
    }
    _now5line.style.backgroundColor = defalutColor;
    if (_now5line.style.backgroundColor == defalutColor) {
        _5lineNext.style.backgroundColor = _5lineColor;
    }
    else{
        alert("d");
    }
}, 1000)
*/

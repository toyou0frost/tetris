var _5lineI = 0;
var RdBlock = 0;
var defalutColor = "rgb(0, 0, 0)";
var _iblock = "rgb(0, 255, 255)";
var _jblock = "rgb(0, 0, 255)";
var _lblock = "rgb(255, 140, 0)";
var _oblock = "rgb(255, 215, 0)";
var _sblock = "rgb(152, 251, 152)";
var _tblock = "rgb(128, 0, 128)";
var _zblock = "rgb(255, 0, 0)";
var _nowBlockColor;

onload = function(){
    blockCreate(RdBlock);  
}


setInterval(function tmp2() {
    var Next = _5lineI + 1;
    for(var i = 1; i <= 10; i++){
        var _now5line = document.getElementById("_" + _5lineI + "-"+i);
        var _5lineNext = document.getElementById("_" + Next + "-"+i);
        var tmp = getComputedStyle(_5lineNext).backgroundColor;
        var tmp1 = getComputedStyle(_now5line).backgroundColor;
        if(_now5line.id == "_20-"+i){
            _5lineI = 0;
            blockCreate(RdBlock);
        }
        if (tmp == defalutColor) { 
            if(tmp1 == _nowBlockColor){
                _5lineNext.style.backgroundColor = _nowBlockColor;
                _now5line.style.backgroundColor = defalutColor;
            }
        }
        else{
            if(_now5line.id == "_0-4" || _now5line.id == "_0-5" || _now5line.id == "_0-6" || _now5line.id == "_0-7" ){
                //alert("gameover");
            }
            _5lineI = 0;
            blockCreate(RdBlock);
        }
    }
    _5lineI++;
}, 100) 


function blockCreate(RdBlock){
    var _0_4 = document.getElementById("_0-4");
    var _0_5 = document.getElementById("_0-5");
    var _0_6 = document.getElementById("_0-6");
    var _0_7 = document.getElementById("_0-7");
    var _1_4 = document.getElementById("_1-4");
    var _1_5 = document.getElementById("_1-5");
    var _1_6 = document.getElementById("_1-6");
    switch(RdBlock){
        case 0: 
            _0_4.style.backgroundColor = _iblock; 
            _0_5.style.backgroundColor = _iblock;
            _0_6.style.backgroundColor = _iblock;
            _0_7.style.backgroundColor = _iblock;
            _nowBlockColor = _iblock;
            tmp2();
            break;
        case 1:
            _0_4.style.backgroundColor = _jblock; 
            _1_4.style.backgroundColor = _jblock;
            _1_5.style.backgroundColor = _jblock;
            _1_6.style.backgroundColor = _jblock;
            _nowBlockColor = _iblock;
            break;
        case 2:
            _0_6.style.backgroundColor = _lblock;
            _1_4.style.backgroundColor = _lblock; 
            _1_5.style.backgroundColor = _lblock;
            _1_6.style.backgroundColor = _lblock;
            _nowBlockColor = _lblock;
            break;
        case 3:
            _0_5.style.backgroundColor = _oblock; 
            _0_6.style.backgroundColor = _oblock;
            _1_5.style.backgroundColor = _oblock;
            _1_6.style.backgroundColor = _oblock;
            _nowBlockColor = _oblock;
            break;
        case 4:
            _0_5.style.backgroundColor = _sblock; 
            _0_6.style.backgroundColor = _sblock;
            _1_4.style.backgroundColor = _sblock;
            _1_5.style.backgroundColor = _sblock;
            _nowBlockColor = _sblock;
            break;
        case 5:
            _0_5.style.backgroundColor = _tblock;
            _1_4.style.backgroundColor = _tblock; 
            _1_5.style.backgroundColor = _tblock;
            _1_6.style.backgroundColor = _tblock;
            _nowBlockColor = _tblock;
            break;
        case 6:
            _0_4.style.backgroundColor = _zblock; 
            _0_5.style.backgroundColor = _zblock;
            _1_5.style.backgroundColor = _zblock;
            _1_6.style.backgroundColor = _zblock;
            _nowBlockColor = _zblock;
            break;
    }
}

var _lineI = 19;
var centerColor = "rgb(0, 255, 254)";
var defalutColor = "rgb(32, 32, 32)";
var _iblock = "rgb(0, 255, 255)";
var _jblock = "rgb(0, 0, 255)";
var _lblock = "rgb(255, 140, 0)";
var _oblock = "rgb(255, 215, 0)";
var _sblock = "rgb(152, 251, 152)";
var _tblock = "rgb(128, 0, 128)";
var _zblock = "rgb(255, 0, 0)";
var _nowBlockColor;
var BlockType = [0, 1, 2, 3, 4, 5, 6];
var RdBlock = BlockType;
var blockCreateI = 0;
var leftCount = 0;
var rightCount = 0;
var leftTurnCount = 0;
var rightTurnCount = 0;
var lineClearCount = 0;
var gameover = 0;
var ing = false; 
var stop = false;
var keyEvent = null;
var blockMoveOK = false;
var quit = false;
var spin = false;
var canTurn = false;
var lastOrder;

onload = function(){
    ClassInitialization();
    ShuffleBlock(BlockType);
    BlockCreate(RdBlock);  
}

const ShuffleBlock = array => {
    for (let i = 0; i < array.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        const x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
};

setInterval(function BlockFall() {
    if(ing == true){
        return;
    }
    ing = true;
    BlockMove("down");
    ing = false;
    return;
    //console.log(ing);
    ing = true;
    var Next = _lineI + 1;
    var blockFallAppropriate = 1;
    stop = false;
    for(var j = 1; j <= 10; j++){
        if(document.getElementById("_0-4").className == "blockexist" || document.getElementById("_0-5").className == "blockexist" || document.getElementById("_0-6").className == "blockexist" || document.getElementById("_0-7").className == "blockexist"){ // 나중에 클래스 이름을 통해 검사
            GameOver();
            break;
        }
        if(_lineI == -1){
            _lineI = 20;
        }
        var _1plusJ = j + 1;
        var _2plusJ = j + 2;
        var _3plusJ = j + 3;
        var _nowLine = document.getElementById("_" + _lineI + "-"+j);
        var _nowLineNext = document.getElementById("_" + Next + "-"+j);
        var _nowLine_1Right = document.getElementById("_" + _lineI + "-"+ _1plusJ);
        var _nowLineNext_1Right = document.getElementById("_" + Next + "-"+ _1plusJ);
        var _nowLine_2Right = document.getElementById("_" + _lineI + "-"+ _2plusJ);
        var _nowLineNext_2Right = document.getElementById("_" + Next + "-"+ _2plusJ);
        var _nowLine_3Right = document.getElementById("_" + _lineI + "-"+ _3plusJ);
        var _nowLineNext_3Right = document.getElementById("_" + Next + "-"+ _3plusJ);
        if(true){
            var _nowLineNextColor_1Right = getComputedStyle(_nowLineNext_1Right).backgroundColor;
            var _nowLineColor_1Right = getComputedStyle(_nowLine_1Right).backgroundColor;
            if(_nowLineColor_1Right == _nowBlockColor){
                if(_nowLine.className == "currentBlockLocation" && _nowLineNextColor == defalutColor && _nowLineNextColor_1Right != defalutColor){
                    //alert("a");
                    blockFallAppropriate = 0;
                }
            }
        }
        if(j < 10){
            var _nowLineNextColor_2Right = getComputedStyle(_nowLineNext_2Right).backgroundColor;
            var _nowLineColor_2Right = getComputedStyle(_nowLine_2Right).backgroundColor;
            if(_nowLineColor_2Right == _nowBlockColor){
                if(_nowLine.className == "currentBlockLocation" && _nowLineNextColor == defalutColor && _nowLineNextColor_2Right != defalutColor){
                    //alert("b");
                    blockFallAppropriate = 0;
                }
            }
        }
        if(j < 9){
            var _nowLineNextColor_3Right = getComputedStyle(_nowLineNext_3Right).backgroundColor;
            var _nowLineColor_3Right = getComputedStyle(_nowLine_3Right).backgroundColor;
            if(_nowLineColor_3Right == _nowBlockColor){
                if(_nowLine.className == "currentBlockLocation" && _nowLineNextColor == defalutColor && _nowLineNextColor_3Right != defalutColor){
                    //alert("c");
                    blockFallAppropriate = 0;
                }
            }
        }
        var _nowLineNextColor = getComputedStyle(_nowLineNext).backgroundColor;
        var _nowLineColor = getComputedStyle(_nowLine).backgroundColor;
        if(_nowLine.id == "_20-"+j && _nowLine.className == "currentBlockLocation"){ // 바닥에 닿았을 때 블록 생성
            _lineI = 19;
            if(blockCreateI == 6){
                blockCreateI = 0;
            }
            ClassInitialization();
            BlockCreate(RdBlock);
        }
        if(_nowLine.className == "currentBlockLocation" && _nowLineColor == _nowBlockColor){
            if(_nowLineNextColor == defalutColor && blockFallAppropriate == 1){
                if(_nowLineColor == defalutColor){
                    _nowLineNext.setAttribute("class", "currentBlockLocation");
                    _nowLine.setAttribute("class", "");
                    continue;
                }
                else{
                    _nowLineNext.style.backgroundColor = _nowBlockColor;
                    _nowLine.style.backgroundColor = defalutColor;
                    _nowLineNext.setAttribute("class", "currentBlockLocation");
                    _nowLine.setAttribute("class", "");
                }
            }
            else{
                //alert(blockFallAppropriate);
                //alert(_nowLine.id);
                //alert(_nowLineNext.id);
                //alert(_nowLineNextColor);
                _lineI = 19;
                stop = true;
            }
        }
    }
    _lineI--;
    ing = false;
    //console.log("a");
    if(stop){
        if(blockCreateI == 7){
            console.log("a");
            blockCreateI = 0;
            ShuffleBlock(BlockType); 
            RdBlock = BlockType;
        }
        ClassInitialization();
        BlockExist();
        LineClear();
        BlockCreate(RdBlock);
    }
}, 500) 

var test = 1;
function BlockCreate(RdBlock){
    var _0_4 = document.getElementById("_0-4");
    var _0_5 = document.getElementById("_0-5");
    var _0_6 = document.getElementById("_0-6");
    var _0_7 = document.getElementById("_0-7");
    var _1_4 = document.getElementById("_1-4");
    var _1_5 = document.getElementById("_1-5"); 
    var _1_6 = document.getElementById("_1-6");
    for(blockCreateI; blockCreateI < 7;){
        //switch(RdBlock[blockCreateI]){
        switch(4){
            case 0: 
                leftCount = 0;
                rightCount = 0;
                if(_0_4.className != "blockexist" && _0_5.className != "blockexist" && _0_6.className != "blockexist" && _0_7.className != "blockexist"){
                    _0_4.setAttribute("class", "currentBlockLocation");
                    _0_5.setAttribute("class", "currentBlockLocation");
                    _0_6.setAttribute("class", "currentBlockLocation");
                    _0_7.setAttribute("class", "currentBlockLocation");
                    _0_4.style.backgroundColor = _iblock; 
                    _0_5.style.backgroundColor = _iblock;
                    _0_5.style.color = centerColor;
                    _0_6.style.backgroundColor = _iblock;
                    _0_7.style.backgroundColor = _iblock;
                }
                _nowBlockColor = _iblock;
                blockCreateI++
                ing = false;
                spin = false;
                BlockFall();
                break;
            case 1:
                leftCount = 0;
                rightCount = 0;
                if(_0_4.className != "blockexist" && _0_5.className != "blockexist" && _0_6.className != "blockexist"){
                    _0_4.setAttribute("class", "currentBlockLocation");
                    _0_5.setAttribute("class", "currentBlockLocation");
                    _0_6.setAttribute("class", "currentBlockLocation");
                    _1_4.setAttribute("class", "currentBlockLocation");
                    _1_5.setAttribute("class", "currentBlockLocation");
                    _1_6.setAttribute("class", "currentBlockLocation");
                    _0_4.style.backgroundColor = _jblock; 
                    _1_4.style.backgroundColor = _jblock;
                    _1_5.style.backgroundColor = _jblock;
                    _1_6.style.backgroundColor = _jblock;
                    _1_5.style.color = centerColor;
                }
                test = 6; // 테스트용
                _nowBlockColor = _jblock;
                blockCreateI++
                ing = false;
                spin = false;
                BlockFall();
                break;
            case 2:
                leftCount = 0;
                rightCount = 0;
                if(_0_4.className != "blockexist" && _0_5.className != "blockexist" && _0_6.className != "blockexist"){
                    _0_4.setAttribute("class", "currentBlockLocation");
                    _0_5.setAttribute("class", "currentBlockLocation");
                    _0_6.setAttribute("class", "currentBlockLocation");
                    _1_4.setAttribute("class", "currentBlockLocation");
                    _1_5.setAttribute("class", "currentBlockLocation");
                    _1_6.setAttribute("class", "currentBlockLocation");
                    _0_6.style.backgroundColor = _lblock;
                    _1_4.style.backgroundColor = _lblock; 
                    _1_5.style.backgroundColor = _lblock;
                    _1_6.style.backgroundColor = _lblock;
                    _1_5.style.color = centerColor;
                }
                _nowBlockColor = _lblock;
                blockCreateI++
                ing = false;
                spin = false;
                BlockFall();
                break;
            case 3:
                leftCount = 0;
                rightCount = 0;
                if(_0_5.className != "blockexist" && _0_6.className != "blockexist"){
                    _0_5.setAttribute("class", "currentBlockLocation");
                    _0_6.setAttribute("class", "currentBlockLocation");
                    _1_5.setAttribute("class", "currentBlockLocation");
                    _1_6.setAttribute("class", "currentBlockLocation");
                    _0_5.style.backgroundColor = _oblock; 
                    _0_6.style.backgroundColor = _oblock;
                    _1_5.style.backgroundColor = _oblock;
                    _1_6.style.backgroundColor = _oblock;
                }
                _nowBlockColor = _oblock;
                blockCreateI++
                ing = false;
                spin = false;
                BlockFall();
                break;
            case 4:
                leftCount = 0;
                rightCount = 0;
                if(_0_4.className != "blockexist" && _0_5.className != "blockexist" && _0_6.className != "blockexist"){
                    _0_4.setAttribute("class", "currentBlockLocation");
                    _0_5.setAttribute("class", "currentBlockLocation");
                    _0_6.setAttribute("class", "currentBlockLocation");
                    _1_4.setAttribute("class", "currentBlockLocation");
                    _1_5.setAttribute("class", "currentBlockLocation");
                    _1_6.setAttribute("class", "currentBlockLocation");
                    _0_5.style.backgroundColor = _sblock; 
                    _0_6.style.backgroundColor = _sblock;
                    _1_4.style.backgroundColor = _sblock;
                    _1_5.style.backgroundColor = _sblock;
                    _0_6.style.color = centerColor;
                }
                _nowBlockColor = _sblock;
                blockCreateI++
                ing = false;
                spin = false;
                BlockFall();
                break;
            case 5:
                leftCount = 0;
                rightCount = 0;
                if(_0_4.className != "blockexist" && _0_5.className != "blockexist" && _0_6.className != "blockexist"){
                    _0_4.setAttribute("class", "currentBlockLocation");
                    _0_5.setAttribute("class", "currentBlockLocation");
                    _0_6.setAttribute("class", "currentBlockLocation");
                    _1_4.setAttribute("class", "currentBlockLocation");
                    _1_5.setAttribute("class", "currentBlockLocation");
                    _1_6.setAttribute("class", "currentBlockLocation");
                    _0_5.style.backgroundColor = _tblock;
                    _1_4.style.backgroundColor = _tblock; 
                    _1_5.style.backgroundColor = _tblock;
                    _1_6.style.backgroundColor = _tblock;
                    _1_5.style.color = centerColor;
                }
                _nowBlockColor = _tblock;
                blockCreateI++
                ing = false;
                spin = false;
                BlockFall();
                break;
            case 6:
                leftCount = 0;
                rightCount = 0;
                if(_0_4.className != "blockexist" && _0_5.className != "blockexist" && _0_6.className != "blockexist"){
                    _0_4.setAttribute("class", "currentBlockLocation");
                    _0_5.setAttribute("class", "currentBlockLocation");
                    _0_6.setAttribute("class", "currentBlockLocation");
                    _1_4.setAttribute("class", "currentBlockLocation");
                    _1_5.setAttribute("class", "currentBlockLocation");
                    _1_6.setAttribute("class", "currentBlockLocation");
                    _0_4.style.backgroundColor = _zblock; 
                    _0_5.style.backgroundColor = _zblock;
                    _1_5.style.backgroundColor = _zblock;
                    _1_6.style.backgroundColor = _zblock;
                    _0_5.style.color = centerColor;
                }
                test = 1; // 테스트용
                _nowBlockColor = _zblock;
                blockCreateI++
                ing = false;
                spin = false;
                BlockFall();
                break;
        }
    }  
}

document.addEventListener('keydown', (event) => {
    const keyCode = event.key;
    //console.log(keyCode);
    if(keyCode == "ArrowLeft" && gameover != 1){
        keyEvent = "left";
        quit = false;
        BlockMove(keyEvent);
        return;
        for(var i = 0; i < 20; i++){
            for(var j = 1; j <= 10; j++){
                var _1minusJ = j - 1;
                var blockCheck = document.getElementById("_"+i+"-"+j);
                var blockCheckLeft = document.getElementById("_"+i+"-"+_1minusJ);
                var blockCheckColor = getComputedStyle(blockCheck).backgroundColor;
                var blockCheckLeftColor = getComputedStyle(blockCheckLeft).backgroundColor;
                if(_nowBlockColor == _tblock && blockCheckColor == _nowBlockColor && blockCheck.className == "currentBlockLocation"){
                    if(blockCheckLeftColor != defalutColor || blockCheckLeft.className == "currentBlockLocation" || _1minusJ == 1){
                        blockMoveOK = false;
                    }
                    else{
                        blockMoveOK = true;
                    }
                    if(blockMoveOK){
                        console.log("a");
                        blockMoveOK = false;
                        quit = true;
                        BlockMove(keyEvent);
                        break;
                    }
                    /*
                    switch(leftCount){
                        case -12:
                        case -11:
                        case -10:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-8")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-10").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "");
                            }
                            break;
                        case -9:
                        case -8:
                        case -7:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-7")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "");
                            }
                            break;
                        case -6:
                        case -5:
                        case -4:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-6")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "");
                            }
                            break;
                        case -3:
                        case -2:
                        case -1:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-5")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                            }
                            break;
                        case 0:
                        case 1:
                        case 2:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-4")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-3").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                            }
                            break;
                        case 3:
                        case 4:
                        case 5:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-3")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-2").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                            }
                            break;
                        case 6:
                        case 7:
                        case 8:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-2")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-1").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-1").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                            }
                            break;
                        default:
                            break;
                    }*/
                }
                else if(_nowBlockColor == _lblock && blockCheckColor == _nowBlockColor){
                    if(blockCheckLeftColor != defalutColor || blockCheckLeft.className == "currentBlockLocation" || blockCheckLeft.id == "_"+i+"-1"){
                        blockMoveOK = false;
                    }
                    else{
                        blockMoveOK = true;
                    }
                    if(blockMoveOK){
                        console.log(blockCheckLeft.id);
                        blockMoveOK = false;
                        quit = true;
                        BlockMove(keyEvent);
                        break;
                    }
                    /*switch(leftCount){
                        case -12:
                        case -11:
                        case -10:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-8")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-10").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-8").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-10").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "");
                            }
                            break;
                        case -9:
                        case -8:
                        case -7:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-7")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "");
                            }
                            break;
                        case -6:
                        case -5:
                        case -4:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-6")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "");
                            }
                            break;
                        case -3:
                        case -2:
                        case -1:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-5")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                            }
                            break;
                        case 0:
                        case 1:
                        case 2:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-4")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                            }
                            break;
                        case 3:
                        case 4:
                        case 5:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-3")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-3").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                            }
                            break;
                        case 6:
                        case 7:
                        case 8:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-2")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-1").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-2").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                            }
                            break;
                        default:
                            break;
                    }*/
                }
                else if(_nowBlockColor == _jblock && blockCheckColor == _nowBlockColor){
                    switch(leftCount){
                        case -12:
                        case -11:
                        case -10:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-9")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-10").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "");
                            }
                            break;
                        case -9:
                        case -8:
                        case -7:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-8")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "");
                            }
                            break;
                        case -6:
                        case -5:
                        case -4:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-7")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "");
                            }
                            break;
                        case -3:
                        case -2:
                        case -1:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-6")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                            }
                            break;
                        case 0:
                        case 1:
                        case 2:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-5")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                            }
                            break;
                        case 3:
                        case 4:
                        case 5:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-4")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                            }
                            break;
                        case 6:
                        case 7:
                        case 8:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-3")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-1").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-1").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-2").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                            }
                            break;
                        default:
                            break;
                    }
                }
                else if(_nowBlockColor == _iblock && blockCheckColor == _nowBlockColor && blockCheck.className == "currentBlockLocation"){
                    if(blockCheckLeftColor != defalutColor || blockCheckLeft.className == "currentBlockLocation" || _1minusJ == 0){
                        blockMoveOK = false;
                    }
                    else{
                        blockMoveOK = true;
                    }
                    if(blockMoveOK){
                        blockMoveOK = false;
                        BlockMove(keyEvent);
                    }
                    /*switch(leftCount){
                        case -12:
                        case -11:
                        case -10:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-8")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-10").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "");
                            }
                            break;
                        case -9:
                        case -8:
                        case -7:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-7")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-10").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "");
                            }
                            break;
                        case -6:
                        case -5:
                        case -4:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-6")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "");
                            }
                            break;
                        case -3:
                        case -2:
                        case -1:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-5")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "");
                            }
                            break;
                        case 0:
                        case 1:
                        case 2:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-4")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                            }
                            break;
                        case 3:
                        case 4:
                        case 5:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-3")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                            }
                            break;
                        case 6:
                        case 7:
                        case 8:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-2")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-1").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                            }
                            break;
                    }*/
                }
                else if(_nowBlockColor == _oblock && blockCheckColor == _nowBlockColor && blockCheck.className == "currentBlockLocation"){
                    switch(leftCount){
                        case -8:
                        case -7:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-9")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-10").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "");
                            }
                            break;
                        case -6:
                        case -5:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-8")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "");
                            }
                            break;
                        case -4:
                        case -3:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-7")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "");
                            }
                            break;
                        case -2:
                        case -1:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-6")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                            }
                            break;
                        case 0:
                        case 1:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-5")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                            }
                            break;
                        case 2:
                        case 3:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-4")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                            }
                            break;
                        case 4:
                        case 5:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-3")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                            }
                            break;
                        case 6:
                        case 7:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-2")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-1").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "");
                            }
                            break;
                        default:
                            break;
                    }
                }
                if(leftCount >= 6 || blockCheck.className != "currentBlockLocation"){
                    continue;
                }
                else if(_nowBlockColor == _sblock && blockCheckColor == _nowBlockColor && blockCheck.className == "currentBlockLocation"){ // 블록회전시 조건도 카운트해서 처리해야함
                    switch(leftCount){
                        case -8: 
                        case -7: 
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-8")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-10").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "");
                            }
                            break;
                        case -6: 
                        case -5: 
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-7")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "");
                            }
                            break;
                        case -4: 
                        case -3: 
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-6")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "");
                            }
                            break;
                        case -2: 
                        case -1: 
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-5")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                            }
                            break;
                        case 0: 
                        case 1: 
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-4")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                            }
                            break;
                        case  2:
                        case  3: 
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-3")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                            }
                            break;
                        case  4:
                        case  5: 
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-2")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-1").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                            }
                            break;
                        default: 
                            break;
                    }
                }
                else if(_nowBlockColor == _zblock && blockCheckColor == _nowBlockColor && blockCheck.className == "currentBlockLocation"){
                    switch(leftCount){
                        case -8:
                        case -7:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-8")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-10").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "");
                            }
                            break;
                        case -6:
                        case -5:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-7")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "");
                            }
                            break;
                        case -4:
                        case -3:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-6")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "");
                            }
                            break;
                        case -2:
                        case -1:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-5")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                            }
                            break;
                        case 0:
                        case 1:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-4")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                            }
                            break;
                        case 2:
                        case 3:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-3")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                            }
                            break;
                        case 4:
                        case 5:
                            leftCount += 1;
                            rightCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-2")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-1").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                            }
                            else{
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
            if(quit){
                break;
            }
        }
    }
    else if(keyCode == "ArrowRight" && gameover != 1){
        //console.log("right");
        keyEvent = "right";
        quit = false;
        BlockMove(keyEvent);
        return;
        for(var i = 0; i <= 20; i++){
            for(var j = 10; j >= 0; j--){
                var _1plusJ = j + 1;
                var blockCheck = document.getElementById("_"+i+"-"+j);
                var blockCheckColor = getComputedStyle(blockCheck).backgroundColor;
                var blockCheckRight = document.getElementById("_"+i+"-"+_1plusJ);
                var blockCheckRightColor = getComputedStyle(blockCheckRight).backgroundColor;
                if(_nowBlockColor == _tblock && blockCheckColor == _nowBlockColor && blockCheck.className == "currentBlockLocation"){
                    if(blockCheckRightColor != defalutColor || blockCheckRight.className == "currentBlockLocation" || _1plusJ >= 10){
                        blockMoveOK = false;
                    }
                    else{
                        blockMoveOK = true;
                    }
                    if(blockMoveOK){
                        //console.log("b");
                        blockMoveOK = false;
                        BlockMove(keyEvent);
                        quit = true;
                        break;
                    }
                    /*switch(rightCount){
                        case -9:
                        case -8:
                        case -7:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-3")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-1").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-2").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case -6:
                        case -5:
                        case -4:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-4")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-2").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-3").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case -3:
                        case -2:
                        case -1:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-5")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 0:
                        case 1:
                        case 2:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-6")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 3:
                        case 4:
                        case 5:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-7")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 6:
                        case 7:
                        case 8:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-8")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 9:
                        case 10:
                        case 11:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-9")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-10").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-8").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-10").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        default:
                            break;
                    }*/
                }
                else if(_nowBlockColor == _lblock && blockCheckColor == _nowBlockColor && blockCheck.className == "currentBlockLocation"){
                    switch(rightCount){
                        case -9:
                        case -8:
                        case -7:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-3")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-3").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-1").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case -6:
                        case -5:
                        case -4:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-4")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-2").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case -3:
                        case -2:
                        case -1:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-5")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 0:
                        case 1:
                        case 2:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-6")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 3:
                        case 4:
                        case 5:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-7")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 6:
                        case 7:
                        case 8:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-8")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-8").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-10").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 9:
                        case 10:
                        case 11:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-9")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-9").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-10").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-10").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        default:
                            break;
                    }
                }
                else if(_nowBlockColor == _jblock && blockCheckColor == _nowBlockColor && blockCheck.className == "currentBlockLocation"){
                    switch(rightCount){
                        case -9:
                        case -8:
                        case -7:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-3")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-1").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-1").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case -6:
                        case -5:
                        case -4:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-4")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-2").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-2").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case -3:
                        case -2:
                        case -1:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-5")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-3").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-3").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 0:
                        case 1:
                        case 2:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-6")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 3:
                        case 4:
                        case 5:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-7")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 6:
                        case 7:
                        case 8:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-8")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 9:
                        case 10:
                        case 11:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-9")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-10").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        default:
                            break;
                    }
                }
                else if(_nowBlockColor == _iblock && blockCheckColor == _nowBlockColor && blockCheck.className == "currentBlockLocation"){
                    if(blockCheckRightColor != defalutColor || blockCheckRight.className == "currentBlockLocation" || _1plusJ >= 11){
                        blockMoveOK = false;
                    }
                    else{
                        blockMoveOK = true;
                    }
                    if(blockMoveOK){
                        blockMoveOK = false;
                        BlockMove(keyEvent);
                    }
                    /*switch(rightCount){
                        case -9:
                        case -8:
                        case -7:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-4")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-1").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case -6:
                        case -5:
                        case -4:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-5")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-2").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case -3:
                        case -2:
                        case -1:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-6")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-3").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 0:
                        case 1:
                        case 2:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-7")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 3:
                        case 4:
                        case 5:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-8")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 6:
                        case 7:
                        case 8:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-9")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-10").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                    }*/
                }
                if(rightCount >= 8 && blockCheck.className != "currentBlockLocation"){
                    continue;
                }
                else if(_nowBlockColor == _sblock && blockCheckColor == _nowBlockColor && blockCheck.className == "currentBlockLocation"){ // 블록회전시 조건도 카운트해서 처리해야함
                    switch(rightCount){
                        case -6: 
                        case -5: 
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-3")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-2").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-1").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case -4: 
                        case -3: 
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-4")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-3").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-2").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case -2: 
                        case -1: 
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-5")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-3").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 0: 
                        case 1: 
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-6")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case  2:
                        case  3: 
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-7")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case  4:
                        case  5: 
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-8")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case  6:
                        case  7: 
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-9")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-8").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-10").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        default: 
                            break;
                    }
                }
                else if(_nowBlockColor == _zblock && blockCheckColor == _nowBlockColor && blockCheck.className == "currentBlockLocation"){
                    switch(rightCount){
                        case -6:
                        case -5:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-3")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-2").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-1").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case -4:
                        case -3:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-4")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-3").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-2").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case -2:
                        case -1:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-5")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-3").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 0:
                        case 1:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-6")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 2:
                        case 3:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-7")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 4:
                        case 5:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-8")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 6:
                        case 7:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-9")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-8").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-10").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "currentBlockLocation");
                            }
                            else{
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        default:
                            break;
                    }
                }
                else if(_nowBlockColor == _oblock && blockCheckColor == _nowBlockColor && blockCheck.className == "currentBlockLocation"){
                    switch(rightCount){
                        case -8:
                        case -7:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-2")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-1").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-2").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-1").setAttribute("class", "");
                                document.getElementById("_"+i+"-2").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case -6:
                        case -5:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-3")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-2").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-3").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-2").setAttribute("class", "");
                                document.getElementById("_"+i+"-3").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case -4:
                        case -3:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-4")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-3").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-3").setAttribute("class", "");
                                document.getElementById("_"+i+"-4").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case -2:
                        case -1:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-5")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                                document.getElementById("_"+i+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 0:
                        case 1:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-6")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                                document.getElementById("_"+i+"-6").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 2:
                        case 3:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-7")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 4:
                        case 5:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-8")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-8").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        case 6:
                        case 7:
                            rightCount += 1;
                            leftCount -= 1;
                            if(getComputedStyle(document.getElementById("_"+i+"-9")).backgroundColor == _nowBlockColor){
                                document.getElementById("_"+i+"-8").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-9").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-10").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-8").setAttribute("class", "");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "currentBlockLocation");
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
            if(quit){
                break;
            }
        }
    }
    
    else if(keyCode == "ArrowDown"){
        keyEvent = "down";
        BlockMove(keyEvent);
        return;
        var cnt = 0;
        for(var i = 20; i > 0; i--){
            for(var j = 0; j <= 10; j++){
                var blockCheck = document.getElementById("_"+i+"-"+j);
                var blockCheckColor = getComputedStyle(blockCheck).backgroundColor
                /*
                var belowI = i + 1;
                if(blockCheckColor == _nowBlockColor){
                    cnt++;
                    if(nowBlockLeft.id == "_21"+"-"+ j || cnt == 5){
                        break;
                    }
                    var nowBlockLeft = document.getElementById("_"+belowI+"-"+j);
                    nowBlockLeft.style.backgroundColor = _nowBlockColor;
                    blockCheck.style.backgroundColor = defalutColor;
                    nowBlockLeft.setAttribute("class", "currentBlockLocation");
                    blockCheck.setAttribute("class", "");
                    Next++;
                }*/
            }
        }
    }
    else if(keyCode == "z" || keyCode == "Z"  && gameover != 1){
        keyEvent = "leftTrun";
        BlockMove(keyEvent);
        return;
        for(var i = 0; i <= 20; i++){
            for(var j = 1; j <= 10; j++){
                var blockCheck = document.getElementById("_"+i+"-"+j);
                var blockCheckColor = getComputedStyle(blockCheck).backgroundColor;
                /*
                if(_nowBlockColor == _iblock && blockCheck.className == "currentBlockLocation" && blockCheckColor == _nowBlockColor){
                    var _1minusI = i - 1;
                    var _1plusI = i + 1;
                    var _2plusI = i + 2;
                    var _3plusI = i + 3;
                    switch(leftCount){
                        case -12:
                        case -11:
                        case -10:
                            leftTurnCount += 1;
                            rightTurnCount -= 1;
                            break;
                        case -9:
                        case -8:
                        case -7:
                            leftTurnCount += 1;
                            rightTurnCount -= 1;
                            break;
                        case -6:
                        case -5:
                        case -4:
                            leftTurnCount += 1;
                            rightTurnCount -= 1;
                            break;
                        case -3:
                        case -2:
                        case -1:
                            leftTurnCount += 1;
                            rightTurnCount -= 1;
                            break;
                        case 0:
                        case 1:
                        case 2:
                            leftTurnCount += 1;
                            rightTurnCount -= 1;
                            if(i < 3){
                                document.getElementById("_"+1+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+2+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+3+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+4+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-5").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-4").setAttribute("class", "");
                                document.getElementById("_"+i+"-5").setAttribute("class", "");
                                document.getElementById("_"+i+"-6").setAttribute("class", "");
                                document.getElementById("_"+i+"-7").setAttribute("class", "");
                                document.getElementById("_"+1+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+2+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+3+"-5").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+4+"-5").setAttribute("class", "currentBlockLocation");
                            }   
                            else{
                                document.getElementById("_"+0+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+1+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+2+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+3+"-5").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-4").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-6").style.backgroundColor = defalutColor;
                                document.getElementById("_"+i+"-7").style.backgroundColor = defalutColor;
                            }
                            break;
                        case 3:
                        case 4:
                        case 5:
                            leftTurnCount += 1;
                            rightTurnCount -= 1;
                            break;
                        case 6:
                        case 7:
                        case 8:
                            leftTurnCount += 1;
                            rightTurnCount -= 1;
                            break;
                        default:
                            break;
                    }
                }*/
            }
        }
    }
    else if(keyCode == "x" || keyCode == "X" || keyCode == "ArrowUp" && gameover != 1){
        keyEvent = "rightTrun";
        BlockMove(keyEvent);
        return;
        for(var i = 0; i <= 20; i++){
            for(var j = 1; j <= 10; j++){
                var blockCheck = document.getElementById("_"+i+"-"+j);
                var blockCheckColor = getComputedStyle(blockCheck).backgroundColor;
                
            }
        }
    }
})

function ClassInitialization() {
    leftTurnCount = 0;
    for(var i = 0 ; i <= 20; i++){
        for(var j = 1; j <= 10; j++){
            document.getElementById("_"+i+"-"+j).setAttribute("class", "");
            document.getElementById("_"+i+"-"+j).style.color = null;
        }
    }
}

function BlockExist(){
    for(var i = 0; i <= 20; i++){
        for(var j = 1; j <= 10; j++){
            var nowBlock = document.getElementById("_"+i+"-"+j);
            var nowBlockColor = getComputedStyle(nowBlock).backgroundColor;
            if(nowBlockColor != defalutColor){
                nowBlock.setAttribute("class", "blockexist");
            }
        }
    }
}

function GameOver(){
    alert("gameover"); // 점수 랭킹 html로 이동
    gameover = 1;
    clearInterval(BlockFall);
}

function LineClear(){
    var count = 0;
    var lineclear = 0;
    for(var i = 20; i >= 0; i--){
        var _i_1 = document.getElementById("_"+i+"-1");
        var _i_2 = document.getElementById("_"+i+"-2");
        var _i_3 = document.getElementById("_"+i+"-3");
        var _i_4 = document.getElementById("_"+i+"-4");
        var _i_5 = document.getElementById("_"+i+"-5");
        var _i_6 = document.getElementById("_"+i+"-6");
        var _i_7 = document.getElementById("_"+i+"-7");
        var _i_8 = document.getElementById("_"+i+"-8");
        var _i_9 = document.getElementById("_"+i+"-9");
        var _i_10 = document.getElementById("_"+i+"-10");
        if(_i_1.className == "blockexist" && _i_2.className == "blockexist" && _i_3.className == "blockexist" && _i_4.className == "blockexist" && _i_5.className == "blockexist" && _i_6.className == "blockexist" && _i_7.className == "blockexist" && _i_8.className == "blockexist" && _i_9.className == "blockexist" && _i_10.className == "blockexist"){
            _i_1.style.backgroundColor = defalutColor;
            _i_2.style.backgroundColor = defalutColor;
            _i_3.style.backgroundColor = defalutColor;
            _i_4.style.backgroundColor = defalutColor;
            _i_5.style.backgroundColor = defalutColor;
            _i_6.style.backgroundColor = defalutColor;
            _i_7.style.backgroundColor = defalutColor;
            _i_8.style.backgroundColor = defalutColor;
            _i_9.style.backgroundColor = defalutColor;
            _i_10.style.backgroundColor = defalutColor;
            _i_1.setAttribute("class", "");
            _i_2.setAttribute("class", "");
            _i_3.setAttribute("class", "");
            _i_4.setAttribute("class", "");
            _i_5.setAttribute("class", "");
            _i_6.setAttribute("class", "");
            _i_7.setAttribute("class", "");
            _i_8.setAttribute("class", "");
            _i_9.setAttribute("class", "");
            _i_10.setAttribute("class", "");
            lineclear = i;
            count = 1;
        }
    }
    if(count == 1){
        BlockDown(lineclear);
    }
}

function BlockDown(lineclear){ //클리어된 라인위에있는 모든 블록을 내리는 함수
    var linechange = 0;
    if(lineclear >= 1){
        linechange = lineclear - 1;
    }
    else return null;

    for(var a = lineclear; a > 1; a--){
        var _i_1 = document.getElementById("_"+a+"-1");
        var _i_2 = document.getElementById("_"+a+"-2");
        var _i_3 = document.getElementById("_"+a+"-3");
        var _i_4 = document.getElementById("_"+a+"-4");
        var _i_5 = document.getElementById("_"+a+"-5");
        var _i_6 = document.getElementById("_"+a+"-6");
        var _i_7 = document.getElementById("_"+a+"-7");
        var _i_8 = document.getElementById("_"+a+"-8");
        var _i_9 = document.getElementById("_"+a+"-9");
        var _i_10 = document.getElementById("_"+a+"-10");
        var j = a - 1 ;
        var _j_1 = document.getElementById("_"+j+"-1");
        var _j_2 = document.getElementById("_"+j+"-2");
        var _j_3 = document.getElementById("_"+j+"-3");
        var _j_4 = document.getElementById("_"+j+"-4");
        var _j_5 = document.getElementById("_"+j+"-5");
        var _j_6 = document.getElementById("_"+j+"-6");
        var _j_7 = document.getElementById("_"+j+"-7");
        var _j_8 = document.getElementById("_"+j+"-8");
        var _j_9 = document.getElementById("_"+j+"-9");
        var _j_10 = document.getElementById("_"+j+"-10");

        _i_1.style.backgroundColor = _j_1.style.backgroundColor;
        _i_2.style.backgroundColor = _j_2.style.backgroundColor;
        _i_3.style.backgroundColor = _j_3.style.backgroundColor;
        _i_4.style.backgroundColor = _j_4.style.backgroundColor;
        _i_5.style.backgroundColor = _j_5.style.backgroundColor;
        _i_6.style.backgroundColor = _j_6.style.backgroundColor;
        _i_7.style.backgroundColor = _j_7.style.backgroundColor;
        _i_8.style.backgroundColor = _j_8.style.backgroundColor;
        _i_9.style.backgroundColor = _j_9.style.backgroundColor;
        _i_10.style.backgroundColor = _j_10.style.backgroundColor;
        ClassInitialization();
        BlockExist();
    }
}

function BlockMove(keyEvent){
    var canMove = true;
    var _1plusI = 0;
    var _1minusJ = 0;
    var _1plusJ = 0;
    var _2plusI = 0
    var _1minusI = 0;
    var _2minusI = 0;
    var _3plusj = 0;
    var blockCheck;
    var blockCheckDown;
    var blockCheckLeft;
    var blockCheckRight;
    var blockCheckUp;
    var blockCheckColor;
    var blockCheckDownColor;
    var blockCheck_1Down;
    var blockCheck_2Down;
    var blockCheck_1Up;
    var blockCheck_2Up;
    var blockCheck_1DownColor;
    var blockCheck_2DownColor;
    var blockCheck_1UpColor;
    var blockCheck_2UpColor;
    var blockCheck_1Left;
    var blockCheck_2Left;
    var blockCheck_1Right;
    var blockCheck_2Right;
    var blockCheck_1RightColor;
    var blockCheck_2RightColor;
    var blockCheck_1LeftColor;
    var blockCheck_2LeftColor;
    var blockCheck_3Right;
    var blockCheck_3RightColor;
    var blockCheckUpColor;

    switch(keyEvent){
        case "left":
            canMove = true;
            for(var i = 0; i <= 20; i++){
                for(var j = 1; j <= 10; j++){
                    _1minusJ = j - 1;
                    blockCheck = document.getElementById("_"+i+"-"+j);
                    blockCheckLeft = document.getElementById("_"+i+"-"+_1minusJ);
                    blockCheckColor = getComputedStyle(blockCheck).backgroundColor;
                    blockCheckLeftColor = getComputedStyle(blockCheckLeft).backgroundColor;
                    if(blockCheckColor == _nowBlockColor && blockCheck.className == "currentBlockLocation"){
                        if(blockCheckLeftColor != defalutColor && blockCheckLeftColor != _nowBlockColor && blockCheckLeft.className != "currentBlockLocation" || blockCheckLeft.className == "blockexist"){
                            canMove = false;
                            break;
                        }
                    }
                }
                if(!canMove){
                    break;
                }
            }
            if(canMove){
                for(var i = 0; i <= 20; i++){
                    for(var j = 1; j <= 10; j++){
                        _1minusJ = j - 1;
                        blockCheck = document.getElementById("_"+i+"-"+j);
                        blockCheckLeft = document.getElementById("_"+i+"-"+_1minusJ);
                        blockCheckColor = getComputedStyle(blockCheck).backgroundColor;
                        blockCheckLeftColor = getComputedStyle(blockCheckLeft).backgroundColor;
                        if(blockCheck.className == "currentBlockLocation" && blockCheckColor == _nowBlockColor){
                            blockCheckLeft.style.backgroundColor = blockCheck.style.backgroundColor;
                            blockCheckLeft.setAttribute("class","currentBlockLocation");
                            blockCheck.style.backgroundColor = defalutColor;
                            blockCheck.setAttribute("class","");
                            blockCheckLeft.style.color = blockCheck.style.color;
                            blockCheck.style.color = null;
                        }
                    }
                }
                return;
            }
            lastOrder = "left";
            break;
        case "right":
            canMove = true;
            for(var i = 20; i >= 0; i--){
                for(var j = 10; j > 0; j--){
                    _1plusJ = j + 1;
                    blockCheck = document.getElementById("_"+i+"-"+j);
                    blockCheckRight = document.getElementById("_"+i+"-"+_1plusJ);
                    blockCheckColor = getComputedStyle(blockCheck).backgroundColor;
                    blockCheckRightColor = getComputedStyle(blockCheckRight).backgroundColor;
                    if(blockCheckColor == _nowBlockColor && blockCheck.className == "currentBlockLocation"){
                        if(blockCheckRightColor != defalutColor && blockCheckRightColor != _nowBlockColor && blockCheckRight.className != "currentBlockLocation" || blockCheckRight.className == "blockexist"){
                            canMove = false;
                            break;
                        }
                    }
                }
                if(!canMove){
                    break;
                }
            }
            if(canMove){
                for(var i = 20; i >= 0; i--){
                    for(var j = 10; j > 0; j--){
                        _1plusJ = j + 1;
                        blockCheck = document.getElementById("_"+i+"-"+j);
                        blockCheckRight = document.getElementById("_"+i+"-"+_1plusJ);
                        blockCheckColor = getComputedStyle(blockCheck).backgroundColor;
                        blockCheckRightColor = getComputedStyle(blockCheckRight).backgroundColor;
                        if(blockCheck.className == "currentBlockLocation" && blockCheckColor == _nowBlockColor){
                            blockCheckRight.style.backgroundColor = blockCheck.style.backgroundColor;
                            blockCheck.style.backgroundColor = defalutColor;
                            blockCheckRight.setAttribute("class", "currentBlockLocation");
                            blockCheck.setAttribute("class", "");
                            blockCheckRight.style.color = blockCheck.style.color;
                            blockCheck.style.color = null;
                        }
                    }
                }
                return;
            }
            break;
        case "down":
            canMove = true;
            for(var i = 20; i >= 0; i--){
                for(var j = 1; j <= 10; j++){
                    _1plusI = i + 1;
                    blockCheck = document.getElementById("_"+i+"-"+j);
                    blockCheckDown = document.getElementById("_"+_1plusI+"-"+j);
                    blockCheckColor = getComputedStyle(blockCheck).backgroundColor;
                    blockCheckDownColor = getComputedStyle(blockCheckDown).backgroundColor;
                    if(blockCheck.className == "currentBlockLocation" && blockCheckColor == _nowBlockColor){
                        if(blockCheckDownColor != defalutColor && blockCheckDownColor != _nowBlockColor && blockCheckDown.className != "currentBlockLocation" || blockCheckDown.className == "blockexist"){
                            //console.log("a"+i+"_"+j);
                            canMove = false;
                            break;
                        }
                    }
                }
                if(!canMove){
                    break;
                }
            }
            //console.log(canMove);
            if(canMove){
                //console.log("a");
                for(var i = 19; i >= 0; i--){
                    for(var j = 1; j <= 10; j++){
                        _1plusI = i + 1;
                        blockCheck = document.getElementById("_"+i+"-"+j);
                        blockCheckDown = document.getElementById("_"+_1plusI+"-"+j);
                        blockCheckColor = getComputedStyle(blockCheck).backgroundColor;
                        blockCheckDownColor = getComputedStyle(blockCheckDown).backgroundColor;
                        if(blockCheck.className == "currentBlockLocation" && blockCheckColor == _nowBlockColor){
                            blockCheckDown.style.backgroundColor = blockCheck.style.backgroundColor;
                            blockCheck.style.backgroundColor = defalutColor;
                            blockCheckDown.setAttribute("class", "currentBlockLocation");
                            blockCheck.setAttribute("class", "");
                            blockCheckDown.style.color = blockCheck.style.color;
                            blockCheck.style.color = null;
                        }
                    }
                }
                return;
            }
            else{
                if(blockCreateI == 7){
                    //console.log("a");
                    blockCreateI = 0;
                    ShuffleBlock(BlockType); 
                    RdBlock = BlockType;
                }
                ClassInitialization();
                BlockExist();
                LineClear();
                BlockCreate(RdBlock);
            }
            lastOrder = "right";
            break;
        case "leftTrun":
            canMove = true;
            switch(_nowBlockColor){
                case _iblock: 
                    break;
                case _jblock:
                    break;
                case _lblock:
                    break;
                case _zblock:
                    break;
                case _sblock:
                    break;
                case _tblock:
                    canTurn = true;
                    for(var i = 1;  i <= 19; i++){
                        for(var j = 2; j <= 9; j++){
                            blockCheck = document.getElementById("_"+i+"-"+j); 
                            blockCheckColor = getComputedStyle(blockCheck).color; 
                            if(blockCheckColor == centerColor){
                                //console.log(leftTurnCount);
                                switch(leftTurnCount){
                                    case 0:
                                        if(ChangeColor(i,j,null,null,null,null,"down", null) != defalutColor){
                                            canTurn = false;
                                        }
                                        break;
                                    case 1:
                                        if(lastOrder == "rightTrun"){
                                            if(ChangeColor(i,j,null,null,null,null,"left",null) != defalutColor){
                                                canTurn = false;
                                            }
                                        }
                                        else{
                                            if(ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor){
                                                canTurn = false;
                                            }
                                        }
                                        break;
                                    case 2:
                                        if(ChangeColor(i,j,null,null,null,null,"up", null) != defalutColor){
                                            canTurn = false;
                                        }
                                        break;
                                    case 3:
                                        if(lastOrder == "rightTrun"){
                                            if(ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor){
                                                canTurn = false;
                                            }
                                        }
                                        else{
                                            if(ChangeColor(i,j,null,null,null,null,"left",null) != defalutColor){
                                                canTurn = false;
                                            }
                                        }
                                        break;
                                    default:
                                        break;
                                }
                            }
                        }
                    }
                    //console.log(canTurn);
                    if(canTurn){
                        for(var i = 1;  i <= 19; i++){
                            for(var j = 2; j <= 9; j++){
                                blockCheck = document.getElementById("_"+i+"-"+j);
                                blockCheckColor = getComputedStyle(blockCheck).color;
                                //console.log(leftTurnCount);
                                if(blockCheckColor == centerColor){
                                    console.log(leftTurnCount);
                                    switch(leftTurnCount){
                                        case 0:
                                            ChangeColor(i,j,"down", null ,"right", null, null, null);
                                            break;
                                        case 1:
                                            if(lastOrder == "rightTrun"){
                                                ChangeColor(i,j,"left", null,"down", null, null, null); 
                                                leftTurnCount = 3;
                                            }
                                            else{
                                                ChangeColor(i,j,"right", null,"up", null, null, null); 
                                            }
                                            break;
                                        case 2:
                                            ChangeColor(i,j,"up", null,"left", null, null, null); 
                                            break;
                                        case 3:
                                            if(lastOrder == "rightTrun"){
                                                ChangeColor(i,j,"right", null,"up", null, null, null); 
                                                leftTurnCount = 1;
                                            }
                                            else{
                                                ChangeColor(i,j,"left", null,"down", null, null, null); 
                                            }
                                            break;
                                        default:
                                            break;
                                    }
                                }
                            }
                        }
                        leftTurnCount++;
                        leftTurnCount%=4;
                    }
                    break
                default:
                    break;
            }
            lastOrder = "leftTrun";
            break;
        case "rightTrun":
            canMove = true;
                switch(_nowBlockColor){
                    case _iblock: 
                        break;
                    case _jblock:
                        break;
                    case _lblock:
                        break;
                    case _zblock:
                        break;
                    case _sblock:
                        break;
                    case _tblock:
                        canTurn = true;
                        for(var i = 1;  i <= 19; i++){
                            for(var j = 2; j <= 9; j++){
                                blockCheck = document.getElementById("_"+i+"-"+j); 
                                blockCheckColor = getComputedStyle(blockCheck).color; 
                                if(blockCheckColor == centerColor){
                                    console.log(leftTurnCount);
                                    switch(leftTurnCount){
                                        case 0:
                                            if(ChangeColor(i,j,null,null,null,null,"down", null) != defalutColor){
                                                canTurn = false;
                                            }
                                            break;
                                        case 1:
                                            if(lastOrder == "leftTrun"){
                                                if(ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor){
                                                    canTurn = false;
                                                }
                                            }
                                            else{
                                                if(ChangeColor(i,j,null,null,null,null,"left",null) != defalutColor){
                                                    canTurn = false;
                                                }
                                            }
                                            break;
                                        case 2:
                                            if(ChangeColor(i,j,null,null,null,null,"up", null) != defalutColor){
                                                canTurn = false;
                                            }
                                            break;
                                        case 3:
                                            if(lastOrder == "leftTrun"){
                                                if(ChangeColor(i,j,null,null,null,null,"left",null) != defalutColor){
                                                    canTurn = false;
                                                }
                                            }
                                            else{
                                                if(ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor){
                                                    canTurn = false;
                                                }
                                            }
                                            break;
                                        default:
                                            break;
                                    }
                                }
                            }
                        }
                        console.log(canTurn);
                        if(canTurn){
                            for(var i = 1;  i <= 19; i++){
                                for(var j = 2; j <= 9; j++){
                                    blockCheck = document.getElementById("_"+i+"-"+j);
                                    blockCheckColor = getComputedStyle(blockCheck).color;
                                    console.log(leftTurnCount);
                                    if(blockCheckColor == centerColor){
                                        switch(leftTurnCount){
                                            case 0:
                                                ChangeColor(i,j,"down", null,"left", null, null, null); 
                                                break;
                                            case 1:
                                                if(lastOrder == "leftTrun"){
                                                    ChangeColor(i,j,"right", null ,"down", null, null, null);
                                                    leftTurnCount = 3;
                                                }
                                                else{
                                                    ChangeColor(i,j,"left", null,"up", null, null, null); 
                                                }
                                                break;
                                            case 2:
                                                ChangeColor(i,j,"up", null,"right", null, null, null); 
                                                break;
                                            case 3:
                                                if(lastOrder == "leftTrun"){
                                                    ChangeColor(i,j,"left", null,"up", null, null, null); 
                                                    leftTurnCount = 1;
                                                }
                                                else{
                                                    ChangeColor(i,j,"right", null ,"down", null, null, null);
                                                }
                                                break;
                                            default:
                                                break;
                                        }
                                    }
                                }
                            }
                            leftTurnCount++;
                            leftTurnCount%=4;
                        }
                        break;
                    default:
                        break;
                }
            lastOrder = "rightTrun";
            break;
        default:
            break;
    }
}

function ChangeColor(i,j,_1fill, _2fill,_1blank, _2blank,_1check, _2check){
    //console.log("a");
    var _1minusI = i - 1;
    var _1plusI = i + 1;
    var _1minusJ = j - 1;
    var _1plusJ = j + 1;
    var blockCheck = document.getElementById("_"+i+"-"+j);
    var blockCheckDown = document.getElementById("_"+_1plusI+"-"+j);
    var blockCheckLeft = document.getElementById("_"+i+"-"+_1minusJ);
    var blockCheckRight = document.getElementById("_"+i+"-"+_1plusJ);
    var blockCheckUp = document.getElementById("_"+_1minusI+"-"+j);
    var leftUpDiagonal = document.getElementById("_"+_1plusI+"-"+_1minusJ);
    var rightUpDiagonal = document.getElementById("_"+_1plusI+"-"+_1plusJ);
    var leftDownDiagonal = document.getElementById("_"+_1minusI+"-"+_1minusJ);
    var rightDownDiagonal = document.getElementById("_"+_1minusI+"-"+_1plusJ);
    var rightUpDiagonalColor = getComputedStyle(rightUpDiagonal).backgroundColor;
    var leftUpDiagonalColor = getComputedStyle(leftUpDiagonal).backgroundColor;
    var rightDownDiagonalColor = getComputedStyle(rightDownDiagonal).backgroundColor;
    var leftDownDiagonalColor = getComputedStyle(leftDownDiagonal).backgroundColor;
    var blockCheckColor = getComputedStyle(blockCheck).color;
    var blockCheckDownColor = getComputedStyle(blockCheckDown).backgroundColor;
    var blockCheckUpColor = getComputedStyle(blockCheckUp).backgroundColor;
    var blockCheckLeftColor = getComputedStyle(blockCheckLeft).backgroundColor;
    var blockCheckRightColor = getComputedStyle(blockCheckRight).backgroundColor;

    switch(_1check){
        case "left" :
            return blockCheckLeftColor;
            break;
        case "right" :
            return blockCheckRightColor;
            break;
        case "down" :
            return blockCheckDownColor;
            break;
        case "up":
            return blockCheckUpColor;
            break;
        default:
            break;
    }
    switch(_1fill){
        case "left" :
            blockCheckLeft.style.background = _nowBlockColor;
            blockCheckLeft.setAttribute("class", "currentBlockLocation");
            break;
        case "right" :
            blockCheckRight.style.background = _nowBlockColor;
            blockCheckRight.setAttribute("class", "currentBlockLocation");
            break;
        case "down" :
            blockCheckDown.style.background = _nowBlockColor;
            blockCheckDown.setAttribute("class", "currentBlockLocation");
            break;
        case "up":
            blockCheckUp.style.background = _nowBlockColor;
            blockCheckUp.setAttribute("class", "currentBlockLocation");
            break;
        default:
            break;
    }
    switch(_1blank){
        case "left" :
            blockCheckLeft.style.background = defalutColor;
            blockCheckLeft.setAttribute("class", "");
            break;
        case "right" :
            blockCheckRight.style.background = defalutColor;
            blockCheckRight.setAttribute("class", "");
            break;
        case "down" :
            blockCheckDown.style.background = defalutColor;
            blockCheckDown.setAttribute("class", "");
            break;
        case "up":
            blockCheckUp.style.background = defalutColor;
            blockCheckUp.setAttribute("class", "");
            break;
        default:
            break;
    }
}

var _lineI = 19;
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
var lineClearCount = 0;
var gameover = 0;


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

var BlockFall = setInterval(function() {
    var Next = _lineI + 1;
    for(var j = 1; j <= 10; j++){
        if(_lineI == -1){
            _lineI = 20;
        }
        var _nowLine = document.getElementById("_" + _lineI + "-"+j);
        var _nowLineNext = document.getElementById("_" + Next + "-"+j);
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
        if(_nowLine.className == "currentBlockLocation"){
            if(_nowLineNextColor == defalutColor){
                if(_nowLineColor == defalutColor){
                    //alert(_nowLineNext.id);
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
                if(document.getElementById("_0-4").className == "blockexist" || document.getElementById("_0-5").className == "blockexist" || document.getElementById("_0-6").className == "blockexist" || document.getElementById("_0-7").className == "blockexist"){ // 나중에 클래스 이름을 통해 검사
                    GameOver();
                }
                _lineI = 19;
                if(blockCreateI == 7){
                    blockCreateI = 0;
                    ShuffleBlock(BlockType); 
                    RdBlock = BlockType;
                }
                ClassInitialization();
                BlockExist();
                LineClear();
                BlockCreate(RdBlock);
            }
        }
    }
    _lineI--;
}, 10) 

function BlockCreate(RdBlock){
    var _0_4 = document.getElementById("_0-4");
    var _0_5 = document.getElementById("_0-5");
    var _0_6 = document.getElementById("_0-6");
    var _0_7 = document.getElementById("_0-7");
    var _1_4 = document.getElementById("_1-4");
    var _1_5 = document.getElementById("_1-5"); 
    var _1_6 = document.getElementById("_1-6");
    for(blockCreateI; blockCreateI < 7;){
        switch(RdBlock[blockCreateI]){
            //switch(3){
            case 0: 
                leftCount = 0;
                rightCount = 0;
                _0_4.style.backgroundColor = _iblock; 
                _0_5.style.backgroundColor = _iblock;
                _0_6.style.backgroundColor = _iblock;
                _0_7.style.backgroundColor = _iblock;
                _0_4.setAttribute("class", "currentBlockLocation");
                _0_5.setAttribute("class", "currentBlockLocation");
                _0_6.setAttribute("class", "currentBlockLocation");
                _0_7.setAttribute("class", "currentBlockLocation");
                _nowBlockColor = _iblock;
                blockCreateI++
                BlockFall();
                break;
            case 1:
                leftCount = 0;
                rightCount = 0;
                _0_4.style.backgroundColor = _jblock; 
                _1_4.style.backgroundColor = _jblock;
                _1_5.style.backgroundColor = _jblock;
                _1_6.style.backgroundColor = _jblock;
                _0_4.setAttribute("class", "currentBlockLocation");
                _0_5.setAttribute("class", "currentBlockLocation");
                _0_6.setAttribute("class", "currentBlockLocation");
                _1_4.setAttribute("class", "currentBlockLocation");
                _1_5.setAttribute("class", "currentBlockLocation");
                _1_6.setAttribute("class", "currentBlockLocation");
                _nowBlockColor = _jblock;
                blockCreateI++
                BlockFall();
                break;
            case 2:
                leftCount = 0;
                rightCount = 0;
                _0_6.style.backgroundColor = _lblock;
                _1_4.style.backgroundColor = _lblock; 
                _1_5.style.backgroundColor = _lblock;
                _1_6.style.backgroundColor = _lblock;
                _0_4.setAttribute("class", "currentBlockLocation");
                _0_5.setAttribute("class", "currentBlockLocation");
                _0_6.setAttribute("class", "currentBlockLocation");
                _1_4.setAttribute("class", "currentBlockLocation");
                _1_5.setAttribute("class", "currentBlockLocation");
                _1_6.setAttribute("class", "currentBlockLocation");
                _nowBlockColor = _lblock;
                blockCreateI++
                BlockFall();
                break;
            case 3:
                leftCount = 0;
                rightCount = 0;
                _0_5.style.backgroundColor = _oblock; 
                _0_6.style.backgroundColor = _oblock;
                _1_5.style.backgroundColor = _oblock;
                _1_6.style.backgroundColor = _oblock;
                _0_5.setAttribute("class", "currentBlockLocation");
                _0_6.setAttribute("class", "currentBlockLocation");
                _1_5.setAttribute("class", "currentBlockLocation");
                _1_6.setAttribute("class", "currentBlockLocation");
                _nowBlockColor = _oblock;
                blockCreateI++
                BlockFall();
                break;
            case 4:
                leftCount = 0;
                rightCount = 0;
                _0_5.style.backgroundColor = _sblock; 
                _0_6.style.backgroundColor = _sblock;
                _1_4.style.backgroundColor = _sblock;
                _1_5.style.backgroundColor = _sblock;
                _0_4.setAttribute("class", "currentBlockLocation");
                _0_5.setAttribute("class", "currentBlockLocation");
                _0_6.setAttribute("class", "currentBlockLocation");
                _1_4.setAttribute("class", "currentBlockLocation");
                _1_5.setAttribute("class", "currentBlockLocation");
                _1_6.setAttribute("class", "currentBlockLocation");
                _nowBlockColor = _sblock;
                blockCreateI++
                BlockFall();
                break;
            case 5:
                leftCount = 0;
                rightCount = 0;
                _0_5.style.backgroundColor = _tblock;
                _1_4.style.backgroundColor = _tblock; 
                _1_5.style.backgroundColor = _tblock;
                _1_6.style.backgroundColor = _tblock;
                _0_4.setAttribute("class", "currentBlockLocation");
                _0_5.setAttribute("class", "currentBlockLocation");
                _0_6.setAttribute("class", "currentBlockLocation");
                _1_4.setAttribute("class", "currentBlockLocation");
                _1_5.setAttribute("class", "currentBlockLocation");
                _1_6.setAttribute("class", "currentBlockLocation");
                _nowBlockColor = _tblock;
                blockCreateI++
                BlockFall();
                break;
            case 6:
                leftCount = 0;
                rightCount = 0;
                _0_4.style.backgroundColor = _zblock; 
                _0_5.style.backgroundColor = _zblock;
                _1_5.style.backgroundColor = _zblock;
                _1_6.style.backgroundColor = _zblock;
                _0_4.setAttribute("class", "currentBlockLocation");
                _0_5.setAttribute("class", "currentBlockLocation");
                _0_6.setAttribute("class", "currentBlockLocation");
                _1_4.setAttribute("class", "currentBlockLocation");
                _1_5.setAttribute("class", "currentBlockLocation");
                _1_6.setAttribute("class", "currentBlockLocation");
                _nowBlockColor = _zblock;
                blockCreateI++
                BlockFall();
                break;
        }
    }  
}

document.addEventListener('keydown', (event) => {
    const keyCode = event.key;
    if(keyCode == "ArrowLeft" && gameover != 1){
        for(var i = 0; i < 20; i++){
            for(var j = 1; j <= 10; j++){
                var blockCheck = document.getElementById("_"+i+"-"+j);
                var blockCheckColor = getComputedStyle(blockCheck).backgroundColor;
                if(leftCount >= 9 || blockCheck.className != "currentBlockLocation"){
                    continue;
                }
                else if(_nowBlockColor == _tblock && blockCheckColor == _nowBlockColor){
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
                    }
                }
                else if(_nowBlockColor == _lblock && blockCheckColor == _nowBlockColor){
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
                    }
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
                                document.getElementById("_"+i+"-10").style.backgroundColor = _nowBlockColor;
                                document.getElementById("_"+i+"-7").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-8").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-9").setAttribute("class", "currentBlockLocation");
                                document.getElementById("_"+i+"-10").setAttribute("class", "currentBlockLocation");
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
                    }
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
        }
    }
    else if(keyCode == "ArrowRight" && gameover != 1){
        for(var i = 0; i < 20; i++){
            for(var j = 10; j >= 0; j--){
                var blockCheck = document.getElementById("_"+i+"-"+j);
                var blockCheckColor = getComputedStyle(blockCheck).backgroundColor;
                if(rightCount >= 12 && blockCheck.className != "currentBlockLocation"){
                    continue;
                }
                else if(_nowBlockColor == _tblock && blockCheckColor == _nowBlockColor && blockCheck.className == "currentBlockLocation"){
                    switch(rightCount){
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
                    }
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
                    switch(rightCount){
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
                    }
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
        }
    }
    /*
    else if(keyCode == "ArrowDown"){
        var cnt = 0;
        for(var i = 20; i > 0; i--){
            for(var j = 0; j <= 10; j++){
                var blockCheck = document.getElementById("_"+i+"-"+j);
                var blockCheckColor = getComputedStyle(blockCheck).backgroundColor
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
                }
            }
        }
    }*/
})

function ClassInitialization() {
    for(var i = 0 ; i <= 20; i++){
        for(var j = 1; j <= 10; j++){
            document.getElementById("_"+i+"-"+j).setAttribute("class", "");
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
    
}

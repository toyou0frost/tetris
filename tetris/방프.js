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
var nextBlockType = [0, 1, 2, 3, 4, 5, 6];
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
var find = false;
var combo = 0;
var lineClearCheck = false;

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

function ShowNextBlock(num){
    var nextimg = document.getElementById("_nxtBlock-img");
    nextimg.setAttribute("src", num + ".png");
}

setInterval(function BlockFall() {
    if(ing == true){
        return;
    }
    document.getElementById("comboBox").innerHTML = "";
    ing = true;
    BlockMove("down");
    ing = false;
    return;
}, 3000) 

var test = 1;
function BlockCreate(RdBlock){
    var _0_4 = document.getElementById("_0-4");
    var _0_5 = document.getElementById("_0-5");
    var _0_6 = document.getElementById("_0-6");
    var _0_7 = document.getElementById("_0-7");
    var _1_4 = document.getElementById("_1-4");
    var _1_5 = document.getElementById("_1-5"); 
    var _1_6 = document.getElementById("_1-6");
    var imgnumcheck = 0;
    for(blockCreateI; blockCreateI < 7;){
        if(blockCreateI > 6){
            ShuffleBlock(BlockType);
            imgnumcheck = parseInt(BlockType[0]);
            ShowNextBlock(imgnumcheck);
            nextBlockType = BlockType;
        }
        if(blockCreateI + 1 < 7){
            if(blockCreateI >= 0){
                imgnumcheck = parseInt(RdBlock[blockCreateI+1]);
            }
        }
        ShowNextBlock(imgnumcheck);
        switch(RdBlock[blockCreateI]){
        //switch(1){
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
                if(_1_4.className == "blockexist" || _1_5.className == "blockexist" || _1_5.className == "blockexist"){
                    _0_4.style.backgroundColor = _jblock;
                    _0_5.style.backgroundColor = _jblock;
                    _0_6.style.backgroundColor = _jblock;
                    GameOver();
                }
                else if(_0_4.className != "blockexist" && _0_5.className != "blockexist" && _0_6.className != "blockexist"){
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
                if(_1_4.className == "blockexist" || _1_5.className == "blockexist" || _1_5.className == "blockexist"){
                    _0_4.style.backgroundColor = _jblock;
                    _0_5.style.backgroundColor = _jblock;
                    _0_6.style.backgroundColor = _jblock;
                    GameOver();
                }
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
                if(_1_5.className == "blockexist" || _1_6.className == "blockexist"){
                    _0_5.style.backgroundColor = _jblock;
                    _0_6.style.backgroundColor = _jblock;
                    GameOver();
                }
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
                if(_1_4.className == "blockexist" || _1_5.className == "blockexist"){
                    _0_5.style.backgroundColor = _jblock;
                    _0_4.style.backgroundColor = _jblock;
                    GameOver();
                }
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
                    _0_5.style.color = centerColor;
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
                if(_1_4.className == "blockexist" || _1_5.className == "blockexist" || _1_6.className == "blockexist"){
                    _0_6.style.backgroundColor = _jblock;
                    _0_5.style.backgroundColor = _jblock;
                    _0_4.style.backgroundColor = _jblock;
                    GameOver();
                }
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
                if(_1_4.className == "blockexist" || _1_5.className == "blockexist" || _1_6.className == "blockexist"){
                    _0_6.style.backgroundColor = _jblock;
                    _0_5.style.backgroundColor = _jblock;
                    _0_4.style.backgroundColor = _jblock;
                    GameOver();
                }
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
    if(keyCode == " "){
        keyEvent = "space"
        quit = false;
        BlockMove(keyEvent);
    }
    else if(keyCode == "ArrowLeft" && gameover != 1){
        keyEvent = "left";
        quit = false;
        BlockMove(keyEvent);
        return;
    }
    else if(keyCode == "ArrowRight" && gameover != 1){
        //console.log("right");
        keyEvent = "right";
        quit = false;
        BlockMove(keyEvent);
        return;
    }
    
    else if(keyCode == "ArrowDown"){
        keyEvent = "down";
        quit = false;
        BlockMove(keyEvent);
        return;
    }
    else if(keyCode == "z" || keyCode == "Z"  && gameover != 1){
        keyEvent = "leftTurn";
        quit = false;
        BlockMove(keyEvent);
        return;
    }
    else if(keyCode == "x" || keyCode == "X" || keyCode == "ArrowUp" && gameover != 1){
        keyEvent = "rightTurn";
        quit = false;
        BlockMove(keyEvent);
        return;
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
    if(document.getElementById("_0-4").className == "blockexist" || document.getElementById("_0-5").className == "blockexist" || document.getElementById("_0-6").className == "blockexist" || document.getElementById("_0-7").className == "blockexist"){ // 나중에 클래스 이름을 통해 검사
        GameOver();
    }

}

function GameOver(){
    alert("gameover"); // 점수 랭킹 html로 이동
    gameover = 1;
    clearInterval(BlockFall);
}

function LineClear(){
    lineClearCheck = false;
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
        if(count == 1){
            lineClearCheck = true;
            combo++;
            document.getElementById("comboBox").innerHTML = combo+"combo";
            BlockDown(lineclear);
            count = 0;
        }
    }
    if(!lineClearCheck){
        combo = 0;
    }
}

function BlockDown(lineclear){ //클리어된 라인위에있는 모든 블록을 내리는 함수
    console.log("내려는 오는데 왜 지워지지를 않니");
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
                    RdBlock = nextBlockType;
                }
                ClassInitialization();
                BlockExist();
                LineClear();
                LineClear();
                LineClear();
                LineClear();
                BlockCreate(RdBlock);
            }
            lastOrder = "right";
            break;
        case "leftTurn":
            canMove = true;
            switch(_nowBlockColor){
                case _iblock: 
                canTurn = true;
                find = false;
                for(var i = 2; i <= 19; i++){
                    for(var j = 2; j <= 8; j++){
                        blockCheck = document.getElementById("_"+i+"-"+j); 
                        blockCheckColor = getComputedStyle(blockCheck).color;
                        if(blockCheckColor == centerColor){
                            find = true;
                            switch(leftTurnCount){
                                case 0:
                                case 2:
                                    if(ChangeColor(i,j,null,null,null,null,"up", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"upup", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"down", null) != defalutColor){
                                        canTurn = false;
                                    }
                                    break;
                                case 1:
                                case 3:
                                    if(lastOrder == "rightTurn"){
                                        if(ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightright", null) != defalutColor){
                                            canTurn = false;
                                        }
                                    }
                                    else{
                                        if(ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightright", null) != defalutColor){
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
                if(!find){
                    canTurn = false;
                }
                if(canTurn){
                    for(var i = 2;  i <= 19; i++){
                        for(var j = 2; j <= 8; j++){
                            blockCheck = document.getElementById("_"+i+"-"+j);
                            blockCheckColor = getComputedStyle(blockCheck).color;
                            //console.log(leftTurnCount);
                            if(blockCheckColor == centerColor){
                                //console.log(leftTurnCount);
                                switch(leftTurnCount){
                                    case 0:
                                    case 2:
                                        //console.log("a");
                                        ChangeColor(i,j,"up","upup", "right", "rightright", null, null);
                                        ChangeColor(i,j,"down",null, "left", null, null, null);
                                        break;
                                    case 1:
                                    case 3:
                                        if(lastOrder == "rightTurn"){
                                            ChangeColor(i,j,"right","left", "down", "up", null, null);
                                            ChangeColor(i,j,"rightright",null, "upup", null, null, null);
                                            leftTurnCount = 3;
                                        }
                                        else{
                                            ChangeColor(i,j,"right","left", "down", "up", null, null);
                                            ChangeColor(i,j,"rightright",null, "upup", null, null, null);
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
                case _jblock:
                    canTurn = true;
                    find = false;
                    for(var i = 1; i <= 19; i++){
                        for(var j = 2; j <= 9; j++){
                            blockCheck = document.getElementById("_"+i+"-"+j); 
                            blockCheckColor = getComputedStyle(blockCheck).color;
                            if(blockCheckColor == centerColor){
                                find = true;
                                switch(leftTurnCount){
                                    case 0:
                                        if(ChangeColor(i,j,null,null,null,null,"up", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"down", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"leftDown", null) != defalutColor){
                                            canTurn = false;
                                        }
                                        break;
                                    case 1:
                                        if(lastOrder == "rightTurn"){
                                            if(ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"leftUp", null) != defalutColor){
                                                canTurn = false;
                                            }
                                        }
                                        else{
                                            if(ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightDown", null) != defalutColor){
                                                canTurn = false;
                                            }
                                        }
                                        break;
                                    case 2:
                                        if(ChangeColor(i,j,null,null,null,null,"up", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"down", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightUp", null) != defalutColor){
                                            canTurn = false;
                                        }
                                        break;
                                    case 3:
                                        if(lastOrder == "rightTurn"){
                                            if(ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightDown", null) != defalutColor){
                                                canTurn = false;
                                            }
                                        }
                                        else{
                                            if(ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"leftUp", null) != defalutColor){
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
                    if(!find){
                        canTurn = false;
                    }
                    if(canTurn){
                        for(var i = 1;  i <= 19; i++){
                            for(var j = 2; j <= 9; j++){
                                blockCheck = document.getElementById("_"+i+"-"+j);
                                blockCheckColor = getComputedStyle(blockCheck).color;
                                //console.log(leftTurnCount);
                                if(blockCheckColor == centerColor){
                                    //console.log(leftTurnCount);
                                    switch(leftTurnCount){
                                        case 0:
                                            //console.log("a");
                                            ChangeColor(i,j,"up","leftDown", "right", "left", null, null);
                                            ChangeColor(i,j,"down",null, "leftUp", null, null, null);
                                            break;
                                        case 1:
                                            if(lastOrder == "rightTurn"){
                                                ChangeColor(i,j,"left","right", "up", "down", null, null); 
                                                ChangeColor(i,j,"leftUp",null, "rightUp", null, null, null);
                                                leftTurnCount = 3;
                                            }
                                            else{
                                                ChangeColor(i,j,"right","left", "down", "up", null, null);
                                                ChangeColor(i,j,"rightDown",null, "leftDown", null, null, null);
                                            }
                                            break;
                                        case 2:
                                            ChangeColor(i,j,"up","down", "right", "left", null, null); 
                                            ChangeColor(i,j,"rightUp",null, "rightDown", null, null, null);
                                            break;
                                        case 3:
                                            if(lastOrder == "rightTurn"){
                                                ChangeColor(i,j,"right","left", "down", "up", null, null);
                                                ChangeColor(i,j,"rightDown",null, "leftDown", null, null, null);
                                                leftTurnCount = 1;
                                            }
                                            else{
                                                ChangeColor(i,j,"left","right", "up", "down", null, null); 
                                                ChangeColor(i,j,"leftUp",null, "rightUp", null, null, null);
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
                case _lblock:
                    canTurn = true;
                    find = false;
                    for(var i = 1; i <= 19; i++){
                        for(var j = 2; j <= 9; j++){
                            blockCheck = document.getElementById("_"+i+"-"+j); 
                            blockCheckColor = getComputedStyle(blockCheck).color;
                            if(blockCheckColor == centerColor){
                                find = true;
                                switch(leftTurnCount){
                                    case 0:
                                        if(ChangeColor(i,j,null,null,null,null,"up", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"leftUp", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"down", null) != defalutColor){
                                            canTurn = false;
                                        }
                                        break;
                                    case 1:
                                        if(lastOrder == "rightTurn"){
                                            if(ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightUp", null) != defalutColor){
                                                canTurn = false;
                                            }
                                        }
                                        else{
                                            if(ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"leftDown", null) != defalutColor){
                                                canTurn = false;
                                            }
                                        }
                                        break;
                                    case 2:
                                        if(ChangeColor(i,j,null,null,null,null,"up", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"down", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightDown", null) != defalutColor){
                                            canTurn = false;
                                        }
                                        break;
                                    case 3:
                                        if(lastOrder == "rightTurn"){
                                            if(ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"leftDown", null) != defalutColor){
                                                canTurn = false;
                                            }
                                        }
                                        else{
                                            if(ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightUp", null) != defalutColor){
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
                    if(!find){
                        canTurn = false;
                    }
                    if(canTurn){
                        for(var i = 1;  i <= 19; i++){
                            for(var j = 2; j <= 9; j++){
                                blockCheck = document.getElementById("_"+i+"-"+j);
                                blockCheckColor = getComputedStyle(blockCheck).color;
                                //console.log(leftTurnCount);
                                if(blockCheckColor == centerColor){
                                    //console.log(leftTurnCount);
                                    switch(leftTurnCount){
                                        case 0:
                                            //console.log("a");
                                            ChangeColor(i,j,"up","leftUp", "right", "left", null, null);
                                            ChangeColor(i,j,"down",null, "rightUp", null, null, null);
                                            break;
                                        case 1:
                                            if(lastOrder == "rightTurn"){
                                                ChangeColor(i,j,"left","right", "up", "down", null, null); 
                                                ChangeColor(i,j,"rightUp",null, "rightDown", null, null, null);
                                                leftTurnCount = 3;
                                            }
                                            else{
                                                ChangeColor(i,j,"right","left", "down", "up", null, null);
                                                ChangeColor(i,j,"leftDown",null, "leftUp", null, null, null);
                                            }
                                            break;
                                        case 2:
                                            ChangeColor(i,j,"up","down", "right", "left", null, null); 
                                            ChangeColor(i,j,"rightDown",null, "leftDown", null, null, null);
                                            break;
                                        case 3:
                                            if(lastOrder == "rightTurn"){
                                                ChangeColor(i,j,"right","left", "down", "up", null, null);
                                                ChangeColor(i,j,"leftDown",null, "leftUp", null, null, null);
                                                leftTurnCount = 1;
                                            }
                                            else{
                                                ChangeColor(i,j,"left","right", "up", "down", null, null); 
                                                ChangeColor(i,j,"rightUp",null, "rightDown", null, null, null);
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
                case _zblock:
                    canTurn = true;
                    find = false;
                    for(var i = 1; i <= 19; i++){
                        for(var j = 2; j <= 9; j++){
                            blockCheck = document.getElementById("_"+i+"-"+j); 
                            blockCheckColor = getComputedStyle(blockCheck).color;
                            if(blockCheckColor == centerColor){
                                find = true;
                                switch(leftTurnCount){
                                    case 0:
                                        if(ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor  || ChangeColor(i,j,null,null,null,null,"rightUp", null) != defalutColor){
                                            canTurn = false;
                                        }
                                        break;
                                    case 1:
                                        if(lastOrder == "rightTurn"){
                                            if(ChangeColor(i,j,null,null,null,null,"down", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightDown", null) != defalutColor){
                                                canTurn = false;
                                            }
                                        }
                                        else{
                                            if(ChangeColor(i,j,null,null,null,null,"up", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"leftUp", null) != defalutColor){
                                                canTurn = false;
                                            }
                                        }
                                        break;
                                    case 2:
                                        if(ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"leftDown", null) != defalutColor){
                                            canTurn = false;
                                        }
                                        break;
                                    case 3:
                                        if(lastOrder == "rightTurn"){
                                            if(ChangeColor(i,j,null,null,null,null,"up", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"leftUp", null) != defalutColor){
                                                canTurn = false;
                                            }
                                        }
                                        else{
                                            if(ChangeColor(i,j,null,null,null,null,"down", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightDown", null) != defalutColor){
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
                    if(!find){
                        canTurn = false;
                    }
                    if(canTurn){
                        for(var i = 1;  i <= 19; i++){
                            for(var j = 2; j <= 9; j++){
                                blockCheck = document.getElementById("_"+i+"-"+j);
                                blockCheckColor = getComputedStyle(blockCheck).color;
                                //console.log(leftTurnCount);
                                if(blockCheckColor == centerColor){
                                    //console.log(leftTurnCount);
                                    switch(leftTurnCount){
                                        case 0:
                                            //console.log("a");
                                            ChangeColor(i,j,"right","rightUp", "left", "rightDown", null, null);
                                            break;
                                        case 1:
                                            if(lastOrder == "rightTurn"){
                                                ChangeColor(i,j,"down","rightDown", "up", "leftDown", null, null); 
                                                leftTurnCount = 3;
                                            }
                                            else{
                                                ChangeColor(i,j,"up","leftUp", "down", "rightUp", null, null);
                                            }
                                            break;
                                        case 2:
                                            ChangeColor(i,j,"left","leftDown", "right", "leftUp", null, null); 
                                            break;
                                        case 3:
                                            if(lastOrder == "rightTurn"){
                                                ChangeColor(i,j,"up","leftUp", "down", "rightUp", null, null);
                                                leftTurnCount = 1;
                                            }
                                            else{
                                                ChangeColor(i,j,"down","rightDown", "up", "leftDown", null, null); 
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
                case _sblock:
                    canTurn = true;
                    find = false;
                    for(var i = 1; i <= 19; i++){
                        for(var j = 2; j <= 9; j++){
                            blockCheck = document.getElementById("_"+i+"-"+j); 
                            blockCheckColor = getComputedStyle(blockCheck).color;
                            if(blockCheckColor == centerColor){
                                find = true;
                                switch(leftTurnCount){
                                    case 0:
                                        if(ChangeColor(i,j,null,null,null,null,"up", null) != defalutColor  || ChangeColor(i,j,null,null,null,null,"rightDown", null) != defalutColor){
                                            canTurn = false;
                                        }
                                        break;
                                    case 1:
                                        if(lastOrder == "rightTurn"){
                                            if(ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"leftDown", null) != defalutColor){
                                                canTurn = false;
                                            }
                                        }
                                        else{
                                            if(ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightUp", null) != defalutColor){
                                                canTurn = false;
                                            }
                                        }
                                        break;
                                    case 2:
                                        if(ChangeColor(i,j,null,null,null,null,"down", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"leftUp", null) != defalutColor){
                                            canTurn = false;
                                        }
                                        break;
                                    case 3:
                                        if(lastOrder == "rightTurn"){
                                            if(ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightUp", null) != defalutColor){
                                                canTurn = false;
                                            }
                                        }
                                        else{
                                            if(ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"leftDown", null) != defalutColor){
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
                    if(!find){
                        canTurn = false;
                    }
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
                                            console.log("a");
                                            ChangeColor(i,j,"up","rightDown", "down", "leftDown", null, null);
                                            break;
                                        case 1:
                                            if(lastOrder == "rightTurn"){
                                                ChangeColor(i,j,"right","leftDown", "left", "leftUp", null, null); 
                                                leftTurnCount = 3;
                                            }
                                            else{
                                                ChangeColor(i,j,"left","rightUp", "right", "rightDown", null, null);
                                            }
                                            break;
                                        case 2:
                                            ChangeColor(i,j,"down","leftUp", "up", "rightUp", null, null); 
                                            break;
                                        case 3:
                                            if(lastOrder == "rightTurn"){
                                                ChangeColor(i,j,"left","rightUp", "right", "rightDown", null, null);
                                                leftTurnCount = 1;
                                            }
                                            else{
                                                ChangeColor(i,j,"right","leftDown", "left", "leftUp", null, null); 
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
                case _tblock:
                    canTurn = true;
                    find = false;
                    for(var i = 1;  i <= 19; i++){
                        for(var j = 2; j <= 9; j++){
                            blockCheck = document.getElementById("_"+i+"-"+j); 
                            blockCheckColor = getComputedStyle(blockCheck).color; 
                            if(blockCheckColor == centerColor){
                                find = true;
                                //console.log(leftTurnCount);
                                switch(leftTurnCount){
                                    case 0:
                                        if(ChangeColor(i,j,null,null,null,null,"down", null) != defalutColor){
                                            canTurn = false;
                                        }
                                        break;
                                    case 1:
                                        if(lastOrder == "rightTurn"){
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
                                        if(lastOrder == "rightTurn"){
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
                    if(!find){
                        canTurn = false;
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
                                            if(lastOrder == "rightTurn"){
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
                                            if(lastOrder == "rightTurn"){
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
                    return;
            }
            lastOrder = "leftTurn";
            break;
        case "rightTurn":
            canMove = true;
                switch(_nowBlockColor){
                    case _iblock: 
                    canTurn = true;
                    find = false;
                    for(var i = 2; i <= 19; i++){
                        for(var j = 2; j <= 8; j++){
                            blockCheck = document.getElementById("_"+i+"-"+j); 
                            blockCheckColor = getComputedStyle(blockCheck).color;
                            if(blockCheckColor == centerColor){
                                find = true;
                                switch(leftTurnCount){
                                    case 0:
                                    case 2:
                                        if(ChangeColor(i,j,null,null,null,null,"up", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"upup", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"down", null) != defalutColor){
                                            canTurn = false;
                                        }
                                        break;
                                    case 1:
                                    case 3:
                                        if(lastOrder == "rightTurn"){
                                            if(ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightright", null) != defalutColor){
                                                canTurn = false;
                                            }
                                        }
                                        else{
                                            if(ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightright", null) != defalutColor){
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
                    if(!find){
                        canTurn = false;
                    }
                    if(canTurn){
                        for(var i = 2;  i <= 19; i++){
                            for(var j = 2; j <= 8; j++){
                                blockCheck = document.getElementById("_"+i+"-"+j);
                                blockCheckColor = getComputedStyle(blockCheck).color;
                                //console.log(leftTurnCount);
                                if(blockCheckColor == centerColor){
                                    //console.log(leftTurnCount);
                                    switch(leftTurnCount){
                                        case 0:
                                        case 2:
                                            //console.log("a");
                                            ChangeColor(i,j,"up","upup", "right", "rightright", null, null);
                                            ChangeColor(i,j,"down",null, "left", null, null, null);
                                            break;
                                        case 1:
                                        case 3:
                                            if(lastOrder == "rightTurn"){
                                                ChangeColor(i,j,"right","left", "down", "up", null, null);
                                                ChangeColor(i,j,"rightright",null, "upup", null, null, null);
                                                leftTurnCount = 3;
                                            }
                                            else{
                                                ChangeColor(i,j,"right","left", "down", "up", null, null);
                                                ChangeColor(i,j,"rightright",null, "upup", null, null, null);
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
                    case _jblock:
                        canTurn = true;
                        find = false;
                        for(var i = 1; i <= 19; i++){
                            for(var j = 2; j <= 9; j++){
                                blockCheck = document.getElementById("_"+i+"-"+j); 
                                blockCheckColor = getComputedStyle(blockCheck).color;
                                console.log(leftTurnCount);
                                if(blockCheckColor == centerColor){
                                    find = true;
                                    switch(leftTurnCount){
                                        case 0:
                                            if(ChangeColor(i,j,null,null,null,null,"up", null) != defalutColor  || ChangeColor(i,j,null,null,null,null,"down", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightUp", null) != defalutColor){
                                                canTurn = false;
                                            }
                                            break;
                                        case 1:
                                            if(lastOrder == "leftTurn"){
                                                //console.log("d");
                                                if(ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"leftUp", null) != defalutColor){
                                                    canTurn = false;
                                                }
                                            }
                                            else{
                                                if(ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightDown", null) != defalutColor){
                                                    canTurn = false;
                                                }
                                            }
                                            break;  
                                        case 2:
                                            if(ChangeColor(i,j,null,null,null,null,"up", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"down", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"leftDown", null) != defalutColor){
                                                canTurn = false;
                                            }
                                            break;
                                        case 3:
                                            if(lastOrder == "leftTurn"){
                                                if(ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightDown", null) != defalutColor){
                                                    canTurn = false;
                                                }
                                            }
                                            else{
                                                if(ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"leftUp", null) != defalutColor){
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
                        if(!find){
                            canTurn = false;
                        }
                        console.log(canTurn);
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
                                                //console.log("a");
                                                ChangeColor(i,j,"up","down", "right", "left", null, null);
                                                ChangeColor(i,j,"rightUp", null, "leftUp", null, null, null);
                                                break;
                                            case 1:
                                                if(lastOrder == "leftTurn"){
                                                    ChangeColor(i,j,"left","right", "up", "leftDown", null, null);
                                                    ChangeColor(i,j,"leftUp", null, "down", null, null, null);
                                                    leftTurnCount = 3;
                                                }
                                                else{
                                                    ChangeColor(i,j,"right","left", "up", "rightUp", null, null); 
                                                    ChangeColor(i,j,"rightDown", null, "down", null, null, null);
                                                }
                                                break;
                                            case 2:
                                                ChangeColor(i,j,"down","leftDown", "right", "left", null, null); 
                                                ChangeColor(i,j,"up", null, "rightDown", null, null, null);
                                                break;
                                            case 3:
                                                if(lastOrder == "leftTurn"){
                                                    ChangeColor(i,j,"right","left", "up", "rightUp", null, null); 
                                                    ChangeColor(i,j,"rightDown", null, "down", null, null, null);
                                                    leftTurnCount = 1;
                                                }
                                                else{
                                                    ChangeColor(i,j,"left","right", "up", "leftDown", null, null);
                                                    ChangeColor(i,j,"leftUp", null, "down", null, null, null);
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
                    case _lblock:
                        canTurn = true;
                        find = false;
                        for(var i = 1; i <= 19; i++){
                            for(var j = 2; j <= 9; j++){
                                blockCheck = document.getElementById("_"+i+"-"+j); 
                                blockCheckColor = getComputedStyle(blockCheck).color;
                                console.log(leftTurnCount);
                                if(blockCheckColor == centerColor){
                                    find = true;
                                    switch(leftTurnCount){
                                        case 0:
                                            if(ChangeColor(i,j,null,null,null,null,"up", null) != defalutColor  || ChangeColor(i,j,null,null,null,null,"down", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightDown", null) != defalutColor){
                                                canTurn = false;
                                            }
                                            break;
                                        case 1:
                                            if(lastOrder == "leftTurn"){
                                                //console.log("d");
                                                if(ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightUp", null) != defalutColor){
                                                    canTurn = false;
                                                }
                                            }
                                            else{
                                                if(ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"leftDown", null) != defalutColor){
                                                    canTurn = false;
                                                }
                                            }
                                            break;  
                                        case 2:
                                            if(ChangeColor(i,j,null,null,null,null,"down", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"up", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"leftUp", null) != defalutColor){
                                                canTurn = false;
                                                console.log("a");
                                            }
                                            break;
                                        case 3:
                                            if(lastOrder == "leftTurn"){
                                                if(ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"leftDown", null) != defalutColor){
                                                    canTurn = false;
                                                }
                                            }
                                            else{
                                                if(ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightUp", null) != defalutColor){
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
                        if(!find){
                            canTurn = false;
                        }
                        console.log(canTurn);
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
                                                //console.log("a");
                                                ChangeColor(i,j,"up","down", "right", "left", null, null);
                                                ChangeColor(i,j,"rightDown", null, "rightUp", null, null, null);
                                                break;
                                            case 1:
                                                if(lastOrder == "leftTurn"){
                                                    ChangeColor(i,j,"left","right", "up", "leftUp", null, null);
                                                    ChangeColor(i,j,"rightUp", null, "down", null, null, null);
                                                    leftTurnCount = 3;
                                                }
                                                else{
                                                    ChangeColor(i,j,"right","left", "up", "rightDown", null, null); 
                                                    ChangeColor(i,j,"leftDown", null, "down", null, null, null);
                                                }
                                                break;
                                            case 2:
                                                ChangeColor(i,j,"down","leftUp", "right", "left", null, null); 
                                                ChangeColor(i,j,"up", null, "leftDown", null, null, null);
                                                break;
                                            case 3:
                                                if(lastOrder == "leftTurn"){
                                                    ChangeColor(i,j,"right","left", "up", "rightDown", null, null); 
                                                    ChangeColor(i,j,"leftDown", null, "down", null, null, null);
                                                    leftTurnCount = 1;
                                                }
                                                else{
                                                    ChangeColor(i,j,"left","right", "up", "leftUp", null, null);
                                                    ChangeColor(i,j,"rightUp", null, "down", null, null, null);
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
                    case _zblock:
                    canTurn = true;
                    find = false;
                    for(var i = 1; i <= 19; i++){
                        for(var j = 2; j <= 9; j++){
                            blockCheck = document.getElementById("_"+i+"-"+j); 
                            blockCheckColor = getComputedStyle(blockCheck).color;
                            console.log(leftTurnCount);
                            if(blockCheckColor == centerColor){
                                find = true;
                                switch(leftTurnCount){
                                    case 0:
                                        if(ChangeColor(i,j,null,null,null,null,"up", null) != defalutColor  || ChangeColor(i,j,null,null,null,null,"leftDown", null) != defalutColor){
                                            canTurn = false;
                                        }
                                        break;
                                    case 1:
                                        if(lastOrder == "leftTurn"){
                                            //console.log("d");
                                            if(ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightDown", null) != defalutColor){
                                                canTurn = false;
                                            }
                                        }
                                        else{
                                            if(ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"leftUp", null) != defalutColor){
                                                canTurn = false;
                                            }
                                        }
                                        break;  
                                    case 2:
                                        if(ChangeColor(i,j,null,null,null,null,"down", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightUp", null) != defalutColor){
                                            canTurn = false;
                                            console.log("a");
                                        }
                                        break;
                                    case 3:
                                        if(lastOrder == "leftTurn"){
                                            if(ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"leftUp", null) != defalutColor){
                                                canTurn = false;
                                            }
                                        }
                                        else{
                                            if(ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightDown", null) != defalutColor){
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
                    if(!find){
                        canTurn = false;
                    }
                    console.log(canTurn);
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
                                            console.log("a");
                                            ChangeColor(i,j,"up","leftDown", "down", "rightDown", null, null);
                                            break;
                                        case 1:
                                            if(lastOrder == "leftTurn"){
                                                ChangeColor(i,j,"left","rightDown", "right", "rightUp", null, null);
                                                leftTurnCount = 3;
                                            }
                                            else{
                                                ChangeColor(i,j,"right","leftUp", "left", "leftDown", null, null); 
                                            }
                                            break;
                                        case 2:
                                            ChangeColor(i,j,"down","rightUp", "up", "leftUp", null, null); 
                                            break;
                                        case 3:
                                            if(lastOrder == "leftTurn"){
                                                ChangeColor(i,j,"right","leftUp", "left", "leftDown", null, null); 
                                                leftTurnCount = 1;
                                            }
                                            else{
                                                ChangeColor(i,j,"left","rightDown", "right", "rightUp", null, null);
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
                    case _sblock:
                        canTurn = true;
                        find = false;
                        for(var i = 1; i <= 19; i++){
                            for(var j = 2; j <= 9; j++){
                                if(i < 2){
                                    break;
                                }
                                blockCheck = document.getElementById("_"+i+"-"+j); 
                                blockCheckColor = getComputedStyle(blockCheck).color;
                                console.log(leftTurnCount);
                                if(blockCheckColor == centerColor){
                                    find = true;
                                    switch(leftTurnCount){
                                        case 0:
                                            if(ChangeColor(i,j,null,null,null,null,"left", null) != defalutColor  || ChangeColor(i,j,null,null,null,null,"leftUp", null) != defalutColor){
                                                canTurn = false;
                                            }
                                            break;
                                        case 1:
                                            if(lastOrder == "leftTurn"){
                                                //console.log("d");
                                                if(ChangeColor(i,j,null,null,null,null,"down", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"leftDown", null) != defalutColor){
                                                    canTurn = false;
                                                }
                                            }
                                            else{
                                                if(ChangeColor(i,j,null,null,null,null,"up", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightUp", null) != defalutColor){
                                                    canTurn = false;
                                                }
                                            }
                                            break;  
                                        case 2:
                                            if(ChangeColor(i,j,null,null,null,null,"right", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightDown", null) != defalutColor){
                                                canTurn = false;
                                                console.log("a");
                                            }
                                            break;
                                        case 3:
                                            if(lastOrder == "leftTurn"){
                                                if(ChangeColor(i,j,null,null,null,null,"up", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"rightUp", null) != defalutColor){
                                                    canTurn = false;
                                                }
                                            }
                                            else{
                                                if(ChangeColor(i,j,null,null,null,null,"down", null) != defalutColor || ChangeColor(i,j,null,null,null,null,"leftDown", null) != defalutColor){
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
                        if(!find){
                            canTurn = false;
                        }
                        console.log(canTurn);
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
                                                console.log("a");
                                                ChangeColor(i,j,"left","leftUp", "right", "leftDown", null, null);
                                                break;
                                            case 1:
                                                if(lastOrder == "leftTurn"){
                                                    ChangeColor(i,j,"down","leftDown", "up", "rightDown", null, null);
                                                    leftTurnCount = 3;
                                                }
                                                else{
                                                    ChangeColor(i,j,"up","rightUp", "down", "leftUp", null, null); 
                                                }
                                                break;
                                            case 2:
                                                ChangeColor(i,j,"right","rightDown", "left", "rightUp", null, null); 
                                                break;
                                            case 3:
                                                if(lastOrder == "leftTurn"){
                                                    ChangeColor(i,j,"up","rightUp", "down", "leftUp", null, null); 
                                                    leftTurnCount = 1;
                                                }
                                                else{
                                                    ChangeColor(i,j,"down","leftDown", "up", "rightDown", null, null);
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
                    case _tblock:
                        canTurn = true;
                        find = false;
                        for(var i = 1;  i <= 19; i++){
                            for(var j = 2; j <= 9; j++){
                                blockCheck = document.getElementById("_"+i+"-"+j); 
                                blockCheckColor = getComputedStyle(blockCheck).color; 
                                if(blockCheckColor == centerColor){
                                    console.log(leftTurnCount);
                                    find = true;
                                    switch(leftTurnCount){
                                        case 0:
                                            if(ChangeColor(i,j,null,null,null,null,"down", null) != defalutColor){
                                                canTurn = false;
                                            }
                                            break;
                                        case 1:
                                            if(lastOrder == "leftTurn"){
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
                                            if(lastOrder == "leftTurn"){
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
                        if(!find){
                            canTurn = false;
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
                                                if(lastOrder == "leftTurn"){
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
                                                if(lastOrder == "leftTurn"){
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
                        return;
                }
            lastOrder = "rightTurn";
            break;
        case "space":
                for(var i = 0; i < 20; i++){
                    BlockMove("down");
                }
            break;
        default:
            break;
    }
}

function ChangeColor(i,j,_1fill, _2fill,_1blank, _2blank,_1check, _2check){
    //console.log("a");
    var _1minusI = i - 1;
    var _2minusI = i - 2;
    var _1plusI = i + 1;
    var _1minusJ = j - 1;
    var _1plusJ = j + 1;
    var _2plusJ = j + 2;
    var blockCheck = document.getElementById("_"+i+"-"+j);
    var blockCheckDown = document.getElementById("_"+_1plusI+"-"+j);
    var blockCheckLeft = document.getElementById("_"+i+"-"+_1minusJ);
    var blockCheckRight = document.getElementById("_"+i+"-"+_1plusJ);
    var blockCheckUp = document.getElementById("_"+_1minusI+"-"+j);
    var leftUp = document.getElementById("_"+_1minusI+"-"+_1minusJ);
    var rightUp = document.getElementById("_"+_1minusI+"-"+_1plusJ);
    var leftDown = document.getElementById("_"+_1plusI+"-"+_1minusJ);
    var rightDown = document.getElementById("_"+_1plusI+"-"+_1plusJ);
    var rightUpColor = getComputedStyle(rightUp).backgroundColor;
    var leftUpColor = getComputedStyle(leftUp).backgroundColor;
    var rightDownColor = getComputedStyle(rightDown).backgroundColor;
    var leftDownColor = getComputedStyle(leftDown).backgroundColor;
    var blockCheckColor = getComputedStyle(blockCheck).color;
    var blockCheckDownColor = getComputedStyle(blockCheckDown).backgroundColor;
    var blockCheckUpColor = getComputedStyle(blockCheckUp).backgroundColor;
    var blockCheckLeftColor = getComputedStyle(blockCheckLeft).backgroundColor;
    var blockCheckRightColor = getComputedStyle(blockCheckRight).backgroundColor;
    if(_2minusI >= 0){
        var blockCheckUpUp = document.getElementById("_"+_2minusI+"-"+j);
        var blockCheckUpUpColor = getComputedStyle(blockCheckUpUp).backgroundColor;
    }
    if(_2plusJ < 11){
        var blockCheckRightRight = document.getElementById("_"+i+"-"+_2plusJ);
        var blockCheckRightRightColor = getComputedStyle(blockCheckRightRight).backgroundColor;
    }
    if(_1minusI < 0 || _1minusJ < 1 || _1plusJ > 10){
        canTurn = false;
        canMove = false;
        console.log(":");
        return;
    }
    switch(_1check){
        case "left" :
            return blockCheckLeftColor;
            break;
        case "right" :
            return blockCheckRightColor;
            break;
        case "rightright" :
            return blockCheckRightRightColor;
            break;
        case "down" :
            return blockCheckDownColor;
            break;
        case "up":
            return blockCheckUpColor;
            break;
        case "upup":
            return blockCheckUpUpColor;
            break;
        case "leftUp":
            return leftUpColor;
            break;
        case "leftDown":
            return leftDownColor;
            break;
        case "rightUp":
            return rightUpColor;
            break;
        case "rightDown":
            return rightDownColor;
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
        case "rightright" :
            blockCheckRightRight.style.background = _nowBlockColor;
            blockCheckRightRight.setAttribute("class", "currentBlockLocation");
            break;
        case "down" :
            blockCheckDown.style.background = _nowBlockColor;
            blockCheckDown.setAttribute("class", "currentBlockLocation");
            break;
        case "up":
            blockCheckUp.style.background = _nowBlockColor;
            blockCheckUp.setAttribute("class", "currentBlockLocation");
            break;
        case "upup":
            blockCheckUpUp.style.background = _nowBlockColor;
            blockCheckUpUp.setAttribute("class", "currentBlockLocation");
            break;
        case "leftUp":
            leftUp.style.background = _nowBlockColor;
            leftUp.setAttribute("class", "currentBlockLocation");
            break;
        case "leftDown":
            leftDown.style.background = _nowBlockColor;
            leftDown.setAttribute("class", "currentBlockLocation");
            break;
        case "rightUp":
            rightUp.style.background = _nowBlockColor;
            rightUp.setAttribute("class", "currentBlockLocation");
            break;
        case "rightDown":
            rightDown.style.background = _nowBlockColor;
            rightDown.setAttribute("class", "currentBlockLocation");
            break;
        default:
            break;
    }
    switch(_2fill){
        case "left" :
            blockCheckLeft.style.background = _nowBlockColor;
            blockCheckLeft.setAttribute("class", "currentBlockLocation");
            break;
        case "right" :
            blockCheckRight.style.background = _nowBlockColor;
            blockCheckRight.setAttribute("class", "currentBlockLocation");
            break;
        case "rightright" :
            blockCheckRightRight.style.background = _nowBlockColor;
            blockCheckRightRight.setAttribute("class", "currentBlockLocation");
            break;
        case "down" :
            blockCheckDown.style.background = _nowBlockColor;
            blockCheckDown.setAttribute("class", "currentBlockLocation");
            break;
        case "up":
            blockCheckUp.style.background = _nowBlockColor;
            blockCheckUp.setAttribute("class", "currentBlockLocation");
            break;
        case "upup":
            blockCheckUpUp.style.background = _nowBlockColor;
            blockCheckUpUp.setAttribute("class", "currentBlockLocation");
            break;
        case "leftUp":
            leftUp.style.background = _nowBlockColor;
            leftUp.setAttribute("class", "currentBlockLocation");
            break;
        case "leftDown":
            leftDown.style.background = _nowBlockColor;
            leftDown.setAttribute("class", "currentBlockLocation");
            break;
        case "rightUp":
            rightUp.style.background = _nowBlockColor;
            rightUp.setAttribute("class", "currentBlockLocation");
            break;
        case "rightDown":
            rightDown.style.background = _nowBlockColor;
            rightDown.setAttribute("class", "currentBlockLocation");
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
        case "rightright" :
            blockCheckRightRight.style.background = defalutColor;
            blockCheckRightRight.setAttribute("class", "");
            break;
        case "down" :
            blockCheckDown.style.background = defalutColor;
            blockCheckDown.setAttribute("class", "");
            break;
        case "up":
            blockCheckUp.style.background = defalutColor;
            blockCheckUp.setAttribute("class", "");
            break;
        case "upup":
            blockCheckUpUp.style.background = defalutColor;
            blockCheckUpUp.setAttribute("class", "");
            break;
        case "leftUp":
            leftUp.style.background = defalutColor;
            leftUp.setAttribute("class", "");
            break;
        case "leftDown":
            leftDown.style.background = defalutColor;
            leftDown.setAttribute("class", "");
            break;
        case "rightUp":
            rightUp.style.background = defalutColor;
            rightUp.setAttribute("class", "");
            break;
        case "rightDown":
            rightDown.style.background = defalutColor;
            rightDown.setAttribute("class", "");
            break;
        default:
            break;
    }
    switch(_2blank){
        case "left" :
            blockCheckLeft.style.background = defalutColor;
            blockCheckLeft.setAttribute("class", "");
            break;
        case "right" :
            blockCheckRight.style.background = defalutColor;
            blockCheckRight.setAttribute("class", "");
            break;
        case "rightright" :
            blockCheckRightRight.style.background = defalutColor;
            blockCheckRightRight.setAttribute("class", "");
            break;
        case "down" :
            blockCheckDown.style.background = defalutColor;
            blockCheckDown.setAttribute("class", "");
            break;
        case "up":
            blockCheckUp.style.background = defalutColor;
            blockCheckUp.setAttribute("class", "");
            break;
        case "upup":
            blockCheckUpUp.style.background = defalutColor;
            blockCheckUpUp.setAttribute("class", "");
            break;
        case "leftUp":
            leftUp.style.background = defalutColor;
            leftUp.setAttribute("class", "");
            break;
        case "leftDown":
            leftDown.style.background = defalutColor;
            leftDown.setAttribute("class", "");
            break;
        case "rightUp":
            rightUp.style.background = defalutColor;
            rightUp.setAttribute("class", "");
            break;
        case "rightDown":
            rightDown.style.background = defalutColor;
            rightDown.setAttribute("class", "");
            break;
        default:
            break;
    }
}

function aud_play_pause() { 
    var myAudio = document.getElementById("myAudio"); 
    if (myAudio.paused) { 
        myAudio.play();
        document.getElementById("_play").innerText = 'BGM Pause';
    } 
    else { 
        myAudio.pause(); 
        document.getElementById("_play").innerText = 'BGM Play';
    } 
} 
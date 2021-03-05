let _lineI = 19;
const centerColor = "rgb(0, 255, 254)";
const defalutColor = "rgb(32, 32, 32)";
const _iblock = "rgb(0, 255, 255)";
const _jblock = "rgb(0, 0, 255)";
const _lblock = "rgb(255, 140, 0)";
const _oblock = "rgb(255, 215, 0)";
const _sblock = "rgb(152, 251, 152)";
const _tblock = "rgb(128, 0, 128)";
const _zblock = "rgb(255, 0, 0)";
let _nowBlockColor;
let BlockType = [0, 1, 2, 3, 4, 5, 6];
let nextBlockType = [0, 1, 2, 3, 4, 5, 6];
let RdBlock = BlockType;
let blockCreateI = 0;
let leftCount = 0;
let rightCount = 0;
let leftTurnCount = 0;
let rightTurnCount = 0;
let lineClearCount = 0;
let gameover = 0;
let ing = false; 
let stop = false;
let keyEvent = null;
let blockMoveOK = false;
let quit = false;
let spin = false;
let canTurn = false;
let lastOrder;
let find = false;
let combo = 0;
let lineClearCheck = false;
let holdBlankStatus = true; // 홀드칸이 비어있는 상태
let holddingBlock; 
let findBlock = new Array(4);
let blockHoldTF = false;

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
    let nextimg = document.getElementById("_nxtBlock-img");
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

let test = 1;
function BlockCreate(RdBlock){
    let _0_4 = document.getElementById("_0-4");
    let _0_5 = document.getElementById("_0-5");
    let _0_6 = document.getElementById("_0-6");
    let _0_7 = document.getElementById("_0-7");
    let _1_4 = document.getElementById("_1-4");
    let _1_5 = document.getElementById("_1-5"); 
    let _1_6 = document.getElementById("_1-6");
    let imgnumcheck = 0;
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
        if(blockHoldTF){
            blockHoldTF = false;
            blockCreateI--;
            switch(holddingBlock){
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
                    _0_4.style.backgroundColor = _lblock;
                    _0_5.style.backgroundColor = _lblock;
                    _0_6.style.backgroundColor = _lblock;
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
                    _0_5.style.backgroundColor = _oblock;
                    _0_6.style.backgroundColor = _oblock;
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
                    _0_5.style.backgroundColor = _sblock;
                    _0_4.style.backgroundColor = _sblock;
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
                    _0_6.style.backgroundColor = _tblock;
                    _0_5.style.backgroundColor = _tblock;
                    _0_4.style.backgroundColor = _tblock;
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
                    _0_6.style.backgroundColor = _zblock;
                    _0_5.style.backgroundColor = _zblock;
                    _0_4.style.backgroundColor = _zblock;
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
    else switch(RdBlock[blockCreateI]){
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
                    _0_4.style.backgroundColor = _lblock;
                    _0_5.style.backgroundColor = _lblock;
                    _0_6.style.backgroundColor = _lblock;
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
                    _0_5.style.backgroundColor = _oblock;
                    _0_6.style.backgroundColor = _oblock;
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
                    _0_5.style.backgroundColor = _sblock;
                    _0_4.style.backgroundColor = _sblock;
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
                    _0_6.style.backgroundColor = _tblock;
                    _0_5.style.backgroundColor = _tblock;
                    _0_4.style.backgroundColor = _tblock;
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
                    _0_6.style.backgroundColor = _zblock;
                    _0_5.style.backgroundColor = _zblock;
                    _0_4.style.backgroundColor = _zblock;
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
    else if(keyCode == "Shift"){
        keyEvent = "Shift";
        quit = false;
        BlockHold(keyEvent);
    }
})

function ClassInitialization() {
    leftTurnCount = 0;
    for(let i = 0 ; i <= 20; i++){
        for(let j = 1; j <= 10; j++){
            document.getElementById("_"+i+"-"+j).setAttribute("class", "");
            document.getElementById("_"+i+"-"+j).style.color = null;
        }
    }
}

function BlockExist(){
    for(let i = 0; i <= 20; i++){
        for(let j = 1; j <= 10; j++){
            let nowBlock = document.getElementById("_"+i+"-"+j);
            let nowBlockColor = getComputedStyle(nowBlock).backgroundColor;
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
    let count = 0;
    let lineclear = 0;
    for(let i = 20; i >= 0; i--){
        let _i_1 = document.getElementById("_"+i+"-1");
        let _i_2 = document.getElementById("_"+i+"-2");
        let _i_3 = document.getElementById("_"+i+"-3");
        let _i_4 = document.getElementById("_"+i+"-4");
        let _i_5 = document.getElementById("_"+i+"-5");
        let _i_6 = document.getElementById("_"+i+"-6");
        let _i_7 = document.getElementById("_"+i+"-7");
        let _i_8 = document.getElementById("_"+i+"-8");
        let _i_9 = document.getElementById("_"+i+"-9");
        let _i_10 = document.getElementById("_"+i+"-10");
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
    let linechange = 0;
    if(lineclear >= 1){
        linechange = lineclear - 1;
    }
    else return null;

    for(let a = lineclear; a > 1; a--){
        let _i_1 = document.getElementById("_"+a+"-1");
        let _i_2 = document.getElementById("_"+a+"-2");
        let _i_3 = document.getElementById("_"+a+"-3");
        let _i_4 = document.getElementById("_"+a+"-4");
        let _i_5 = document.getElementById("_"+a+"-5");
        let _i_6 = document.getElementById("_"+a+"-6");
        let _i_7 = document.getElementById("_"+a+"-7");
        let _i_8 = document.getElementById("_"+a+"-8");
        let _i_9 = document.getElementById("_"+a+"-9");
        let _i_10 = document.getElementById("_"+a+"-10");
        let j = a - 1 ;
        let _j_1 = document.getElementById("_"+j+"-1");
        let _j_2 = document.getElementById("_"+j+"-2");
        let _j_3 = document.getElementById("_"+j+"-3");
        let _j_4 = document.getElementById("_"+j+"-4");
        let _j_5 = document.getElementById("_"+j+"-5");
        let _j_6 = document.getElementById("_"+j+"-6");
        let _j_7 = document.getElementById("_"+j+"-7");
        let _j_8 = document.getElementById("_"+j+"-8");
        let _j_9 = document.getElementById("_"+j+"-9");
        let _j_10 = document.getElementById("_"+j+"-10");
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
    let canMove = true;
    let _1plusI = 0;
    let _1minusJ = 0;
    let _1plusJ = 0;
    let _2plusI = 0
    let _1minusI = 0;
    let _2minusI = 0;
    let _3plusj = 0;
    let blockCheck;
    let blockCheckDown;
    let blockCheckLeft;
    let blockCheckRight;
    let blockCheckUp;
    let blockCheckColor;
    let blockCheckDownColor;
    let blockCheck_1Down;
    let blockCheck_2Down;
    let blockCheck_1Up;
    let blockCheck_2Up;
    let blockCheck_1DownColor;
    let blockCheck_2DownColor;
    let blockCheck_1UpColor;
    let blockCheck_2UpColor;
    let blockCheck_1Left;
    let blockCheck_2Left;
    let blockCheck_1Right;
    let blockCheck_2Right;
    let blockCheck_1RightColor;
    let blockCheck_2RightColor;
    let blockCheck_1LeftColor;
    let blockCheck_2LeftColor;
    let blockCheck_3Right;
    let blockCheck_3RightColor;
    let blockCheckUpColor;

    switch(keyEvent){
        case "left":
            canMove = true;
            for(let i = 0; i <= 20; i++){
                for(let j = 1; j <= 10; j++){
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
                for(let i = 0; i <= 20; i++){
                    for(let j = 1; j <= 10; j++){
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
            for(let i = 20; i >= 0; i--){
                for(let j = 10; j > 0; j--){
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
                for(let i = 20; i >= 0; i--){
                    for(let j = 10; j > 0; j--){
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
            lastOrder = "right";
            break;
        case "down":
            canMove = true;
            for(let i = 20; i >= 0; i--){
                for(let j = 1; j <= 10; j++){
                    _1plusI = i + 1;
                    blockCheck = document.getElementById("_"+i+"-"+j);
                    blockCheckDown = document.getElementById("_"+_1plusI+"-"+j);
                    blockCheckColor = getComputedStyle(blockCheck).backgroundColor;
                    blockCheckDownColor = getComputedStyle(blockCheckDown).backgroundColor;
                    if(blockCheck.className == "currentBlockLocation" && blockCheckColor == _nowBlockColor){
                        if(blockCheckDownColor != defalutColor && blockCheckDownColor != _nowBlockColor && blockCheckDown.className != "currentBlockLocation" || blockCheckDown.className == "blockexist"){
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
                for(let i = 19; i >= 0; i--){
                    for(let j = 1; j <= 10; j++){
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
            break;
        case "leftTurn":
            canMove = true;
            switch(_nowBlockColor){
                case _iblock: 
                canTurn = true;
                find = false;
                for(let i = 2; i <= 19; i++){
                    for(let j = 2; j <= 8; j++){
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
                    for(let i = 2;  i <= 19; i++){
                        for(let j = 2; j <= 8; j++){
                            blockCheck = document.getElementById("_"+i+"-"+j);
                            blockCheckColor = getComputedStyle(blockCheck).color;
                            if(blockCheckColor == centerColor){
                                switch(leftTurnCount){
                                    case 0:
                                    case 2:
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
                    for(let i = 1; i <= 19; i++){
                        for(let j = 2; j <= 9; j++){
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
                        for(let i = 1;  i <= 19; i++){
                            for(let j = 2; j <= 9; j++){
                                blockCheck = document.getElementById("_"+i+"-"+j);
                                blockCheckColor = getComputedStyle(blockCheck).color;
                                if(blockCheckColor == centerColor){
                                    switch(leftTurnCount){
                                        case 0:
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
                    for(let i = 1; i <= 19; i++){
                        for(let j = 2; j <= 9; j++){
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
                        for(let i = 1;  i <= 19; i++){
                            for(let j = 2; j <= 9; j++){
                                blockCheck = document.getElementById("_"+i+"-"+j);
                                blockCheckColor = getComputedStyle(blockCheck).color;
                                if(blockCheckColor == centerColor){
                                    switch(leftTurnCount){
                                        case 0:
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
                    for(let i = 1; i <= 19; i++){
                        for(let j = 2; j <= 9; j++){
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
                        for(let i = 1;  i <= 19; i++){
                            for(let j = 2; j <= 9; j++){
                                blockCheck = document.getElementById("_"+i+"-"+j);
                                blockCheckColor = getComputedStyle(blockCheck).color;
                                if(blockCheckColor == centerColor){
                                    switch(leftTurnCount){
                                        case 0:
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
                    for(let i = 1; i <= 19; i++){
                        for(let j = 2; j <= 9; j++){
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
                        for(let i = 1;  i <= 19; i++){
                            for(let j = 2; j <= 9; j++){
                                blockCheck = document.getElementById("_"+i+"-"+j);
                                blockCheckColor = getComputedStyle(blockCheck).color;
                                if(blockCheckColor == centerColor){
                                    switch(leftTurnCount){
                                        case 0:
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
                    for(let i = 1;  i <= 19; i++){
                        for(let j = 2; j <= 9; j++){
                            blockCheck = document.getElementById("_"+i+"-"+j); 
                            blockCheckColor = getComputedStyle(blockCheck).color; 
                            if(blockCheckColor == centerColor){
                                find = true;
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
                    if(canTurn){
                        for(let i = 1;  i <= 19; i++){
                            for(let j = 2; j <= 9; j++){
                                blockCheck = document.getElementById("_"+i+"-"+j);
                                blockCheckColor = getComputedStyle(blockCheck).color;
                                if(blockCheckColor == centerColor){
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
                    for(let i = 2; i <= 19; i++){
                        for(let j = 2; j <= 8; j++){
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
                        for(let i = 2;  i <= 19; i++){
                            for(let j = 2; j <= 8; j++){
                                blockCheck = document.getElementById("_"+i+"-"+j);
                                blockCheckColor = getComputedStyle(blockCheck).color;
                                if(blockCheckColor == centerColor){
                                    switch(leftTurnCount){
                                        case 0:
                                        case 2:
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
                        for(let i = 1; i <= 19; i++){
                            for(let j = 2; j <= 9; j++){
                                blockCheck = document.getElementById("_"+i+"-"+j); 
                                blockCheckColor = getComputedStyle(blockCheck).color;
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
                        if(canTurn){
                            for(let i = 1;  i <= 19; i++){
                                for(let j = 2; j <= 9; j++){
                                    blockCheck = document.getElementById("_"+i+"-"+j);
                                    blockCheckColor = getComputedStyle(blockCheck).color;
                                    if(blockCheckColor == centerColor){
                                        switch(leftTurnCount){
                                            case 0:
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
                        for(let i = 1; i <= 19; i++){
                            for(let j = 2; j <= 9; j++){
                                blockCheck = document.getElementById("_"+i+"-"+j); 
                                blockCheckColor = getComputedStyle(blockCheck).color;
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
                        if(canTurn){
                            for(let i = 1;  i <= 19; i++){
                                for(let j = 2; j <= 9; j++){
                                    blockCheck = document.getElementById("_"+i+"-"+j);
                                    blockCheckColor = getComputedStyle(blockCheck).color;
                                    if(blockCheckColor == centerColor){
                                        switch(leftTurnCount){
                                            case 0:
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
                    for(let i = 1; i <= 19; i++){
                        for(let j = 2; j <= 9; j++){
                            blockCheck = document.getElementById("_"+i+"-"+j); 
                            blockCheckColor = getComputedStyle(blockCheck).color;
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
                    if(canTurn){
                        for(let i = 1;  i <= 19; i++){
                            for(let j = 2; j <= 9; j++){
                                blockCheck = document.getElementById("_"+i+"-"+j);
                                blockCheckColor = getComputedStyle(blockCheck).color;
                                if(blockCheckColor == centerColor){
                                    switch(leftTurnCount){
                                        case 0:
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
                        for(let i = 1; i <= 19; i++){
                            for(let j = 2; j <= 9; j++){
                                if(i < 2){
                                    break;
                                }
                                blockCheck = document.getElementById("_"+i+"-"+j); 
                                blockCheckColor = getComputedStyle(blockCheck).color;
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
                        if(canTurn){
                            for(let i = 1;  i <= 19; i++){
                                for(let j = 2; j <= 9; j++){
                                    blockCheck = document.getElementById("_"+i+"-"+j);
                                    blockCheckColor = getComputedStyle(blockCheck).color;
                                    if(blockCheckColor == centerColor){
                                        switch(leftTurnCount){
                                            case 0:
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
                        for(let i = 1;  i <= 19; i++){
                            for(let j = 2; j <= 9; j++){
                                blockCheck = document.getElementById("_"+i+"-"+j); 
                                blockCheckColor = getComputedStyle(blockCheck).color; 
                                if(blockCheckColor == centerColor){
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
                        if(canTurn){
                            for(let i = 1;  i <= 19; i++){
                                for(let j = 2; j <= 9; j++){
                                    blockCheck = document.getElementById("_"+i+"-"+j);
                                    blockCheckColor = getComputedStyle(blockCheck).color;
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
                for(let i = 0; i < 20; i++){
                    BlockMove("down");
                }
            break;
        default:
            break;
    }
}

function ChangeColor(i,j,_1fill, _2fill,_1blank, _2blank,_1check, _2check){
    let _1minusI = i - 1;
    let _2minusI = i - 2;
    let _1plusI = i + 1;
    let _1minusJ = j - 1;
    let _1plusJ = j + 1;
    let _2plusJ = j + 2;
    let blockCheck = document.getElementById("_"+i+"-"+j);
    let blockCheckDown = document.getElementById("_"+_1plusI+"-"+j);
    let blockCheckLeft = document.getElementById("_"+i+"-"+_1minusJ);
    let blockCheckRight = document.getElementById("_"+i+"-"+_1plusJ);
    let blockCheckUp = document.getElementById("_"+_1minusI+"-"+j);
    let leftUp = document.getElementById("_"+_1minusI+"-"+_1minusJ);
    let rightUp = document.getElementById("_"+_1minusI+"-"+_1plusJ);
    let leftDown = document.getElementById("_"+_1plusI+"-"+_1minusJ);
    let rightDown = document.getElementById("_"+_1plusI+"-"+_1plusJ);
    let rightUpColor = getComputedStyle(rightUp).backgroundColor;
    let leftUpColor = getComputedStyle(leftUp).backgroundColor;
    let rightDownColor = getComputedStyle(rightDown).backgroundColor;
    let leftDownColor = getComputedStyle(leftDown).backgroundColor;
    let blockCheckColor = getComputedStyle(blockCheck).color;
    let blockCheckDownColor = getComputedStyle(blockCheckDown).backgroundColor;
    let blockCheckUpColor = getComputedStyle(blockCheckUp).backgroundColor;
    let blockCheckLeftColor = getComputedStyle(blockCheckLeft).backgroundColor;
    let blockCheckRightColor = getComputedStyle(blockCheckRight).backgroundColor;
    let blockCheckUpUp;
    let blockCheckUpUpColor;
    let blockCheckRightRight;
    let blockCheckRightRightColor;
    if(_2minusI >= 0){
        blockCheckUpUp = document.getElementById("_"+_2minusI+"-"+j);
        blockCheckUpUpColor = getComputedStyle(blockCheckUpUp).backgroundColor;
    }
    if(_2plusJ < 11){
        blockCheckRightRight = document.getElementById("_"+i+"-"+_2plusJ);
        blockCheckRightRightColor = getComputedStyle(blockCheckRightRight).backgroundColor;
    }
    if(_1minusI < 0 || _1minusJ < 1 || _1plusJ > 10){
        canTurn = false;
        canMove = false;
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
    let myAudio = document.getElementById("myAudio"); 
    if (myAudio.paused) { 
        myAudio.play();
        document.getElementById("_play").innerText = 'BGM Pause';
    } 
    else { 
        myAudio.pause(); 
        document.getElementById("_play").innerText = 'BGM Play';
    } 
} 

const TransparentBlockCreate = () => { // 블록이 내려올 위치 보여주는 함수
    
}

const BlockHold = () => { // 블록 홀딩 기능
    if(holdBlankStatus === true){ // 홀드칸이  비어있는 상태
        switch (_nowBlockColor){
            case _iblock:
                holddingBlock = 0;
                break;
            case _jblock:
                holddingBlock = 1;
                break;
            case _lblock:
                holddingBlock = 2;
                break;
            case _oblock:
                holddingBlock = 3;
                break;
            case _sblock:
                holddingBlock = 4;
                break;
            case _tblock:
                holddingBlock = 5;
                break;
            case _zblock:
                holddingBlock = 6;
                break;
        }
        holdBlankStatus = false;
        FindNowBlock();
        if(findBlock[0] === undefined){
            return;
        }
        findBlock[0].style.background = defalutColor;
        findBlock[0].setAttribute("class", "");
        findBlock[1].style.background = defalutColor;
        findBlock[1].setAttribute("class", "");
        findBlock[2].style.background = defalutColor;
        findBlock[2].setAttribute("class", "");
        findBlock[3].style.background = defalutColor;
        findBlock[3].setAttribute("class", "");

        if(blockCreateI == 7){
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
    else if(holdBlankStatus === false){ // 홀드칸에 블록이 있는 상태
        let swap;
        switch (_nowBlockColor){
            case _iblock:
                swap = holddingBlock;
                holddingBlock = 0;
                break;
            case _jblock:
                swap = holddingBlock;
                holddingBlock = 1;
                break;
            case _lblock:
                swap = holddingBlock;
                holddingBlock = 2;
                break;
            case _oblock:
                swap = holddingBlock;
                holddingBlock = 3;
                break;
            case _sblock:
                swap = holddingBlock;
                holddingBlock = 4;
                break;
            case _tblock:
                swap = holddingBlock;
                holddingBlock = 5;
                break;
            case _zblock:
                swap = holddingBlock;
                holddingBlock = 6;
                break;
        }

        FindNowBlock();
        if(findBlock[0] === undefined){
            return;
        }
        findBlock[0].style.background = defalutColor;
        findBlock[0].setAttribute("class", "");
        findBlock[1].style.background = defalutColor;
        findBlock[1].setAttribute("class", "");
        findBlock[2].style.background = defalutColor;
        findBlock[2].setAttribute("class", "");
        findBlock[3].style.background = defalutColor;
        findBlock[3].setAttribute("class", "");

        if(blockCreateI == 7){
            blockCreateI = 0;
            RdBlock = nextBlockType;
        }
        ClassInitialization();
        BlockExist();
        LineClear();
        LineClear();
        LineClear();
        LineClear();
        blockHoldTF = true;
        BlockCreate(swap);
    }
}

const FindNowBlock = () => {
    let arrayI = 0;
    for(let i = 0; i <= 20; i++){
        for(let j = 1; j <= 10; j++){
            let _findBlock = document.getElementById("_"+i+"-"+j);
            let findBlockColor = getComputedStyle(_findBlock).color;
            if(findBlockColor == _nowBlockColor && _findBlock.className == "currentBlockLocation"){
                findBlock[arrayI] = _findBlock;
                console.log(findBlock[arrayI]);
                arrayI++;
            }
            if(arrayI > 3){
                return;
            }
        }
    }
}

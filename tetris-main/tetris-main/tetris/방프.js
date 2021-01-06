var _lineI = 0;
var RdBlock = 0;

//!< 블록 타입 설정 array 추가함
var BlockType = [0, 1, 2, 3, 4, 5, 6];

var defalutColor = "rgb(0, 0, 0)";
var _iblock = "rgb(0, 255, 255)";
var _jblock = "rgb(0, 0, 255)";
var _lblock = "rgb(255, 140, 0)";
var _oblock = "rgb(255, 215, 0)";
var _sblock = "rgb(152, 251, 152)";
var _tblock = "rgb(128, 0, 128)";
var _zblock = "rgb(255, 0, 0)";
var _nowBlockColor;

onload = function () {
    BlockCreate(RdBlock);
}


setInterval(function BlockFall() {
    var Next = _lineI + 1;
    for (var i = 1; i <= 10; i++) {
        var _nowLine = document.getElementById("_" + _lineI + "-" + i);
        var _nowLineNext = document.getElementById("_" + Next + "-" + i);
        var _nowLineNextColor = getComputedStyle(_nowLineNext).backgroundColor;
        var _nowLineColor = getComputedStyle(_nowLine).backgroundColor;
        if (_nowLine.id == "_20-" + i) {
            _lineI = 0;
            BlockCreate(RdBlock);
        }
        if (_nowLineNextColor == defalutColor) {
            if (_nowLineColor == _nowBlockColor) {
                _nowLineNext.style.backgroundColor = _nowBlockColor;
                _nowLine.style.backgroundColor = defalutColor;
            }
        }
        else {
            if (_nowLine.id == "_0-4" || _nowLine.id == "_0-5" || _nowLine.id == "_0-6" || _nowLine.id == "_0-7") {
                alert("gameover");
            }
            _lineI = 0;
            BlockCreate(RdBlock);
        }
    }
    _lineI++;
}, 50)


function BlockCreate(RdBlock) {
    var _0_4 = document.getElementById("_0-4");
    var _0_5 = document.getElementById("_0-5");
    var _0_6 = document.getElementById("_0-6");
    var _0_7 = document.getElementById("_0-7");
    var _1_4 = document.getElementById("_1-4");
    var _1_5 = document.getElementById("_1-5");
    var _1_6 = document.getElementById("_1-6");
    switch (RdBlock) {
        case 0:
            _0_4.style.backgroundColor = _iblock;
            _0_5.style.backgroundColor = _iblock;
            _0_6.style.backgroundColor = _iblock;
            _0_7.style.backgroundColor = _iblock;
            _nowBlockColor = _iblock;
            BlockFall();
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

document.addEventListener('keydown', (event) => {
    const keyCode = event.key;
    if (keyCode == "ArrowLeft") {
        var cnt = 0
        for (var i = 0; i < 20; i++) {
            for (var j = 1; j <= 10; j++) {
                var blockCheck = document.getElementById("_" + i + "-" + j);
                var blockCheckColor = getComputedStyle(blockCheck).backgroundColor
                var leftJ = j - 1;
                var nowBlockLeft = document.getElementById("_" + i + "-" + leftJ);
                if (blockCheckColor == _nowBlockColor) {
                    cnt++;
                    if (nowBlockLeft.id == "_" + i + "-0" || cnt == 5) {
                        break;
                    }
                    nowBlockLeft.style.backgroundColor = _nowBlockColor;
                    blockCheck.style.backgroundColor = defalutColor;
                }
            }
        }
    }
    else if (keyCode == "ArrowRight") {
        var cnt = 0;
        for (var i = 0; i < 20; i++) {
            for (var j = 10; j >= 0; j--) {
                var blockCheck = document.getElementById("_" + i + "-" + j);
                var blockCheckColor = getComputedStyle(blockCheck).backgroundColor
                var leftJ = j + 1;
                var nowBlockLeft = document.getElementById("_" + i + "-" + leftJ);
                if (blockCheckColor == _nowBlockColor) {
                    cnt++;
                    if (nowBlockLeft.id == "_" + i + "-11" || cnt == 5) {
                        break;
                    }
                    nowBlockLeft.style.backgroundColor = _nowBlockColor;
                    blockCheck.style.backgroundColor = defalutColor;
                }
            }
        }
    }
    /*
    else if(keyCode == "ArrowDown"){
        for(var i = 20; i > 0; i--){
            for(var j = 0; j <= 10; j++){
                var blockCheck = document.getElementById("_"+i+"-"+j);
                var blockCheckColor = getComputedStyle(blockCheck).backgroundColor
                var lefti = i + 1;
                if(blockCheckColor == _nowBlockColor){
                    var nowBlockLeft = document.getElementById("_"+lefti+"-"+j);
                    nowBlockLeft.style.backgroundColor = _nowBlockColor;
                    blockCheck.style.backgroundColor = defalutColor;
                    Next++;
                }
            }
        }
    }*/
})

//!< array 셔플을 통한 랜덤 순서 배열 
//!< 사용시 shuffleArray(BlockType); 라고 쓰면 [0, 6, 1, 5, 4, 2, 3] - 다음과 같은 랜덤의 배열이 BlockType에 저장됨 
const shuffleArray = array => {
    for (let i = 0; i < array.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        const x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
};
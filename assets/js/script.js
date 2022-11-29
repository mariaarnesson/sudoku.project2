var name = prompt ("Your name");
document.write("Hello" + " " + name);

function closeAlertBox() {
    alertBox = document.getElementById("alertBox");
    alertClose = document.getElementById("alertClose");

    alertBox.parentNode.removeChild(alertBox);
    alertClose.parentNode.removeChild(alertClose);
}

window.alert = function (msg) {
    var id = "alertBox", alertBox, closeId = "alertClose", alertClose;
    alertBox = document.createElement("div");
    document.body.appendChild(alertBox);
    alertBox.id = id;
    alertBox.innerHTML = msg;
    alertClose = document.createElement("div");
    alertClose.id = closeId;
    document.body.appendChild(alertClose);
    alertClose.onclick = closeAlertBox;
};

var number = null;
var tile = null; 

var gameBoard = [
    "53--7----",
    "6--195---",
    "-98----6-",
    "8---6----3",
    "4--8-3--1",
    "7---2---6",
    "-6----28-",
    "---419--5",
    "----8--79"
]

var solution = [
    "534678912",
    "672195348",
    "198342567",
    "859761423",
    "426853791",
    "713924856",
    "961537284",
    "287419635",
    "345286179"
]




   



// Game Service (game state, game logic and game loop)
gameApp.service('theGame', function($log, $document, $window, 
    $location, $timeout, $interval) {
$window.onload = function() {
    // Initialize a new Game object
    var game = new Game();
    game.initGame();
};

});

function setGame() {
    // Digits 1-9
    for (let i = 1; i <= 9; i++) {
        //<div id="1" class="number">1</div>
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }}

  
    window.onload = function() {
        setGame();
    }
    
    function setGame() {
        // Digits 1-9
        for (let i = 1; i <= 9; i++) {
            //<div id="1" class="number">1</div>
            let number = document.createElement("div");
            number.id = i
            number.innerText = i;
            number.addEventListener("click", selectNumber);
            number.classList.add("number");
            document.getElementById("digits").appendChild(number);
        }
    
        // Board 9x9
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let tile = document.createElement("div");
                tile.id = r.toString() + "-" + c.toString();
                if (board[r][c] != "-") {
                    tile.innerText = board[r][c];
                    tile.classList.add("tile-start");
                }
                if (r == 2 || r == 5) {
                    tile.classList.add("horizontal-line");
                }
                if (c == 2 || c == 5) {
                    tile.classList.add("vertical-line");
                }
                tile.addEventListener("click", selectTile);
                tile.classList.add("tile");
                document.getElementById("board").append(tile);
            }
        }
    }
    
    function selectNumber(){
        if (numSelected != null) {
            numSelected.classList.remove("number-selected");
        }
        numSelected = this;
        numSelected.classList.add("number-selected");
    }
    
    function selectTile() {
        if (numSelected) {
            if (this.innerText != "") {
                return;
            }
    
            // "0-0" "0-1" .. "3-1"
            let coords = this.id.split("-"); //["0", "0"]
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);
    
            if (solution[r][c] == numSelected.id) {
                this.innerText = numSelected.id;
            }
            else {
                errors += 1;
                document.getElementById("errors").innerText = errors;
            }
        }
    }


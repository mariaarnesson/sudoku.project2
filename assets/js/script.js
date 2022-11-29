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




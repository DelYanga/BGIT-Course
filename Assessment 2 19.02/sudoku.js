var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
    "---26-7-1",
    "68--7--9-",
    "19---45--",
    "82-1---4-",
    "--46-29--",
    "-5---3-28",
    "--93---74",
    "-4--5--36",
    "7-3-18---"
]

var solution = [
    "435269781",
    "682571493",
    "197834562",
    "826195347",
    "374682915",
    "951743628",
    "519326874",
    "248957136",
    "763418259"
]

window.onload = function() {
   setGame();
}

function setGame() {
    // Digits 1-9
    for (let i = 1; i<=9; i++) {
        // <div id="1" class="number">1</div>
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // Board 9x9
    for (let r = 0; r < 9; r++) {
        for (let c=0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber () {
    numSelected = this;
    numSelected.classList.add("number-selected");
}
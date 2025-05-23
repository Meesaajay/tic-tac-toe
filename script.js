let board = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let game = true;

function clickCell(num) {
    if (board[num] == "" && game) {
        board[num] = player;
        document.getElementsByClassName("cell")[num].innerText = player;
        if (check()) {
            document.getElementById("msg").innerText = player + " wins!";
            game = false;
        } else if (!board.includes("")) {
            document.getElementById("msg").innerText = "It's a draw!";
            game = false;
        } else {
            player = player == "X" ? "O" : "X";
            document.getElementById("msg").innerText = player + " turn";
        }
    }
}

function check() {
    let win = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];
    for (let w of win) {
        if (board[w[0]] == player && board[w[1]] == player && board[w[2]] == player) {
            return true;
        }
    }
    return false;
}

function restart() {
    board = ["", "", "", "", "", "", "", "", ""];
    player = "X";
    game = true;
    let cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
    }
    document.getElementById("msg").innerText = "X turn";
}

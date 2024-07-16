var tableArray = document.querySelectorAll(".box");
var turn = "X";

document.querySelector(".restart").addEventListener("click", function () {
    restart();
    document.querySelectorAll("h1")[1].innerHTML = "";
});

for (let i = 0; i < tableArray.length; i++) {
    tableArray[i].addEventListener("click", function () {
        if(tableArray[i].innerHTML === "") {
            tableArray[i].innerHTML = turn;
            document.querySelectorAll("h1")[1].innerHTML = "";

            if(didWin(turn)) {
                document.querySelectorAll("h1")[1].innerHTML = (turn === "X") ? "1st Player Won!" : "2nd Player Won!";
                restart();
            } else if(isDraw()) {
                document.querySelectorAll("h1")[1].innerHTML = "It is draw";
                restart();
            } else {
                turn = (turn === "X") ? "O" : "X";
                document.querySelectorAll("h1")[0].innerHTML = (turn === "X") ? "1st Player's Turn (X)" : "2nd Player's Turn (O)"; 
            }
    
        }
    });
}



function restart() {
    for (let i = 0; i < tableArray.length; i++) {
        tableArray[i].innerHTML = "";
    }

    turn = "X";
    document.querySelectorAll("h1")[0].innerHTML = "1st Player's Turn (X)";
}

function didWin(turn) {
    if(
        tableArray[0].innerHTML === turn && tableArray[1].innerHTML === turn && tableArray[2].innerHTML === turn ||
        tableArray[3].innerHTML === turn && tableArray[4].innerHTML === turn && tableArray[5].innerHTML === turn ||
        tableArray[6].innerHTML === turn && tableArray[7].innerHTML === turn && tableArray[8].innerHTML === turn ||
        tableArray[0].innerHTML === turn && tableArray[3].innerHTML === turn && tableArray[6].innerHTML === turn ||
        tableArray[1].innerHTML === turn && tableArray[4].innerHTML === turn && tableArray[7].innerHTML === turn ||
        tableArray[2].innerHTML === turn && tableArray[5].innerHTML === turn && tableArray[8].innerHTML === turn ||
        tableArray[0].innerHTML === turn && tableArray[4].innerHTML === turn && tableArray[8].innerHTML === turn ||
        tableArray[2].innerHTML === turn && tableArray[4].innerHTML === turn && tableArray[6].innerHTML === turn
    ) {
        return true;
    } 

    return false;
}

function isDraw() {
    for (let i = 0; i < tableArray.length; i++) {
        if (tableArray[i].innerHTML === "")
            return false;
    }

    return true;
}

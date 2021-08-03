export default class GameView {
    constructor() {
        console.log("Game view")
    }

    // Update the view of the board
    updateBoard(game) {
        this.updateTurn(game)
        const winnner = game.findWinningCombinations();
        for (let i = 0; i < game.board.length; i++) {
            // Render the value in the frontend
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);
            tile.classList.remove("tile-winner");

            let tileType = game.board[i] === "X" ? "tile-x" : "tile-o";
            tile.innerHTML = `<span class ="${tileType}">${game.board[i] ? game.board[i] : ""}</span>`
       
            if (winnner && winnner.includes(i)) {
                tile.classList.add("tile-winner");
            }
        }
    }

    updateTurn(game) {
        let playerX = document.querySelector(".player-x")
        let playerO = document.querySelector(".player-o")
        playerX.classList.remove("active");
        playerO.classList.remove("active");

        if (game.turn === "X") {
            playerX.classList.add("active")
        } else {
            playerO.classList.add("active")
        }
    }

}
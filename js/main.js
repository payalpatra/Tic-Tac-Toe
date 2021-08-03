import Game from "./Game.js";
import GameView from "./GameView.js";

// Instance of Game Class
let game = new Game();

// Instance of Game View
let gameView = new GameView();
gameView.updateBoard(game);

// Start New Game
document.querySelector(".restart").addEventListener("click", () => {
    NewGame()
})

// Render The Turns
let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        let index = parseInt(tile.dataset.index)
        onTileClick(index)
    })
});

function onTileClick(i) {
    game.makeMove(i)
    gameView.updateBoard(game)

}

function NewGame() {
    game = new Game();
    gameView.updateBoard(game)
}
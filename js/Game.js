export default class Game {
    constructor() {
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }

    // Alternates the turn
    nextTurn() {

        if (this.turn === "X") {
            this.turn = "O";
        } else {
            this.turn = "X";
        }
    }
    // Assign turn value at the board position
    makeMove(i) {
        if(this.endOfGame()){
            return;
        }

        if (this.board[i]) {
            return
        }
        this.board[i] = this.turn;
        let winner = this.findWinningCombinations();
       if(!winner) {
           this.nextTurn();
       }
     
    }
    // We decide the winner based on these combinations
    findWinningCombinations() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2],
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            // If a matches any of the combinations 0th position
            // We check if value at position a from the combinations exists
            // and check if values at a,b,c are equal 
            if (
                this.board[a] &&
                this.board[a] === this.board[b] &&
                this.board[b] === this.board[c]
            ) {
                return combination;
            }
        }
        return null;
    }
    endOfGame() {
        let winner = this.findWinningCombinations();
        if(winner) {
           return true
        }else {
            return false;
        }
    }
}

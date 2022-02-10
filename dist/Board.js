"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pawn_1 = __importDefault(require("./Pieces/Pawn"));
class Board {
    constructor(_blackPlayer, _whitePlayer) {
        this.boardSize = 8;
        //build board
        this.board = new Array();
        for (let i = 0; i < this.boardSize; i++) {
            this.board.push(new Array(8).fill(""));
        }
        this.blackPlayer = _blackPlayer;
        this.whitePlayer = _whitePlayer;
    }
    newGame() {
        //set pawns
        for (let i = 0; i < 8; i++) {
            this.board[1][i] = new Pawn_1.default("Black", 1, i);
            this.board[6][i] = new Pawn_1.default("White", 6, i);
        }
    }
    addPiece() { }
    doMovement(currentX, currentY, newX, newY) {
        this.board[currentX][currentY].canMove(newX, newY, this.board);
    }
    printBoard() {
        console.table(this.board);
    }
}
exports.default = Board;
//# sourceMappingURL=Board.js.map
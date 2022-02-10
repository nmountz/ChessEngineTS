"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Board_1 = __importDefault(require("./Board"));
const main = () => {
    let board = new Board_1.default("test1", "test2");
    board.newGame();
    board.printBoard();
    //test moving a black pawn
    /*for (let i = 0; i < 5; i++) {
      board.doMovement(1 + i, 0, 2 + i, 0);
      board.printBoard();
    }*/
    //test moving a white pawn
    for (let i = 7; i > 2; i--) {
        board.doMovement(i - 1, 0, i - 2, 0);
        board.printBoard();
    }
};
main();
//# sourceMappingURL=main.js.map
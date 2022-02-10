import Piece from "./Piece";
import Pawn from "./Pieces/Pawn";

export default class Board {
  boardSize: number;
  board: Array<Array<Piece>>;
  blackPlayer: string;
  whitePlayer: string;

  constructor(_blackPlayer: string, _whitePlayer: string) {
    this.boardSize = 8;
    //build board
    this.board = new Array<Array<any>>();
    for (let i = 0; i < this.boardSize; i++) {
      this.board.push(new Array<any>(8).fill(""));
    }
    this.blackPlayer = _blackPlayer;
    this.whitePlayer = _whitePlayer;
  }

  newGame() {
    //set pawns
    for (let i = 0; i < 8; i++) {
      this.board[1][i] = new Pawn("Black", 1, i);
      this.board[6][i] = new Pawn("White", 6, i);
    }
  }

  addPiece() {}

  doMovement(currentX: number, currentY: number, newX: number, newY: number) {
    this.board[currentX][currentY].canMove(newX, newY, this.board);
  }

  printBoard() {
    console.table(this.board);
  }
}

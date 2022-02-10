import Piece from "../Piece";

export default class Rook extends Piece {
  constructor(color: string, x_pos: number, y_pos: number) {
    super(color, x_pos, y_pos);
  }

  canMove(newX: number, newY: number, board: any[][]): boolean {
    throw new Error("Method not implemented.");
  }
}

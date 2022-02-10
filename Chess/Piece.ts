export default abstract class Piece {
  //True = White, False = Black
  color: string;
  x_pos: number;
  y_pos: number;
  //coordinate acording to traditional chess logic
  coordinate: string;
  isAlive: boolean;
  hasMoved: boolean;

  constructor(color: string, x_pos: number, y_pos: number) {
    this.color = color;
    this.x_pos = x_pos;
    this.y_pos = y_pos;
    this.coordinate = this.calculateCoordinate();
    this.isAlive = true;
    this.hasMoved = false;
  }

  setIsAlive(): void {
    this.isAlive = !this.isAlive;
  }

  calculateCoordinate(): string {
    let posArr = ["A", "B", "C", "D", "E", "F", "G", "H"];
    return `${posArr[this.x_pos]}${this.y_pos}`;
  }

  abstract canMove(
    newX: number,
    newY: number,
    board: Array<Array<Piece>>
  ): boolean;
}

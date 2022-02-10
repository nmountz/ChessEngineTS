"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Piece_1 = __importDefault(require("../Piece"));
class Pawn extends Piece_1.default {
    constructor(color, x_pos, y_pos) {
        super(color, x_pos, y_pos);
    }
    /*
      Each piece has it's own rules, for example a pawn's possible moves are of the form
  
      [current_x][current_y] => [current_x][current_y+1] (only if there is no piece of same color at [current_x][current_y+1])
      or [current_x][current_y] => [current_x][current_y+2] if current position == starting position
      or [current_x][current_y] => [current_x+1][current_y+1] (if opposing piece occupies that location)
      or [current_x][current_y] => [current_x+1][current_y-1] (if opposing piece occupies that location)
    */
    canMove(newX, newY, board) {
        //check if movement 1 forward is valid
        if ((this.color === "Black" && newX === this.x_pos + 1 && newY <= 7) ||
            (this.color === "White" && newX === this.x_pos - 1 && newY >= 0)) {
            //check if there is another piece in front
            //TODO: add en-passant
            if (board[newX][newY] === "") {
                //move piece and update location
                board[newX][newY] = this;
                //clear last location
                board[this.x_pos][this.y_pos] = "";
                //update new location
                this.x_pos = newX;
                this.y_pos = newY;
                return true;
            }
        }
        //|| (newY === this.y_pos+2 && !this.hasMoved) || (newX))
        throw new Error("Cannot move piece here");
    }
}
exports.default = Pawn;
//# sourceMappingURL=Pawn.js.map
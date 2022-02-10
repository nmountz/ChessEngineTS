"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Piece {
    constructor(color, x_pos, y_pos) {
        this.color = color;
        this.x_pos = x_pos;
        this.y_pos = y_pos;
        this.coordinate = this.calculateCoordinate();
        this.isAlive = true;
        this.hasMoved = false;
    }
    setIsAlive() {
        this.isAlive = !this.isAlive;
    }
    calculateCoordinate() {
        let posArr = ["A", "B", "C", "D", "E", "F", "G", "H"];
        return `${posArr[this.x_pos]}${this.y_pos}`;
    }
}
exports.default = Piece;
//# sourceMappingURL=Piece.js.map
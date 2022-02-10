"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Piece_1 = __importDefault(require("../Piece"));
class Rook extends Piece_1.default {
    constructor(color, x_pos, y_pos) {
        super(color, x_pos, y_pos);
    }
    canMove(newX, newY, board) {
        throw new Error("Method not implemented.");
    }
}
exports.default = Rook;
//# sourceMappingURL=Rook.js.map
import Board from "./Board";

const main = () => {
  let board = new Board("test1", "test2");
  board.newGame();
  board.printBoard();

  //test moving a black pawn
  /*for (let i = 0; i < 5; i++) {
    board.doMovement(1 + i, 0, 2 + i, 0);
    board.printBoard();
  }*/

  //test moving a white pawn
  /*for (let i = 7; i > 2; i--) {
    board.doMovement(i - 1, 0, i - 2, 0);
    board.printBoard();
  }*/
};

main();

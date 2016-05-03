if (!window.game) { window.game = {} }
var GAME = window.game

// initialize a board
GAME.initialize = function () {

  GAME.queens = [];

  GAME.board = [
    {id: "h1"}, {id: "h2"}, {id: "h3"}, {id: "h4"}, {id: "h5"}, {id: "h6"}, {id: "h7"},  {id: "h8"},
    {id: "g1"}, {id: "g2"}, {id: "g3"}, {id: "g4"}, {id: "g5"}, {id: "g6"}, {id: "g7"},  {id: "g8"},
    {id: "f1"}, {id: "f2"}, {id: "f3"}, {id: "f4"}, {id: "f5"}, {id: "f6"}, {id: "f7"},  {id: "f8"},
    {id: "e1"}, {id: "e2"}, {id: "e3"}, {id: "e4"}, {id: "e5"}, {id: "e6"}, {id: "e7"},  {id: "e8"},
    {id: "d1"}, {id: "d2"}, {id: "d3"}, {id: "d4"}, {id: "d5"}, {id: "d6"}, {id: "d7"},  {id: "d8"},
    {id: "c1"}, {id: "c2"}, {id: "c3"}, {id: "c4"}, {id: "c5"}, {id: "c6"}, {id: "c7"},  {id: "c8"},
    {id: "b1"}, {id: "b2"}, {id: "b3"}, {id: "b4"}, {id: "b5"}, {id: "b6"}, {id: "b7"},  {id: "b8"},
    {id: "a1"}, {id: "a2"}, {id: "a3"}, {id: "a4"}, {id: "a5"}, {id: "a6"}, {id: "a7"},  {id: "a8"}
  ]; // Traditional chess position naming. Is it a little silly to be so explicit? Sure. However, I'm optimizing for low cognitive burden, not less typing.

  // set up the board squares
  for (var i = 0; i < GAME.board.length; i++) {
    GAME.board[i].black = true;
    if ( (i%16 - i%8) === 0 ) { // rows that start with black
      if (i%2 === 0) { // black squares on even columns
        GAME.board[i].black = false;
      }
    } else { // rows that start with white
      if (i%2 === 1) { // black squares on odd columns
        GAME.board[i].black = false;
      }
    };
  }
};

GAME.draw = function (board) {
  $("#board .square").remove(); // reset the board

  for (var i = 0; i < board.length; i++) {
    GAME.appendSquare(board[i]);
  };

  GAME.addEventListeners(board);
}

GAME.appendSquare = function (square) {
  var board = $("#board");
  if ( square.black === true ) {
    board.append("<div class='square black' id='" + square.id + "'></div>");
  } else {
    board.append("<div class='square' id='" + square.id + "'></div>");
  }
}

GAME.addEventListeners = function (board) {
  $.each(board, function(index, square) {
    $("#" + square.id).click(function() {
      GAME.queens.push(square.id);
      console.log("Queens:", GAME.queens);
      console.log( GAME.checkQueens(GAME.queens[0], GAME.queens[1]) );
    });
  });
}

$(function () {
  GAME.initialize();
  GAME.draw(GAME.board);
  // represent results

  GAME.runTests();
});


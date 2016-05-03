if (!window.game) { window.game = {} }
var GAME = window.game

// initialize a board
GAME.initialize = function () {

  GAME.queens = []; // expects a string of two digits from 1 to 8

  GAME.board = [
    {id: "81"}, {id: "82"}, {id: "83"}, {id: "84"}, {id: "85"}, {id: "86"}, {id: "87"},  {id: "88"},
    {id: "71"}, {id: "72"}, {id: "73"}, {id: "74"}, {id: "75"}, {id: "76"}, {id: "77"},  {id: "78"},
    {id: "61"}, {id: "62"}, {id: "63"}, {id: "64"}, {id: "65"}, {id: "66"}, {id: "67"},  {id: "68"},
    {id: "51"}, {id: "52"}, {id: "53"}, {id: "54"}, {id: "55"}, {id: "56"}, {id: "57"},  {id: "58"},
    {id: "41"}, {id: "42"}, {id: "43"}, {id: "44"}, {id: "45"}, {id: "46"}, {id: "47"},  {id: "48"},
    {id: "31"}, {id: "32"}, {id: "33"}, {id: "34"}, {id: "35"}, {id: "36"}, {id: "37"},  {id: "38"},
    {id: "21"}, {id: "22"}, {id: "23"}, {id: "24"}, {id: "25"}, {id: "26"}, {id: "27"},  {id: "28"},
    {id: "11"}, {id: "12"}, {id: "13"}, {id: "14"}, {id: "15"}, {id: "16"}, {id: "17"},  {id: "18"}
  ]; // Traditional chess position naming. Is it a little silly to be so explicit? Maybe. However, I'm optimizing for low cognitive burden, not less typing.

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
    board.append("<div class='square square--black' id='" + square.id + "'></div>");
  } else {
    board.append("<div class='square' id='" + square.id + "'></div>");
  }
}

GAME.addEventListeners = function (board) {
  $.each(board, function(index, square) {
    $("#" + square.id).click(function() {

      if ( GAME.queens.length < 2 ) {
        GAME.queens.push(square.id);
        $("#" + square.id).addClass("square--active");
        GAME.respondToInputs();
      }
    });
  });
}

GAME.respondToInputs = function () {
  if ( GAME.checkQueens(GAME.queens[0], GAME.queens[1]) === undefined ) {return};

  if ( GAME.checkQueens(GAME.queens[0], GAME.queens[1]) ) {
        $("#notes p").remove();
        $("#notes").append("<p>Queens can attack from these positions.</p>");
        $(".square--active").css("background-color", "red");
  } else if (GAME.checkQueens(GAME.queens[0], GAME.queens[1]) === false) {
        $("#notes p").remove();
        $("#notes").append("<p>Queens can not attack from these positions.</p>");
  };

}

GAME.checkQueens = function (first, second) {
  if (typeof first !== "string" || typeof second !== "string") { return undefined };
  if (first === second) { return "error" };

  var beyonce = {};
  var elizabeth = {};
  beyonce.x = Number(first[1]);
  beyonce.y = Number(first[0]);
  elizabeth.x = Number(second[1]);
  elizabeth.y = Number(second[0]);

  if ( beyonce.x === elizabeth.x ) { return true }; // row attack
  if ( beyonce.y === elizabeth.y ) { return true }; // column attack

  { // send queen up and right
    let bey = {}; bey.x = beyonce.x; bey.y = beyonce.y; // block scope in JS? thanks ES6!
    while ( bey.x < 9 ) {
      bey.x += 1;
      bey.y += 1;
      if ( JSON.stringify(bey) === JSON.stringify(elizabeth) ) { return true };
    };
  }

  { // send queen up and left
    let bey = {}; bey.x = beyonce.x; bey.y = beyonce.y;
    while ( bey.x > 0 ) {
      bey.x -= 1;
      bey.y += 1;
      if ( JSON.stringify(bey) === JSON.stringify(elizabeth) ) { return true };
    };
  }

  { // send queen down and right
    let bey = {}; bey.x = beyonce.x; bey.y = beyonce.y;
    while ( bey.x < 9 ) {
      bey.x += 1;
      bey.y -= 1;
      if ( JSON.stringify(bey) === JSON.stringify(elizabeth) ) { return true };
    };
  }

  { // send queen down and left
    let bey = {}; bey.x = beyonce.x; bey.y = beyonce.y;
    while ( bey.x > 0 ) {
      bey.x -= 1;
      bey.y -= 1;
      if ( JSON.stringify(bey) === JSON.stringify(elizabeth) ) { return true };
    };
  }

  return false
}

$(function () {
  GAME.initialize();
  GAME.draw(GAME.board);
  // represent results

  GAME.runTests();
});


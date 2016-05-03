"use strict";
if (!window.game) { window.game = {} };
var GAME = window.game;

GAME.runTests = function () {

console.log("=== tests start ===");

console.log( "--- board initialized ---");
console.log( typeof window.game === "object" );
console.log( window.game === GAME );
console.log( typeof GAME.board === "object" );
console.log( typeof GAME.board[0] === "object" );
console.log( typeof GAME.board[63] === "object" );
console.log( GAME.board[64] === undefined );
console.log( GAME.board[0].black === false );
console.log( GAME.board[8].black === true );
console.log( GAME.board[9].black === false );
console.log( GAME.board[63].black === false );

console.log("--- draw the board ---");
console.log( typeof GAME.appendSquare === "function" );
GAME.draw(GAME.board);
console.log( $("#board .square").length === 64 );
GAME.draw(GAME.board);
console.log( $("#board .square").length === 64 );
console.log( $("#board #11").hasClass("square--black") === true );
console.log( $("#board #12").hasClass("square--black") === false );

console.log("--- listen for input ---");
console.log( typeof GAME.addEventListeners === "function" );
$("#33").click();
console.log( GAME.queens[0] === "33" );
GAME.queens = [];
GAME.draw(GAME.board);

console.log("--- evaluate inputs ---");
console.log( typeof GAME.checkQueens === "function");
console.log( GAME.checkQueens("11", "11") === "error" ); // bad input
console.log( GAME.checkQueens("11", undefined) === undefined );
console.log( GAME.checkQueens() === undefined );
console.log( GAME.checkQueens("11", "12") === true );
console.log( GAME.checkQueens("22", "41") === false );
console.log( GAME.checkQueens("11", "22") === true );
console.log( GAME.checkQueens("11", "23") === false );
console.log( GAME.checkQueens("11", "88") === true );
console.log( GAME.checkQueens("88", "11") === true );
console.log( GAME.checkQueens("81", "18") === true );
console.log( GAME.checkQueens("18", "81") === true );

console.log("=== tests finished ===");

};
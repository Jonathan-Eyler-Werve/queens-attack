if (!window.game) { window.game = {} }
var GAME = window.game

GAME.runTests = function () {

console.log( "=== tests start ===")
console.log( "--- board initialized ---")
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
console.log( "--- draw the board ---")
console.log( typeof GAME.appendSquare === "function" );
GAME.draw();
console.log( $("#board .square").length === 64 );
GAME.draw();
console.log( $("#board .square").length === 64 );
console.log( $($("#board .square")[1]).hasClass("black") === true );
console.log( $($("#board .square")[0]).hasClass("black") === false );

console.log( "=== tests finished ===")

}
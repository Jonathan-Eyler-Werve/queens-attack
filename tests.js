if (!window.game) { window.game = {} }
var GAME = window.game

GAME.runTests = function () {

console.log( "=== tests start ===")
console.log( "--- board initialized ---")
console.log( typeof window.game === "object" );
console.log( window.game === GAME );
console.log( typeof GAME.board === "object" );
console.log( typeof GAME.board.a1 === "object" );
console.log( typeof GAME.board.h8 === "object" );
console.log( Array.isArray(GAME.board.keys) );
console.log( GAME.board.a1.black === true );
console.log( GAME.board.b7.black === false );
console.log( GAME.board.g2.black === false );
console.log( GAME.board.h8.black === true );
console.log( "--- draw the board ---")
console.log( typeof GAME.appendSquare === "function" );

console.log( "=== tests finished ===")

}
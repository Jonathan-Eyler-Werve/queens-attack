if (!window.game) { window.game = {} }
var GAME = window.game
console.log( "=== tests start ===")
console.log( "--- board exists ---")
console.log( typeof window.game === "object" );
console.log( window.game === GAME );
console.log( typeof GAME.board === "object" );
console.log( typeof GAME.board.a1 === "object" );
console.log( typeof GAME.board.h8 === "object" );

console.log( "=== tests finished ===")
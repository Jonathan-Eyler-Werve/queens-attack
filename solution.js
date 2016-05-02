if (!window.game) { window.game = {} }
var GAME = window.game

// initialize a board

GAME.board = {
  a1: {}, a2: {}, a3: {}, a4: {}, a5: {}, a6: {}, a7: {},  a8: {},
  b1: {}, b2: {}, b3: {}, b4: {}, b5: {}, b6: {}, b7: {},  b8: {},
  c1: {}, c2: {}, c3: {}, c4: {}, c5: {}, c6: {}, c7: {},  c8: {},
  d1: {}, d2: {}, d3: {}, d4: {}, d5: {}, d6: {}, d7: {},  d8: {},
  e1: {}, e2: {}, e3: {}, e4: {}, e5: {}, e6: {}, e7: {},  e8: {},
  f1: {}, f2: {}, f3: {}, f4: {}, f5: {}, f6: {}, f7: {},  f8: {},
  g1: {}, g2: {}, g3: {}, g4: {}, g5: {}, g6: {}, g7: {},  g8: {},
  h1: {}, h2: {}, h3: {}, h4: {}, h5: {}, h6: {}, h7: {},  h8: {}
} // Is it a little silly to be so explicit? Sure. However, I'm optimizing for low cognitive burden, not less typing.

// draw grid pattern

GAME.board.keys = Object.keys(GAME.board);
for (var i = 0; i < GAME.board.keys.length; i++) {
  GAME.board[GAME.board.keys[i]].black = false;

  if ( (i%16 - i%8) === 0 ) { // rows that start with black
    if (i%2 === 0) { // black squares on even columns
      GAME.board[GAME.board.keys[i]].black = true;
    }
  } else { // rows that start with white
    if (i%2 === 1) { // black squares on odd columns
      GAME.board[GAME.board.keys[i]].black = true;
    }
  };
}



// draw a grid square

// iterate over board while drawing squares

// accept inputs

// evaluate inputs

// represent results


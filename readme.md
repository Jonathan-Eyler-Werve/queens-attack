# Readme:
## Queens Attack by Jonathan Eyler-Werve

Hi folks! This is my response to the Queens Attack challenge.

> You are to write a solution to the "Queen's Attack" problem.

> The program should present an HTML form that represents a standard 8x8 chess board.  Having selected two positions on the board, the program will report whether chess queens in those positions can attack one another.

> In the game of chess, a queen can attack pieces that are on the same row, column, or diagonal.

I put a bit of UI on it so that the solution can be confirmed, and tests report to the browser console.

Overall, it's a pretty straightforward algorithm (the entirely superficial black-and-white square detection has more interesting math). There was one interesting question that came up with  scope, when "moving" the queen around, which I solved with some ES6 block scope rather than just reset the variable several times. There's almost certainly better ways to do this, but this one will probably make more sense to Ruby folks and I wanted to use the new syntax before going back to browser-accessible day to day work.



# 🖼️ Project overview

A JavaScript-based Tic Tac Toe game with a clean UI and logic-driven gameplay - Built as part of [The Odin Project](https://www -theodinproject -com/) JavaScript curriculum to practice factory functions and module patterns

---

## 📌 Features

- 2-player local gameplay
- Real-time board updates
- Reset functionality
- Win/draw detection logic
- Responsive design
- As little code as possible on the global scope

---

## 🧱 Built With

- HTML5
- CSS3
- JavaScript (ES6+)

---

## 🧠 Understanding the problem

1 - We need to create a Tic-Tac-Toe game with:
- A gameboard stored as an array (9 section of boards) in a Gameboard Object
- Player objects (AI vs Human)
- Game Controller object
- Display controller object
- Minimal global code
- AI with differenct difficulty levels

2 - The flow
- Create working console game
- Add DOM interaction after
- Allow player to input names
- Include start and restart functionality
- Display results

---

## 📜 Pseudocode Structure

1 - Gameboard
- Create a 3x3 array to represent the board
- Functions to get/set marks on the board
- Function to check if position is available
- Function to check if board is full
- Function to reset the board
- Function to get current board state

2 - Player Factory
- Create player with name and mark (X or O)
- Function to get player's name and mark
- Function to make a move (human will use UI, AI will use algorithm)

3 - AI Player Factory
- Implement minimax algorithm with difficulty levels
- Easy: Random moves
- Medium: Mix of random and smart moves
- Hard: Mostly optimal moves
- Impossible: Always optimal moves (pure minimax)

4 - GameController Module (IIFE)
- Track current player
- Switch turns
- Track game state (in progress, win, tie)
- Check for win conditions
- Reset game
- Start game

5 - DisplayController Module (IIFE)
- Render board to DOM
- Handle UI interactions
- Update display based on game state
- Show win/tie messages
- Handle player name inputs
- Control difficulty selection

## 📜 Pseudocode Flow

FUNCTION startGame:
  1 - Get player name and AI difficulty level
  2 - Initialize empty 3x3 game board
  3 - Render board to the DOM
  4 - Set current player to human (X)
  5  Wait for player input

FUNCTION handlePlayerTurn(row, col):
  1 - IF position is valid AND game not over:
     a - Place current player's mark (X/O)
     b - Update display
     c - Check for win or tie
     d - IF game over:
        i - Show result and restart button
     e - ELSE:
        i - Switch players
        ii - IF AI's turn:
            - Calculate move based on difficulty
            - Make AI move after short delay

FUNCTION checkForWin():
  1 - Check rows, columns, and diagonals for three matching marks
  2 - Return winner mark or null

FUNCTION checkForTie():
  1 - IF board full AND no winner:
     a - Return true
  2 - ELSE:
     a - Return false

FUNCTION getBestMove(difficulty):
  1 - IF easy: 
     - Return random empty position
  2 - IF medium: 
     - 50% random / 50% minimax (depth=1)
  3 - IF hard: 
     - 20% random / 80% minimax (depth=3)
  4 - IF impossible: 
     - Full minimax algorithm

FUNCTION minimax(board, depth, isMaximizing):
  1 - IF terminal state OR depth limit reached:
     - Return score
  2 - IF maximizing (AI's turn):
     - Find highest-scoring move
  3 - ELSE (human's turn):
     - Find lowest-scoring move
  4 - Return best move or score

FUNCTION restart:
  1 - Reset board and game state
  2 - Render clean board
  3 - Set current player to human
  4 - Wait for player input

---


## 📈 Flowchart



--- 

## 🚀 Future improvements



---

## 🙌 Acknowledgement

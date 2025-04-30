# 🖼️ Project overview

A JavaScript-based Tic Tac Toe game with a clean UI and logic-driven gameplay. Built as part of [The Odin Project](https://www.theodinproject.com/) JavaScript curriculum to practice factory functions and module patterns

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
   1. Get player names
   2. Get AI difficulty level
   3. Initialize board
   4. Render initial board
   5. Set current player to X
   6. Wait for player input

FUNCTION handlePlayerTurn(position):
   1. IF position is valid AND game is not over:
      a. Update board with current player's mark
      b. Render updated board
      c. Check for win or tie
      d. IF game is over:
         i. Display result
         ii. Offer restart
      e. ELSE:
         i. Switch to next player
         ii. IF next player is AI:
            1. Calculate AI move based on difficulty
            2. Make AI move (recursively call handlePlayerTurn)

FUNCTION checkForWin():
   1. Check all rows, columns, and diagonals for three matching marks
   2. Return winner mark or null

FUNCTION checkForTie():
   1. IF board is full AND no winner:
      a. Return true
   2. ELSE:
      a. Return false

FUNCTION minimax(board, depth, isMaximizing, difficulty):
   1. IF game is over OR depth reaches difficulty limit:
      a. Return score based on outcome
   2. IF isMaximizing:
      a. Find best move for AI
   3. ELSE:
      a. Find best move for opponent
   4. Return best move or score based on context

FUNCTION restart:
   1. Reset board
   2. Reset game state
   3. Render clean board
   4. Start new game with same players

---


## 📈 Flowchart



--- 

## 🚀 Future improvements



---

## 🙌 Acknowledgement

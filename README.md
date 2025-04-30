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



---


## 📈 Flowchart



--- 

## 🚀 Future improvements



---

## 🙌 Acknowledgement

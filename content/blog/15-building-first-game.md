# Build Your First Game on Your Phone: Tic-Tac-Toe in Python

**Posted:** January 2026 | **Reading time:** 12 minutes | **Platform:** CoderKit Mobile IDE

> **Only on CoderKit:** Build, test, and run a complete Python game—right on your phone. No laptop needed. No complex setup. Just code and play.

You're starting to learn Python. You've done loops, conditions, functions. But you haven't built anything *real* yet.

This week, you're building a complete, playable game: **Tic-Tac-Toe**.

By Friday, you'll have a game your friends can play. You'll understand game logic, data structures, and functions at a deeper level. Most importantly, you'll feel like a real programmer.

Let's build it—**on your phone with CoderKit.**

**[Download CoderKit Free →](https://coderkit.app/download)** Start building in minutes, no setup required.

---

## What You'll Learn

By the end of this tutorial, you'll understand:
- ✅ Game loops (making something run repeatedly)
- ✅ 2D data structures (board as a list of lists)
- ✅ Functions (organizing code)
- ✅ Control flow (if/else, loops)
- ✅ User input/validation (handling mistakes)
- ✅ Win condition logic (checking for three in a row)

**Time required:** 5-7 hours total (1 hour/day, Monday-Friday)

**Difficulty:** Beginner-friendly

**Prerequisites:** Variables, loops, functions, basic if/else

---

## The Game Plan

**What we're building:**
```
 1 | 2 | 3
-----------
 4 | X | 6
-----------
 7 | 8 | 9

Player X or O?
```

A playable Tic-Tac-Toe game where you play against the computer.

**Features:**
- Human player vs Computer AI
- Input validation (can't place on occupied square)
- Win detection (checks all win conditions)
- Game reset (play again)

**Total lines of code:** ~150 lines (very manageable)

---

## Project Structure

```
tic_tac_toe.py
├── Game setup
├── Board display
├── User input
├── Computer AI
├── Win detection
├── Game loop
└── Main execution
```

We'll build each section step-by-step.

---

## Step 1: Set Up the Board (Monday)

**What we're doing:** Create a data structure to represent the game board.

> **CoderKit Advantage:** Write this code in CoderKit's built-in Python editor. Test instantly without leaving your phone.

```python
# Initialize empty board (3x3)
board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
]

# Or as a flat list (easier for beginners)
board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
# Positions: 0 1 2
#            3 4 5
#            6 7 8
```

**Why flat list?** Easier to understand as a 9-element list rather than 3x3 grid.

**Code to write:**

```python
def initialize_board():
    """Create empty board"""
    return [' '] * 9

board = initialize_board()
print(board)  # Output: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
```

**Concept:** A list represents the game board. Each position (0-8) is a square.

---

## Step 2: Display the Board (Monday)

**What we're doing:** Show the board visually to the player.

```python
def display_board(board):
    """Print the board in a nice format"""
    print("\n")
    print(f" {board[0]} | {board[1]} | {board[2]}")
    print("-----------")
    print(f" {board[3]} | {board[4]} | {board[5]}")
    print("-----------")
    print(f" {board[6]} | {board[7]} | {board[8]}")
    print("\n")

# Test it
board = initialize_board()
display_board(board)

# Output:
#  |   |  
# -----------
#  |   |  
# -----------
#  |   |  
```

**Concept:** Functions organize code. `display_board()` is responsible for one thing: showing the board.

---

## Step 3: Handle Player Input (Tuesday)

**What we're doing:** Get player's move and validate it.

```python
def get_player_move(board):
    """Get player's move (0-8), validate it"""
    while True:
        try:
            move = int(input("Choose position (0-8): "))
            
            # Validate: within range and empty
            if move < 0 or move > 8:
                print("Invalid! Choose 0-8.")
                continue
            
            if board[move] != ' ':
                print("Square taken! Choose another.")
                continue
            
            return move
        
        except ValueError:
            print("Invalid input! Enter a number.")

# Test it
board = initialize_board()
move = get_player_move(board)
board[move] = 'X'
display_board(board)
```

**Concepts:**
- `while True` loop (keep asking until valid)
- `try/except` (handle wrong input type)
- Input validation (check range, check if square empty)
- List modification (`board[move] = 'X'`)

---

## Step 4: Implement Computer AI (Tuesday-Wednesday)

**What we're doing:** Make the computer play intelligently.

```python
def get_computer_move(board):
    """Computer's turn - simple strategy"""
    
    # 1. Try to win
    for i in range(9):
        if board[i] == ' ':
            board[i] = 'O'
            if check_winner(board) == 'O':  # We'll write this next
                return i
            board[i] = ' '  # Undo
    
    # 2. Block player from winning
    for i in range(9):
        if board[i] == ' ':
            board[i] = 'X'
            if check_winner(board) == 'X':  # Player would win here
                board[i] = ' '
                return i  # Block it
            board[i] = ' '  # Undo
    
    # 3. Take center if available
    if board[4] == ' ':
        return 4
    
    # 4. Take corner
    corners = [0, 2, 6, 8]
    empty_corners = [i for i in corners if board[i] == ' ']
    if empty_corners:
        import random
        return random.choice(empty_corners)
    
    # 5. Take any empty square
    empty_squares = [i for i in range(9) if board[i] == ' ']
    if empty_squares:
        import random
        return random.choice(empty_squares)

# Test it
board = initialize_board()
board[4] = 'X'  # Player moves
move = get_computer_move(board)  # Computer responds
board[move] = 'O'
display_board(board)
```

**Concepts:**
- Simulation (try move, check, undo)
- List comprehension (`[i for i in corners if board[i] == ' ']`)
- Strategy logic (win > block > center > corner > random)

---

## Step 5: Check for Winner (Wednesday)

**What we're doing:** Detect when someone wins.

```python
def check_winner(board):
    """Check if X or O won. Return 'X', 'O', or None"""
    
    # Winning combinations (indices)
    winning_combos = [
        [0, 1, 2],  # Top row
        [3, 4, 5],  # Middle row
        [6, 7, 8],  # Bottom row
        [0, 3, 6],  # Left column
        [1, 4, 7],  # Middle column
        [2, 5, 8],  # Right column
        [0, 4, 8],  # Diagonal
        [2, 4, 6]   # Anti-diagonal
    ]
    
    # Check each combination
    for combo in winning_combos:
        a, b, c = combo
        
        # If all three squares are same and not empty
        if board[a] == board[b] == board[c] != ' ':
            return board[a]  # Return 'X' or 'O'
    
    return None

# Test it
board = initialize_board()
board[0] = 'X'
board[1] = 'X'
board[2] = 'X'  # X wins top row
print(check_winner(board))  # Output: X
```

**Concepts:**
- Chained comparison (`board[a] == board[b] == board[c]`)
- Data structure (list of lists for win conditions)
- Logic (check all possibilities)

---

## Step 6: Check for Tie (Wednesday)

**What we're doing:** Detect when board is full (no winner).

```python
def is_board_full(board):
    """Check if all squares filled"""
    return ' ' not in board

# Test it
board = initialize_board()
print(is_board_full(board))  # False

board = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O']
print(is_board_full(board))  # True
```

**Concept:** Simple check using `in` operator.

---

## Step 7: Game Loop (Thursday)

**What we're doing:** Tie everything together.

```python
def play_game():
    """Main game loop"""
    board = initialize_board()
    
    while True:
        # Show board
        display_board(board)
        
        # Player's turn
        print("Your turn (X)")
        player_move = get_player_move(board)
        board[player_move] = 'X'
        
        # Check if player won
        if check_winner(board) == 'X':
            display_board(board)
            print("You won! 🎉")
            break
        
        # Check if tie
        if is_board_full(board):
            display_board(board)
            print("It's a tie!")
            break
        
        # Computer's turn
        print("Computer's turn (O)")
        computer_move = get_computer_move(board)
        board[computer_move] = 'O'
        
        # Check if computer won
        if check_winner(board) == 'O':
            display_board(board)
            print("Computer won! Better luck next time.")
            break
        
        # Check if tie
        if is_board_full(board):
            display_board(board)
            print("It's a tie!")
            break

# Run the game
if __name__ == "__main__":
    play_game()
```

**Concepts:**
- Game loop (`while True`)
- Alternating turns (player → computer → player)
- Win condition checking
- Flow control (break when game ends)

---

## Complete Code (Copy This Into CoderKit)

**Open CoderKit → Create new Python file → Paste this entire code → Run**

```python
def initialize_board():
    """Create empty 3x3 board"""
    return [' '] * 9

def display_board(board):
    """Display board visually"""
    print("\n")
    print(f" {board[0]} | {board[1]} | {board[2]}")
    print("-----------")
    print(f" {board[3]} | {board[4]} | {board[5]}")
    print("-----------")
    print(f" {board[6]} | {board[7]} | {board[8]}")
    print("\n")

def get_player_move(board):
    """Get valid player move"""
    while True:
        try:
            move = int(input("Enter position (0-8): "))
            if move < 0 or move > 8:
                print("Invalid! Enter 0-8.")
                continue
            if board[move] != ' ':
                print("Square taken!")
                continue
            return move
        except ValueError:
            print("Enter a number!")

def get_computer_move(board):
    """Computer AI"""
    import random
    
    # Win if possible
    for i in range(9):
        if board[i] == ' ':
            board[i] = 'O'
            if check_winner(board) == 'O':
                return i
            board[i] = ' '
    
    # Block player
    for i in range(9):
        if board[i] == ' ':
            board[i] = 'X'
            if check_winner(board) == 'X':
                board[i] = ' '
                return i
            board[i] = ' '
    
    # Take center
    if board[4] == ' ':
        return 4
    
    # Take corner
    corners = [0, 2, 6, 8]
    if board[0] == ' ': return 0
    if board[2] == ' ': return 2
    if board[6] == ' ': return 6
    if board[8] == ' ': return 8
    
    # Take any
    for i in range(9):
        if board[i] == ' ':
            return i

def check_winner(board):
    """Check for winner"""
    wins = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]
    
    for combo in wins:
        a, b, c = combo
        if board[a] == board[b] == board[c] != ' ':
            return board[a]
    return None

def is_board_full(board):
    """Check if board full"""
    return ' ' not in board

def play_game():
    """Main game"""
    board = initialize_board()
    
    while True:
        display_board(board)
        
        # Player move
        player_move = get_player_move(board)
        board[player_move] = 'X'
        
        if check_winner(board) == 'X':
            display_board(board)
            print("You won! 🎉")
            break
        
        if is_board_full(board):
            display_board(board)
            print("Tie game!")
            break
        
        # Computer move
        print("Computer thinking...")
        computer_move = get_computer_move(board)
        board[computer_move] = 'O'
        
        if check_winner(board) == 'O':
            display_board(board)
            print("Computer won!")
            break
        
        if is_board_full(board):
            display_board(board)
            print("Tie game!")
            break

# Run game
play_game()
```

---

## Step-by-Step Implementation Plan

**Ready? [Open CoderKit now](https://coderkit.app/download) to start coding.**

### **Monday (1 hour)**
- Write `initialize_board()`
- Write `display_board()`
- Test both

### **Tuesday (2 hours)**
- Write `get_player_move()` with validation
- Write `get_computer_move()` basic version
- Test moves on board

### **Wednesday (2 hours)**
- Write `check_winner()`
- Write `is_board_full()`
- Test win conditions

### **Thursday (1.5 hours)**
- Write `play_game()` main loop
- Test full game
- Debug any issues

### **Friday (optional, 1 hour)**
- Polish: Add comments
- Share with friends
- Celebrate! 🎉

---

## Testing Checklist

As you build, test each part:

- ✅ Board displays correctly
- ✅ Player can place X
- ✅ Computer places O
- ✅ Can't move on occupied square
- ✅ X wins detected
- ✅ O wins detected
- ✅ Tie game detected
- ✅ Invalid input handled
- ✅ Game ends properly

If any test fails, debug before moving on.

---

## Extensions (If You Finish Early)

**Want to add more?**

1. **Play again loop**
```python
while True:
    play_game()
    if input("Play again? (y/n): ").lower() != 'y':
        break
```

2. **Score tracking**
```python
player_wins = 0
computer_wins = 0
# Track through multiple games
```

3. **Difficulty levels**
```python
def get_computer_move_easy(board):
    # Random move only
    empty = [i for i in range(9) if board[i] == ' ']
    return random.choice(empty)
```

4. **Player vs Player**
```python
# Let two humans play instead of AI
```

---

## Concepts You Just Learned

**Beginner:**
- Functions organizing code
- Lists and indexing
- Loops and conditions
- User input/validation

**Intermediate:**
- Game loops (run until condition)
- Data structures (board representation)
- Chained comparisons
- Logic flow (turn-by-turn)

**Advanced:**
- Simulation (testing moves)
- Win detection algorithm
- Simple AI strategy

---

## Celebrate Your Achievement

You just built a **complete, playable game**—on your phone.

This is no longer "learning to code." This is **being a programmer**.

**CoderKit made this possible:** No laptop. No complex setup. Just your phone and your ideas.

Share it:
- Play with friends on your phone
- Show your family ("I built this on my phone!")
- Post the code on GitHub
- Screenshot from CoderKit → Share on social media
- Tell people "I built this in CoderKit"

**This is portfolio-worthy.** Seriously.

---

## What's Next?

After this game, you're ready for:
- **Number guessing game** (easier, good for reinforcement)
- **Hangman game** (similar difficulty, different mechanics)
- **Connect 4** (harder, extends Tic-Tac-Toe)
- **Text adventure game** (story-based)
- **Simple data app** (track something interesting)

Pick whichever excites you. You have the skills.

---

## The Secret

The gap between "learning programming" and "being a programmer" is **building something real**.

This Tic-Tac-Toe game is that something real.

You'll look back on this project and remember the moment you went from student to creator.

**Let's go build it.**

---

**[Download CoderKit Free - Start Building →](https://coderkit.app/download)**

*Your first game is 5 hours away. No laptop needed. Just your phone.*

---

**Share your game:** Built your Tic-Tac-Toe game in CoderKit? Tag us [@coderkit](https://twitter.com/coderkit) with your screenshots!

*Next week: Portfolio projects. How to build 5 games and get hired.*

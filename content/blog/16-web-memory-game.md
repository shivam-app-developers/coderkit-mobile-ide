# Build a Web Game on Your Phone: Memory Card Game

**Posted:** January 2026 | **Reading time:** 14 minutes | **Platform:** CoderKit Mobile IDE

You want to build games, but you want to see them **right on your phone screen**.

This tutorial teaches you **web-based game development** using HTML, CSS, and JavaScript—all running live in **CoderKit's integrated web server**.

> **CoderKit Superpower:** Run a full Flask web server on your phone. Build, test, and deploy web games without a computer.

By Friday, you'll have a playable **Memory Card Game** that runs in your phone's browser. You'll understand:
- DOM manipulation (HTML from JavaScript)
- Event listeners (touch and click)
- Game state management
- CSS animations
- Making it mobile-friendly

**Time required:** 6-8 hours total (1-2 hours/day, Monday-Friday)

**Difficulty:** Beginner to Intermediate

**Prerequisites:** Basic HTML, CSS, JavaScript (or willingness to learn alongside)

**[Download CoderKit Free →](https://coderkit.app/download)** Everything you need is built-in.

---

## The Game Plan

**What we're building:**

A Memory Card Game where:
- 12 cards (6 matching pairs)
- Flip two cards at a time
- Match all pairs
- Score based on moves

```
[?] [?] [?] [?]
[?] [?] [?] [?]
[?] [?] [?] [?]

Moves: 0  Matched: 0
```

Flip a card → See emoji → Flip another → Match or no match

**Features:**
- Touch/click cards
- Animated flip effect
- Move counter
- Win detection
- Difficulty levels (easy, medium, hard)

**Total code:** ~250 lines (150 HTML+CSS, 100 JavaScript)

---

## Why Web Games on Your Phone? (Only on CoderKit)

**Problem:** Building games requires a laptop + complex development tools + struggle with setup.

**CoderKit Solution:** Run a **complete web development environment on your phone**.

**What makes this possible:**
- ✅ Full Python + Flask support in CoderKit
- ✅ Integrated web server (no localhost config needed)
- ✅ Live browser preview on same device
- ✅ File management built-in
- ✅ One-click execution

You can:
- Code HTML/CSS/JavaScript in CoderKit
- Serve it with Flask running on your phone
- View in browser (same phone, real-time!)
- Deploy to web instantly

**This is professional web development—no laptop required.** The same code runs on your phone, tablet, desktop, or the live web.

---

## File Structure

In CoderKit, create three files:

```
memory_game/
├── app.py          (Flask server)
├── index.html      (Game HTML)
└── game.js         (Game logic)
```

The `app.py` serves `index.html`, which loads `game.js`.

---

## Step 1: Create Flask Server (Monday)

**File:** `app.py`

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
```

**What it does:**
- Creates a web server
- Serves `index.html` when you visit `http://localhost:5000`
- Runs on your phone

**To run:**
- Create `app.py`
- Run it in CoderKit
- Open `http://localhost:5000` in browser

---

## Step 2: Build the HTML (Monday-Tuesday)

**File:** `templates/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory Card Game</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .container {
            background: white;
            border-radius: 20px;
            padding: 30px;
            max-width: 500px;
            width: 100%;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }

        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 10px;
            font-size: 28px;
        }

        .stats {
            display: flex;
            justify-content: space-around;
            margin-bottom: 30px;
            padding: 15px;
            background: #f0f0f0;
            border-radius: 10px;
        }

        .stat {
            text-align: center;
        }

        .stat-label {
            font-size: 12px;
            color: #666;
            text-transform: uppercase;
            margin-bottom: 5px;
        }

        .stat-value {
            font-size: 24px;
            font-weight: bold;
            color: #667eea;
        }

        .difficulty {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            justify-content: center;
        }

        .difficulty button {
            padding: 8px 16px;
            border: 2px solid #ddd;
            background: white;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s;
        }

        .difficulty button.active {
            background: #667eea;
            color: white;
            border-color: #667eea;
        }

        .difficulty button:hover {
            border-color: #667eea;
        }

        .game-board {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            margin-bottom: 20px;
        }

        .card {
            aspect-ratio: 1;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border: none;
            border-radius: 12px;
            cursor: pointer;
            font-size: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            position: relative;
            transform-style: preserve-3d;
        }

        .card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.3);
        }

        .card.flipped {
            background: #f0f0f0;
            color: #333;
        }

        .card.matched {
            background: #4caf50;
            color: white;
            cursor: default;
            opacity: 0.7;
        }

        .card.matched:hover {
            transform: none;
        }

        .buttons {
            display: flex;
            gap: 10px;
            justify-content: center;
        }

        button {
            padding: 12px 24px;
            font-size: 16px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s;
        }

        .btn-reset {
            background: #667eea;
            color: white;
        }

        .btn-reset:hover {
            background: #5568d3;
            transform: scale(1.05);
        }

        .message {
            text-align: center;
            margin-top: 20px;
            padding: 15px;
            border-radius: 8px;
            font-weight: bold;
            display: none;
        }

        .message.show {
            display: block;
        }

        .message.win {
            background: #c8e6c9;
            color: #2e7d32;
        }

        @media (max-width: 600px) {
            .container {
                padding: 20px;
            }

            h1 {
                font-size: 24px;
            }

            .game-board {
                gap: 10px;
            }

            .card {
                font-size: 32px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎮 Memory Game</h1>

        <div class="stats">
            <div class="stat">
                <div class="stat-label">Moves</div>
                <div class="stat-value" id="moves">0</div>
            </div>
            <div class="stat">
                <div class="stat-label">Matched</div>
                <div class="stat-value" id="matched">0/6</div>
            </div>
            <div class="stat">
                <div class="stat-label">Best</div>
                <div class="stat-value" id="best">-</div>
            </div>
        </div>

        <div class="difficulty">
            <button class="active" onclick="setDifficulty('easy')">Easy</button>
            <button onclick="setDifficulty('medium')">Medium</button>
            <button onclick="setDifficulty('hard')">Hard</button>
        </div>

        <div class="game-board" id="gameBoard"></div>

        <div class="message" id="message"></div>

        <div class="buttons">
            <button class="btn-reset" onclick="resetGame()">New Game</button>
        </div>
    </div>

    <script src="{{ url_for('static', filename='game.js') }}"></script>
</body>
</html>
```

**Concepts:**
- Semantic HTML structure
- CSS Grid for card layout
- Flexbox for alignment
- CSS custom properties (colors)
- Responsive design (mobile-first)
- CSS transitions (smooth animations)

---

## Step 3: Write Game Logic in JavaScript (Tuesday-Wednesday)

**File:** `static/game.js`

```javascript
// Game state
let gameState = {
    cards: [],
    flipped: [],
    matched: [],
    moves: 0,
    difficulty: 'easy',
    isLocked: false,
    bestScore: localStorage.getItem('bestScore') || '-'
};

// Emoji pairs
const emojis = {
    easy: ['🍎', '🍌', '🍊', '🍇', '🍓', '🍒'],
    medium: ['🍎', '🍌', '🍊', '🍇', '🍓', '🍒', '🍑', '🥝'],
    hard: ['🍎', '🍌', '🍊', '🍇', '🍓', '🍒', '🍑', '🥝', '🥭', '🍍']
};

// Initialize game
function initGame() {
    const selectedEmojis = emojis[gameState.difficulty];
    
    // Create pairs: [🍎, 🍎, 🍌, 🍌, ...]
    gameState.cards = [...selectedEmojis, ...selectedEmojis];
    
    // Shuffle
    shuffle(gameState.cards);
    
    // Reset state
    gameState.flipped = [];
    gameState.matched = [];
    gameState.moves = 0;
    gameState.isLocked = false;
    
    // Render
    renderBoard();
    updateStats();
}

// Shuffle array (Fisher-Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Render game board
function renderBoard() {
    const board = document.getElementById('gameBoard');
    board.innerHTML = '';
    
    gameState.cards.forEach((emoji, index) => {
        const card = document.createElement('button');
        card.className = 'card';
        card.textContent = '?';
        card.onclick = () => flipCard(index);
        
        // Show if flipped or matched
        if (gameState.flipped.includes(index) || gameState.matched.includes(index)) {
            card.classList.add('flipped');
            card.textContent = emoji;
        }
        
        if (gameState.matched.includes(index)) {
            card.classList.add('matched');
        }
        
        board.appendChild(card);
    });
}

// Flip a card
function flipCard(index) {
    // Can't flip if already flipped, matched, or locked
    if (gameState.flipped.includes(index) || 
        gameState.matched.includes(index) || 
        gameState.isLocked) {
        return;
    }
    
    // Add to flipped
    gameState.flipped.push(index);
    renderBoard();
    
    // If two cards flipped, check match
    if (gameState.flipped.length === 2) {
        gameState.isLocked = true;
        gameState.moves++;
        
        checkMatch();
    }
}

// Check if two cards match
function checkMatch() {
    const [first, second] = gameState.flipped;
    const match = gameState.cards[first] === gameState.cards[second];
    
    setTimeout(() => {
        if (match) {
            // Match!
            gameState.matched.push(first, second);
        }
        
        // Reset flipped
        gameState.flipped = [];
        gameState.isLocked = false;
        
        // Render
        renderBoard();
        updateStats();
        
        // Check win
        if (gameState.matched.length === gameState.cards.length) {
            winGame();
        }
    }, 600);
}

// Update stats display
function updateStats() {
    document.getElementById('moves').textContent = gameState.moves;
    document.getElementById('matched').textContent = 
        `${gameState.matched.length / 2}/${gameState.cards.length / 2}`;
    document.getElementById('best').textContent = gameState.bestScore;
}

// Win game
function winGame() {
    const message = document.getElementById('message');
    message.classList.add('show', 'win');
    message.textContent = `🎉 You won in ${gameState.moves} moves!`;
    
    // Update best score
    if (gameState.bestScore === '-' || gameState.moves < parseInt(gameState.bestScore)) {
        gameState.bestScore = gameState.moves;
        localStorage.setItem('bestScore', gameState.moves);
        updateStats();
    }
}

// Set difficulty
function setDifficulty(level) {
    gameState.difficulty = level;
    
    // Update buttons
    document.querySelectorAll('.difficulty button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Reset grid columns
    const gridCols = {
        easy: 3,
        medium: 4,
        hard: 5
    };
    document.getElementById('gameBoard').style.gridTemplateColumns = 
        `repeat(${gridCols[level]}, 1fr)`;
    
    // New game
    resetGame();
}

// Reset game
function resetGame() {
    document.getElementById('message').classList.remove('show', 'win');
    initGame();
}

// Start on page load
window.onload = initGame;
```

**Concepts:**
- Object to manage game state
- Array methods (push, includes, slice)
- DOM manipulation (getElementById, createElement, textContent)
- Event listeners (onclick)
- setTimeout (delay)
- localStorage (persistent data)
- Array spreading (...)
- Destructuring assignment
- Arrow functions

---

## File Structure in CoderKit

```
project/
├── app.py
├── templates/
│   └── index.html
└── static/
    └── game.js
```

**In CoderKit (this is how simple it is):**
1. Create `app.py` with Flask code
2. Create `templates` folder, add `index.html`
3. Create `static` folder, add `game.js`
4. Run `app.py`
5. Open browser: `http://localhost:5000`

---

## Complete app.py

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
```

---

## Step-by-Step Implementation (CoderKit Mobile)

### **Monday (1.5 hours)**
- Create `app.py` with Flask
- Create folder structure
- Create `index.html` (up to `<style>`)
- Test: Run app, see page load

### **Tuesday (2 hours)**
- Complete `index.html` (HTML + CSS)
- Create `static/game.js` (first half, init & shuffle)
- Test: Cards display in grid

### **Wednesday (2 hours)**
- Complete `game.js` (flip logic, match checking)
- Test: Flip cards, see matching work
- Debug: Fix any layout issues

### **Thursday (1.5 hours)**
- Add difficulty levels
- Add score tracking
- Test all features
- Polish animations

### **Friday (1 hour)**
- Share with friends
- Screenshot for portfolio
- Deploy to web (optional)

---

**Next: Test your game in CoderKit's browser.**

## Testing Checklist

- ✅ Flask server starts
- ✅ Page loads at `http://localhost:5000`
- ✅ Cards display in grid
- ✅ Cards flip on click
- ✅ Two cards show emoji
- ✅ Matching cards stay flipped
- ✅ Non-matching cards flip back
- ✅ Move counter increments
- ✅ Matched counter shows correct count
- ✅ Win message appears
- ✅ Difficulty buttons work
- ✅ Grid changes size per difficulty
- ✅ Best score saves (localStorage)
- ✅ Mobile responsive (try on phone!)

---

## Extensions

**If you want more:**

1. **Sound effects**
```javascript
// When cards match
new Audio('success.mp3').play();
```

2. **Time limit**
```javascript
let timeLeft = 120;
setInterval(() => { timeLeft--; }, 1000);
```

3. **Leaderboard**
```python
# Store scores in database
scores = [
    {'name': 'Alex', 'moves': 15},
    {'name': 'Jordan', 'moves': 18}
]
```

4. **Multiplayer**
```javascript
// Two players take turns
let currentPlayer = 1;
```

5. **More themes**
```javascript
const themes = {
    animals: ['🐶', '🐱', '🐭', ...],
    sports: ['⚽', '🏀', '🎾', ...],
    weather: ['☀️', '⛅', '🌧️', ...]
};
```

---

## Concepts You're Learning

**Beginner:**
- HTML structure & forms
- CSS styling & animations
- JavaScript basics (variables, functions)
- Event listeners (onclick)

**Intermediate:**
- DOM manipulation (create, modify, style elements)
- Game state management
- Array methods (push, includes, map, filter)
- Conditional logic (if/else)
- setTimeout (asynchronous code)

**Advanced:**
- Algorithm design (shuffle, matching)
- Performance (game loop)
- Data persistence (localStorage)
- Responsive design
- Web server (Flask)

---

## Deploy to Web (Optional Friday Bonus)

**This is the power of CoderKit:** You built a web game on your phone. Now deploy it to the world.

Once you build it in CoderKit, you can deploy it free:

1. **Option 1: Vercel** (HTML/CSS/JS only)
   - Push to GitHub
   - Connect to Vercel
   - Live at `yourname.vercel.app`

2. **Option 2: Railway** (with Flask)
   - Push to GitHub
   - Connect to Railway
   - Live immediately

3. **Option 3: Heroku** (Flask + Python)
   - Same process
   - Free tier available

Your CoderKit project becomes a **live web game** 🌐

---

## The Real Power

You're not just "learning to code."

You're building **production web applications** on your phone.

The same HTML/CSS/JavaScript works:
- In CoderKit on your phone
- On your desktop browser
- On a live website
- On tablets and laptops

**This scales.** From this Memory Game to real SaaS products.

---

## Your Achievement

You just built—**on your phone with CoderKit:**
- ✅ A web server (Flask)
- ✅ A responsive frontend (HTML/CSS)
- ✅ Complex game logic (JavaScript)
- ✅ Data persistence (localStorage)
- ✅ Mobile-friendly experience
- ✅ Production-ready code

**This is real web development.**

Not a tutorial project. Not "learning". This is **professional**-level code you'll use in real products. And you did it all on your phone.

---

## Next Steps

After this, you're ready for:
- **Quiz app** (store questions, track scores)
- **To-do app** (persist data, edit/delete)
- **Chat app** (Flask with WebSockets)
- **Dashboard** (display real data)
- **Full app** (deploy for real users)

You have the skills. Pick what excites you.

---

## Ready?

You have everything you need.

- Download CoderKit
- Create these files
- Build the game
- **Ship it.**

This game will teach you more than 100 hours of tutorials.

**Let's build.** 🚀

---

**[Download CoderKit Free - Start Building →](https://coderkit.app/download)**

*Your web game is waiting. Build it this week—without a laptop.*

---

**Share your game:** Built your Memory Game in CoderKit? Tag us [@coderkit](https://twitter.com/coderkit) with your screenshots!

*Next week: Deploy your projects. From phone to the world in minutes.*

# CoderKit Features Overview

A complete guide to every feature inside CoderKit—your complete mobile IDE and learning platform.

---

## 🎯 The Core Experience

CoderKit has **two main modes**:

### 1. **IDE Mode** - Write, Run, Debug Code
Everything you need to code like a professional, right on your phone.

### 2. **Learn Mode** - Interactive Courses & Practice
Step-by-step lessons with visualizers, challenges, and progress tracking.

Let's explore both.

---

## 💻 IDE Mode: The Code Editor

### Multi-Tab Editor
- **Open multiple files** in tabs (switch between them instantly)
- **Language detection** - Automatically recognizes file type (`.py`, `.java`, `.js`, etc.)
- **Syntax highlighting** - Color-coded keywords, strings, comments
- **Line numbers** - Easy reference for debugging
- **Horizontal scrolling** - Type long lines without wrapping

**Example workflow:**
```
📁 my-project
  ├─ main.py (Tab 1)
  ├─ utils.py (Tab 2)
  └─ data.json (Tab 3)
→ Tap any tab to switch files instantly
```

### Custom Virtual Keyboard
A **coding-first keyboard** designed for touch:

**What makes it special:**
- ✅ Access `{ } ( ) [ ] : ; = + -` with one tap
- ✅ Language-aware (Python symbols ≠ Java symbols)
- ✅ Massive spacebar for easy hitting
- ✅ UNDO/REDO buttons (no undo history lost)
- ✅ Snippet insertion button
- ✅ Numbers row (always visible)

**Keyboard Layout:**
```
[Symbols Row: { } ( ) [ ] : ; = ...]
[Numbers: 0 1 2 3 4 5 6 7 8 9]
[Letters: Q W E R T Y U I O P ...]
[Utils: SNIP | TAB | UNDO | REDO | SPACE | ENTER | ⌫]
```

**Shift Behavior:**
- Tap once → Next letter uppercase
- Long press → CAPS LOCK toggle

### Code Execution
- **Run button** (▶) - Execute your code with one tap
- **Stop button** (⏹) - Kill running process
- **Real-time output** - See results instantly in terminal
- **Interactive input** - Program asking for input? Type in terminal and submit
- **Error messages** - Clear, actionable error messages with line numbers

### Terminal Output
- **Live streaming output** - See `print()` statements as they happen
- **Colored text** - ANSI colors supported (for beautiful terminal output)
- **Scroll history** - See all previous output
- **Clear terminal** - Wipe it clean for the next run
- **Copy output** - Select and copy any output text

**Example:**
```
▶ Run
$ python main.py
What's your name? → [user types: Alice]
Hello, Alice!
```

### File Management
- **File explorer** sidebar (swipe from left)
- **Create files** - Right-click → New File
- **Rename/Delete** - Hold file → Options
- **Create folders** - Organize projects
- **Import files** - Add existing code to project
- **Download files** - Export code to save on device

### Syntax Highlighting
Languages supported with full syntax coloring:
- 🐍 Python
- ☕ Java
- 🌐 JavaScript, TypeScript, HTML, CSS
- 🔧 C, C++
- 🎯 Go
- 💎 Groovy, Clojure, PHP, Ruby, Bash
- 📊 JSON, XML, SQL

---

## 📚 Learn Mode: Interactive Courses

### Course Browser
- **Browse all courses** - Organized by language & difficulty
- **Free & Premium** - Some courses free, others require subscription
- **Filter by level** - Beginner, Intermediate, Advanced
- **Search** - Find courses by keyword or language

### How Lessons Work

Every lesson follows the **Rhombus Methodology** (our proven 7-layer learning framework):

```
Explanation → Visualize → Practice → Challenge → Master
    ↓           ↓           ↓          ↓         ↓
 Theory      Animation   Hands-on  Problem-  Deep
 + Text      + Touch     Solving   Solving   Dive
```

### Interactive Visualizers
**20+ specialized visualizers** to visualize concepts:

**Data Structures:**
- 🔗 Linked Lists (see nodes connect)
- 🌳 Binary Trees (watch algorithms navigate)
- 📊 Hash Tables (visualize collisions)
- 📈 Graphs (see pathfinding in action)

**Algorithms:**
- ⚡ Sorting (watch bubbles, merges, quicksort animate)
- 🔍 Searching (see binary search narrow down)
- 🧭 Pathfinding (watch A* and Dijkstra solve mazes)

**Core Concepts:**
- 💾 Memory (see stack/heap allocation)
- 🔄 Loops (watch iteration happen)
- 🌊 Recursion (see function calls stack)
- ⚙️ State Machine (state transitions animated)

**Languages:**
- 🐍 Python syntax, built-in functions, libraries
- ☕ Java OOP, inheritance, polymorphism
- 🌐 DOM manipulation, event flow, async/await

**How they work:**
1. **Play**: Tap play to animate the visualizer
2. **Pause**: Stop at any moment to examine the state
3. **Interact**: Drag nodes, change inputs, watch instant feedback
4. **Control**: Adjust speed, skip to specific step

### Guided Practice
- **Code editor with hints** - Semi-transparent "ghost code" shows the pattern
- **Type-along** - Match the hint structure with your own code
- **Validation** - Instant feedback when you complete correctly
- **Explanations** - Tooltips explain each step

**Example:**
```
Task: Write a function that returns the square of a number

Ghost Code (semi-transparent):
def square(___):
    return ___ * ___

You type:
def square(n):
    return n * n

✅ Correct! You completed this challenge!
```

### Challenges & Quizzes
- **Bug Squasher** - Buggy code provided; find and fix the bug
- **Code Scramble** - Lines of code scrambled; unscramble to fix logic
- **Function Builder** - Drag blocks to build functions
- **Multiple Choice** - Quick concept checks
- **Free Coding** - Write from scratch with minimal hints

### Progress Tracking
- **Concept completion** - See which concepts you've mastered
- **Course progress bar** - Visual indicator of course completion
- **Stats dashboard** - Lines typed, problems solved, current streak
- **Leaderboard** - Compete with friends (optional)
- **Badges & achievements** - Unlock badges for milestones

---

## 🌐 Web Preview

### Live HTML/CSS/JS Preview
- **Side-by-side editor & preview** - Edit left, see changes right
- **Live refresh** - Preview updates as you type
- **Responsive preview** - Test on different screen sizes
- **Mobile viewport** - See how your web app looks on phones

### Web Frameworks Support
- **React** - Full JSX support with hot reload
- **Vue** - Single File Components
- **Vanilla JavaScript** - Fetch API, DOM manipulation
- **Tailwind CSS** - Utility-first CSS framework
- **Bootstrap** - Responsive framework

### Browser Features
- **Console logs** - See `console.log()` output in terminal
- **Network requests** - Basic fetch/XHR visualization
- **Local storage** - Test localStorage API
- **Responsive testing** - Portrait & landscape modes

---

## 🔧 Advanced Features

### Search & Replace
- **Find text** - Search across current file
- **Replace** - Replace single or all occurrences
- **Case sensitive** - Toggle for exact matching
- **Regular expressions** - Advanced pattern matching

### Code Snippets
- **Snippet library** - Pre-built code templates
- **Quick insert** - SNIP button → select → insert
- **Custom snippets** - Create your own (coming soon)
- **Language-specific** - Different snippets per language

**Example snippets:**
```python
# Python - for loop
for i in range(10):
    print(i)

# Python - list comprehension
squares = [x**2 for x in range(10)]
```

### Theme & Appearance
- **Dark mode** - Easy on the eyes (default for developers)
- **Light mode** - For bright environments
- **Custom colors** - Syntax highlighting customization
- **Font size** - Adjust for your eyesight
- **Font family** - Monospace fonts (Fira Code, JetBrains Mono)

---

## 📊 Community & Social

### Share Code
- **Export code** - Download as `.py`, `.java`, etc.
- **Share projects** - QR code to share with friends
- **GitHub integration** - Push to GitHub (coming soon)

### Leaderboards
- **Weekly challenges** - Compete with others
- **Language rankings** - Top coders per language
- **Friend rankings** - See how you stack up

### Community Forum
- **Ask questions** - Get help from the community
- **Share solutions** - Show your cool projects
- **Discuss concepts** - Deep dives on learning topics

---

## 🎁 Subscriptions & Pricing

### Free Plan
- ✅ Python & Web IDEs (unlimited)
- ✅ Free courses (intro level)
- ✅ 3 interactive visualizers
- ✅ Basic stats tracking
- ❌ No premium courses
- ❌ Limited challenges

### Subscription Plans

**🌟 Workspace Web** ($1.99/mo or $11.99/yr)
- ✅ All free features
- ✅ Web + JavaScript + TypeScript IDE
- ✅ Premium web development courses
- ✅ All visualizers (20+)
- ✅ Unlimited challenges

**💎 Workspace Enterprise** ($3.99/mo or $29.99/yr)
- ✅ Everything in Web +
- ✅ Java + C/C++ + Go IDEs
- ✅ Enterprise courses (Spring, Django)
- ✅ Priority support
- ✅ Offline course downloads

**⭐ Full Stack Pro** ($4.99/mo or $39.99/yr)
- ✅ EVERYTHING
- ✅ All languages & courses
- ✅ Desktop sync (VS Code extension)
- ✅ Project backups
- ✅ No ads

### Individual Courses
- **$5.99–$19.99** - Buy single courses
- **Permanent access** - Lifetime after purchase
- **Money-back guarantee** - 30 days if unsatisfied

---

## ⚡ Offline Capabilities

### Works Without Internet
- ✅ Code editor (always online)
- ✅ Language runtimes (download once, use offline)
- ✅ Bundled courses (offline access)
- ✅ Visualizers (no internet needed)

### What Requires Internet
- 📶 Downloading language packs (1st time)
- 📶 Syncing progress to cloud
- 📶 Downloading premium courses
- 📶 GitHub integration (fetching)

---

## 🚀 Performance

### Optimizations
- **Lazy loading** - Large files load smoothly
- **Cached files** - Faster re-opening of projects
- **Efficient rendering** - 60fps smooth scrolling
- **Compression** - Minimal data usage

### System Requirements
- **RAM:** 4GB minimum (works best with 6GB+)
- **Storage:** 200MB+ free (+ language runtime size)
- **Android:** API 29+ (Android 10+)

---

## 📞 Getting Help

**In-app Help:**
- Long-press any button for tooltip
- Settings → Help → Video tutorials
- Settings → FAQ

**Online Support:**
- **Email:** [support@coderkit.app](mailto:support@coderkit.app)
- **Discord:** [discord.gg/codelab](https://discord.gg/codelab)
- **Twitter:** [@CoderKitApp](https://twitter.com/CoderKitApp)

---

**Ready to explore?** Download CoderKit and start coding! 🚀


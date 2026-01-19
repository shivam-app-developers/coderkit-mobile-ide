# IDE Guide: Master the Code Editor

A deep dive into CoderKit's powerful code editor and everything you can do with it.

---

## 📖 Table of Contents
1. [Editor Interface](#editor-interface)
2. [The Custom Keyboard](#the-custom-keyboard)
3. [Writing Code](#writing-code)
4. [Running & Debugging](#running--debugging)
5. [File Management](#file-management)
6. [Advanced Editing](#advanced-editing)
7. [Keyboard Shortcuts & Tips](#keyboard-shortcuts--tips)

---

## Editor Interface

### Main Components

```
┌─────────────────────────────────────────────────┐
│ 📁 MyProject    ⚙️                            ❌ │ ← Header
├─────────────────────────────────────────────────┤
│ main.py  utils.py  data.json              ➕   │ ← File tabs
├─────────────────────────────────────────────────┤
│ 1  def hello():                                 │
│ 2      print("Hello, World!")                   │
│ 3                                               │ ← Code editor
│ 4  if __name__ == "__main__":                   │   (syntax highlighted)
│ 5      hello()                                  │
│                                                 │
├─────────────────────────────────────────────────┤
│ ▶ Run   ⏹ Stop   🔍 Find    📋 Copy  ✂️ Cut  │ ← Toolbar
├─────────────────────────────────────────────────┤
│ [Symbols] [Numbers] [QWERTY] [Utils]           │ ← Custom Keyboard
└─────────────────────────────────────────────────┘
```

### The Header
- **Project name** - Tap to rename project
- **Settings icon** - Project settings & file options
- **Close button (X)** - Return to home screen

### File Tabs
- **Active tab** - White/highlighted
- **Inactive tabs** - Grayed out (tap to switch)
- **➕ button** - Create new file
- **Long-press tab** - Delete or rename file

---

## The Custom Keyboard

### Overview
CoderKit's keyboard is **purpose-built for coding**, not texting. Every symbol you need is within 2 taps.

### Keyboard Structure

#### Row 1: Symbols (Scrollable)
```
Symbols: { } ( ) [ ] : ; = + - * / . , < > ! ? @ # $ % ^ & | \ " '
```
- **Language-aware** - Different symbols for Python, Java, JavaScript, etc.
- **Scrollable** - Swipe left/right to see more symbols
- **Long-press** - Some symbols have variants (e.g., `:` has `::`)

**Pro Tip:** The first 5 symbols are the **most common for your language**.

#### Row 2: Numbers
```
Numbers: 0 1 2 3 4 5 6 7 8 9
```
- Always visible
- Large, easy to tap
- No shift needed

#### Row 3: QWERTY Letters
```
Q W E R T Y U I O P
A S D F G H J K L
Z X C V B N M
```
- Standard QWERTY layout (familiar)
- Uppercase when SHIFT is active
- Two-letter keys for less common letters (e.g., long-press `Q` for `Ä`)

#### Row 4: Utility Keys
```
[SNIP] [TAB] [UNDO] [REDO] [SPACE] [ENTER] [⌫ BACK]
```

| Key | Function | Use Case |
|-----|----------|----------|
| **SNIP** | Open snippet library | Insert pre-written code |
| **TAB** | Insert 2 spaces (indentation) | Python indents, code structure |
| **UNDO** | Undo last action | Mistake? Revert instantly |
| **REDO** | Redo last undone action | Changed your mind? Redo it |
| **SPACE** | Insert space | Large button for easy tapping |
| **ENTER** | New line | Start a new line |
| **BACK** | Delete previous character | Remove character to the left |

### Shift & Caps Lock

**Single Tap SHIFT**
- Next character types as UPPERCASE
- Reverts automatically (momentary shift)
- Perfect for `Name = "Alice"` (single capitals)

**Long Press SHIFT (or double-tap)**
- Toggles CAPS LOCK
- All letters become UPPERCASE
- Tap SHIFT again to exit CAPS LOCK
- Light indicator shows when CAPS is active

**Visual Indicator:**
```
SHIFT   ← Normal
SHIFT★  ← CAPS LOCK active
```

### Symbol Customization
Different languages have different symbol rows:

**Python Symbols (most common):**
```
_ . : ( ) [ ] { } # @ ! = + - * / % &
```
*Python uses underscores, colons, and @ for decorators*

**Java Symbols:**
```
{ } ( ) [ ] ; . : = + - * / % ! & |
```
*Java uses semicolons, curly braces, and single characters*

**JavaScript Symbols:**
```
{ } ( ) [ ] : ; . = + - * / % ! & | " ' $
```
*JS uses backticks, $ for templates, spread operator*

---

## Writing Code

### Basic Typing
1. **Tap in the editor** - Cursor appears (blue vertical line)
2. **Type using keyboard** - See text appear in real-time
3. **Syntax highlighting** - Colors appear automatically

### Cursor Movement
- **Tap anywhere** - Cursor jumps to that position
- **Swipe left/right** - Scroll horizontally (for long lines)
- **Long-press** - Select word or line
- **Double-tap** - Select current word

### Selection & Editing
- **Drag to select** - Hold and drag to highlight text
- **Copy** - Select text → tap Copy button (or Ctrl+C*)
- **Cut** - Select text → tap Cut button
- **Paste** - Tap Paste button → inserts selected text
- **Delete** - Select text → press BACK

*Note: Keyboard shortcuts work if you connect a Bluetooth keyboard.*

### Auto-Formatting (Coming Soon)
- Press **Format button** → Code auto-indents correctly
- Removes extra spaces
- Fixes indentation issues

### Line Operations
- **Line numbers** visible on left side
- **Tap line number** - Select entire line
- **Duplicate line** - Select → button in toolbar
- **Delete line** - Select → press BACK

---

## Running & Debugging

### Execution Workflow

**Step 1: Prepare Code**
- Write your Python, Java, JavaScript, etc.
- Check for obvious syntax errors (red underlines)

**Step 2: Run Code**
1. Tap **▶ Run** button (top toolbar)
2. CoderKit checks for syntax errors
3. If OK → Code executes
4. **Terminal opens** with output

**Step 3: See Output**
```
▶ Run
$ python main.py
Hello, World!
```

**Step 4: Interact (if needed)**
If code needs input:
```
What's your name? [TextInput Field]
[Submit Button]
```

**Step 5: Stop (if needed)**
- Code done? Terminal shows results
- Infinite loop? Tap **⏹ Stop** to kill process
- Debug more? Fix code and run again

### Error Messages

CoderKit provides **helpful error messages**:

**Syntax Error:**
```
❌ SyntaxError on line 3
   Unexpected indent
   
   3: print("Hello")
      ^
Fix: Check your indentation
```

**Runtime Error:**
```
❌ NameError on line 5
   Name 'result' is not defined
   
   5: print(result)
            ^^^^^^
Fix: Did you forget to define 'result'?
```

**Language Not Installed:**
```
⚠️ Python runtime not installed
   Would you like to download it? (150MB)
   
   [Download] [Cancel]
```

### Debugging Tips

1. **Read the error message carefully** - It tells you the problem and line
2. **Check line numbers** - Navigate to the error location
3. **Add print statements** - Log values to understand state
4. **Test step-by-step** - Run small parts independently
5. **Use the terminal** - Interactive mode for testing snippets

### Process Control

**Stop Running Code:**
- Tap **⏹ Stop** button
- Process killed immediately
- Infinite loops? This is your rescue button

**Timeout:**
- Code running too long? (>60 seconds by default)
- Automatic timeout to save battery
- Adjust in Settings → Execution Timeout

---

## File Management

### Project Structure
```
📁 MyProject/
  ├── 📄 main.py
  ├── 📄 utils.py
  ├── 📁 data/
  │   └── 📄 input.json
  └── 📄 README.md
```

### Create New File
1. Tap **➕** button (next to file tabs)
2. Choose language (`.py`, `.java`, `.js`, etc.)
3. Enter filename
4. Create → Opens blank file

### Rename File
1. Long-press file tab
2. Select **Rename**
3. Enter new name
4. Confirm

### Delete File
1. Long-press file tab
2. Select **Delete**
3. Confirm (no undo!)

### Create Folder
1. Tap **📁 Files** sidebar
2. Tap **Create Folder**
3. Enter folder name
4. Create

### Move Files
1. Open **Files** sidebar
2. Drag file → Drop in folder
3. Or: Right-click → Move

### Import External File
1. Tap **Files** sidebar
2. Tap **Import**
3. Choose file from device
4. Select project folder
5. Import → File added to project

### Export Files
1. Select file
2. Tap **⋯ More** (three dots)
3. Select **Export**
4. Choose location
5. File saved to device

---

## Advanced Editing

### Search & Replace

**Find Text:**
1. Tap **🔍 Find** button
2. Enter search text
3. Results highlighted
4. Navigate with ↑ ↓ arrows

**Replace Text:**
1. Open Find dialog
2. Tap **Replace** tab
3. Enter search & replacement text
4. Click **Replace** (single) or **Replace All**
5. Confirm changes

### Code Snippets

**Insert Snippet:**
1. Tap **SNIP** on keyboard
2. Browse snippet library
3. Select snippet
4. Text auto-inserts

**Example Snippets:**
```python
# Python: for loop
for i in range(10):
    print(i)

# Python: try-except
try:
    # code here
except Exception as e:
    print(e)
```

### Multi-File Editing
- Open multiple files in tabs
- Switch between them instantly
- Edit one, save all
- Perfect for organized projects

### Code Formatting

**Auto-format (future feature):**
1. Select all code (Ctrl+A)
2. Tap **Format** button
3. Code auto-indents & beautifies

**Manual Formatting:**
- TAB key for indentation
- Type your own spacing/alignment

---

## Keyboard Shortcuts & Tips

### Physical Keyboard Shortcuts
If you connect a **Bluetooth keyboard**, these work:

| Shortcut | Action |
|----------|--------|
| `Ctrl+A` | Select all |
| `Ctrl+C` | Copy |
| `Ctrl+X` | Cut |
| `Ctrl+V` | Paste |
| `Ctrl+Z` | Undo |
| `Ctrl+Y` | Redo |
| `Ctrl+F` | Find |
| `Ctrl+H` | Replace |
| `Ctrl+R` | Run code |
| `Tab` | Indent |
| `Shift+Tab` | Unindent |

### Mobile Keyboard Tips

**Typing Faster:**
- Use **gesture typing** (swipe letters instead of tapping)
- Long-press for variants (e.g., `a` → `á`, `à`, `ä`)
- Double-tap SPACE for quick period (`.`)

**Reaching Symbols:**
- Swipe left in symbols row for more options
- Long-press symbols for variants
- Common symbols pinned at start of row

**One-Handed Typing:**
- Shift keyboard to left/right (Settings → Keyboard Position)
- Larger keys when keyboard is smaller
- Slower but doable on phones

### General Tips

**Save Automatically:**
- CoderKit **auto-saves** as you type
- No need to manually save
- Recover unsaved work from history (Undo goes back far)

**Use Line Numbers:**
- Tap line number to select entire line
- Jump to line via Go To command
- Error messages reference line numbers

**Organize Imports:**
- Keep all imports at the top
- SNIP button has import snippets
- Auto-organize (coming soon)

**Comment Your Code:**
- **Python:** `# Comment`
- **Java:** `// Comment` or `/* Multi-line */`
- **JavaScript:** `// Comment` or `/* Multi-line */`

**Test Small Pieces:**
- Don't write 100 lines then run
- Write 5-10 lines, run, verify
- Easier to debug incrementally

---

## 🎓 Common Workflows

### Python Script Development
```
1. Create main.py
2. Write import statements
3. Define functions
4. Add main block
5. Test with input/output
6. Debug errors
7. Run final version
```

### Java Program
```
1. Create Main.java
2. Write class definition
3. Create main() method
4. Import necessary libraries
5. Write logic
6. Compile & run
7. Fix errors
```

### Web Development (HTML/CSS/JS)
```
1. Create index.html
2. Add HTML structure
3. Create style.css
4. Add styling
5. Create script.js
6. Add interactivity
7. View live preview
```

---

## 🆘 Troubleshooting

### Code Won't Run
- **Syntax error?** Red underlines show issues
- **Missing runtime?** Download language pack
- **Infinite loop?** Tap Stop button
- **Memory issue?** Close other apps

### Keyboard Not Working
- **Unresponsive?** Long-press and hold Symbol key
- **Symbols missing?** Swipe in symbols row to reveal
- **Too small?** Use landscape mode for larger keyboard
- **Want to switch?** Settings → Keyboard → Change Layout

### Editor Too Small
- **Landscape mode** gives more screen space
- **Tablet?** Keyboard is larger on bigger screens
- **Pinch to zoom** editor (not the keyboard)

### File Issues
- **Can't import?** Make sure file format is supported
- **Can't export?** Storage permission needed (Settings)
- **Lost a file?** Check Recycle Bin (Settings → Files)

---

## 🚀 Next Steps

- ✅ Master the keyboard? Start coding!
- 📚 Want to learn? Jump to **Learn Mode**
- 🎯 Ready for challenges? Practice problems await!

**Happy coding!** 💻


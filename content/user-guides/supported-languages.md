# Supported Languages & Execution Guide

Everything you need to know about the languages CoderKit supports and how to use them.

---

## 🌍 Supported Languages Overview

CoderKit supports **15+ programming languages** across multiple domains:

| Language | Best For | Status | Runtime |
|----------|----------|--------|---------|
| 🐍 **Python** | Data science, scripting, learning | ✅ Full support | Python 3.10 |
| ☕ **Java** | OOP, Android, enterprise | ✅ Full support | OpenJDK 8+ |
| 🌐 **JavaScript** | Web, frontend, interactive | ✅ Full support | Rhino/V8 |
| 🎨 **HTML/CSS** | Web pages, styling | ✅ Full support | WebView |
| 🔧 **C** | Systems, embedded, competitive | ✅ Full support | Clang |
| ➕ **C++** | Systems, algorithms, games | ✅ Full support | Clang |
| 🎯 **Go** | Backend, cloud, DevOps | ✅ Full support | Go 1.20 |
| 💎 **Groovy** | JVM scripting, testing | ✅ Full support | OpenJDK |
| 🔮 **Clojure** | Functional, JVM | ✅ Full support | OpenJDK |
| 💾 **SQL** | Databases, queries | ✅ Full support | SQLite |
| 🐚 **Bash** | Shell scripting, automation | ✅ Full support | Busybox |
| 📝 **JSON** | Data format, config | ✅ Full support | Syntax highlighting |
| 🏷️ **XML** | Markup, config | ✅ Full support | Syntax highlighting |
| 🔴 **PHP** | Server-side web (coming soon) | 🔄 In development | PHP 8.0 |
| 💎 **Ruby** | Web, scripting (coming soon) | 🔄 In development | Ruby 3.0 |

---

## 🐍 Python

### What is Python?
- **Beginner-friendly** syntax (reads like English)
- **Powerful** (data science, AI, web backends)
- **Versatile** (can do anything)

### Python Capabilities in CoderKit

**Execution:**
- ✅ Run Python scripts
- ✅ Interactive console (REPL)
- ✅ Real-time output streaming
- ✅ Handle user input (input() function)

**Libraries Pre-installed:**
- **Data Science:** NumPy, Pandas, SciPy, Scikit-learn
- **Web:** Flask, Django, Requests, BeautifulSoup
- **Utilities:** Pillow, Matplotlib (PNG export), Regex
- **Math:** SymPy, NetworkX

**Code Example:**
```python
import random

def guess_number():
    secret = random.randint(1, 100)
    guesses = 0
    
    while True:
        guess = int(input("Guess a number (1-100): "))
        guesses += 1
        
        if guess == secret:
            print(f"✓ Correct! You guessed in {guesses} tries!")
            break
        elif guess < secret:
            print("↑ Too low, try again!")
        else:
            print("↓ Too high, try again!")

if __name__ == "__main__":
    guess_number()
```

**Run in CoderKit:**
```
▶ Run
→ Guess a number (1-100): 50
↑ Too low, try again!
→ Guess a number (1-100): 75
↓ Too high, try again!
→ Guess a number (1-100): 62
✓ Correct! You guessed in 3 tries!
```

### Python Courses in CoderKit
1. **Python 101** - Variables, loops, functions (free)
2. **Python 201** - OOP, file I/O, libraries
3. **Python 301** - Advanced patterns, decorators, generators
4. **Python 401** - Async, networking, web apps

### Python Tips
- **Start simple** - Hello World, then add features
- **Use libraries** - NumPy, Pandas make data work easier
- **Interactive mode** - Test snippets before using in scripts
- **Error messages** - Python's are usually helpful

---

## ☕ Java

### What is Java?
- **Object-oriented** (everything is a class)
- **Compiled then interpreted** (JVM runs code)
- **Enterprise standard** (banks, corporations use it)
- **Android foundation** (mobile apps)

### Java Capabilities in CoderKit

**Execution:**
- ✅ Compile to bytecode
- ✅ Run on embedded JVM
- ✅ Full OOP support
- ✅ Standard library (java.lang, java.util, etc.)

**Code Example:**
```java
import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter first number: ");
        double a = sc.nextDouble();
        
        System.out.print("Enter operator (+, -, *, /): ");
        String op = sc.next();
        
        System.out.print("Enter second number: ");
        double b = sc.nextDouble();
        
        double result = calculate(a, b, op);
        System.out.println("Result: " + result);
    }
    
    static double calculate(double a, double b, String op) {
        return switch(op) {
            case "+" -> a + b;
            case "-" -> a - b;
            case "*" -> a * b;
            case "/" -> a / b;
            default -> 0;
        };
    }
}
```

**Run in CoderKit:**
```
▶ Run
Enter first number: 10
Enter operator (+, -, *, /): *
Enter second number: 5
Result: 50.0
```

### Java Courses in CoderKit
1. **Java 101** - Basics, classes, objects (free)
2. **Java 201** - Inheritance, polymorphism, generics
3. **Java 301** - Advanced patterns, streams, threading

### Java Tips
- **Use public static void main** - Standard entry point
- **Compile errors first** - Fix syntax before running
- **Use Scanner** - For reading user input
- **Import libraries** - import java.util.*, etc.

---

## 🌐 JavaScript & Web

### What is JavaScript?
- **Run in browsers** (or on servers with Node.js)
- **Interactive web** (buttons, forms, animations)
- **ES6+ modern** (arrow functions, async/await, destructuring)

### JavaScript in CoderKit

**Execution:**
- ✅ ES6+ syntax (arrow functions, const/let, template literals)
- ✅ DOM manipulation (document.querySelector, etc.)
- ✅ Event handling (click, input, submit)
- ✅ Modern APIs (fetch, promises, async/await)
- ✅ Console logging (debugging)

**HTML/CSS/JS Integration:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Todo App</title>
    <style>
        body { font-family: Arial; }
        .done { text-decoration: line-through; }
    </style>
</head>
<body>
    <h1>My Todo List</h1>
    <input id="todoInput" type="text" placeholder="Add a task...">
    <button onclick="addTodo()">Add</button>
    <ul id="todoList"></ul>
    
    <script>
        let todos = [];
        
        function addTodo() {
            const input = document.getElementById('todoInput');
            const text = input.value.trim();
            
            if (text) {
                todos.push(text);
                renderTodos();
                input.value = '';
            }
        }
        
        function renderTodos() {
            const list = document.getElementById('todoList');
            list.innerHTML = todos
                .map((todo, i) => 
                    `<li>
                        <span>${todo}</span>
                        <button onclick="removeTodo(${i})">Delete</button>
                    </li>`
                ).join('');
        }
        
        function removeTodo(i) {
            todos.splice(i, 1);
            renderTodos();
        }
    </script>
</body>
</html>
```

**See Live Preview:**
```
[Editor on left] [Preview on right with Todo app]
Type in input → Click Add → Todo appears in list
Click Delete → Todo removed
```

### React & Vue Support
CoderKit supports modern frameworks:

**React Example:**
```jsx
import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

**Run Preview → See interactive counter**

### Web Courses
1. **Web 101** - HTML, CSS, JavaScript basics (free)
2. **Web 201** - DOM, events, responsive design
3. **Web 301** - React, Vue, modern frameworks

### Web Tips
- **Live preview** - See changes in real-time
- **Developer console** - See console.log() output
- **Mobile responsive** - Test on different sizes
- **Inspect elements** - Right-click → Inspect (in preview)

---

## 🔧 C / C++

### What is C?
- **Low-level** (memory management, pointers)
- **Fast** (compiled to native code)
- **Systems programming** (OS, embedded, games)

### What is C++?
- **C with objects** (OOP on top of C)
- **Modern C++** (C++17/20 features in CoderKit)
- **Performance** (game engines, finance systems)

### C/C++ Execution

**Code Example (C):**
```c
#include <stdio.h>

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    printf("Fibonacci sequence:\n");
    for (int i = 0; i < 10; i++) {
        printf("fib(%d) = %d\n", i, fibonacci(i));
    }
    return 0;
}
```

**Output:**
```
Fibonacci sequence:
fib(0) = 0
fib(1) = 1
fib(2) = 1
fib(3) = 2
...
fib(9) = 34
```

**C++ Example (OOP):**
```cpp
#include <iostream>
using namespace std;

class Rectangle {
private:
    double width, height;
    
public:
    Rectangle(double w, double h) : width(w), height(h) {}
    
    double getArea() { return width * height; }
    double getPerimeter() { return 2 * (width + height); }
};

int main() {
    Rectangle rect(5, 3);
    cout << "Area: " << rect.getArea() << endl;
    cout << "Perimeter: " << rect.getPerimeter() << endl;
    return 0;
}
```

### C/C++ Courses
- **C 101** - Basics, pointers, memory
- **C 201** - Data structures, algorithms

### C/C++ Tips
- **Memory management** - Free allocated memory
- **Compilation** - C/C++ must compile before running
- **Debugging** - Check compiler errors carefully
- **Performance** - Competitive programming advantage

---

## 🎯 Go

### What is Go?
- **Simple** (designed for simplicity & clarity)
- **Fast** (compiled to native)
- **Concurrent** (goroutines for async)
- **Cloud native** (Docker, Kubernetes written in Go)

### Go Example

```go
package main

import (
    "fmt"
    "time"
)

func worker(id int, jobs <-chan int, results chan<- int) {
    for job := range jobs {
        fmt.Printf("Worker %d processing job %d\n", id, job)
        time.Sleep(time.Second)
        results <- job * 2
    }
}

func main() {
    jobs := make(chan int, 5)
    results := make(chan int, 5)
    
    // Start 2 workers
    for w := 1; w <= 2; w++ {
        go worker(w, jobs, results)
    }
    
    // Send 5 jobs
    for j := 1; j <= 5; j++ {
        jobs <- j
    }
    close(jobs)
    
    // Collect results
    for r := 1; r <= 5; r++ {
        fmt.Printf("Result: %d\n", <-results)
    }
}
```

### Go Courses
- **Go 101** - Basics, goroutines
- **Go 201** - Web servers, APIs

---

## 💾 SQL & Databases

### What is SQL?
- **Query language** (talk to databases)
- **CRUD operations** (Create, Read, Update, Delete)
- **Powerful** (filtering, joining, aggregating)

### SQL Example

```sql
-- Create table
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER,
    email TEXT
);

-- Insert data
INSERT INTO users (name, age, email) VALUES
('Alice', 28, 'alice@example.com'),
('Bob', 35, 'bob@example.com');

-- Query data
SELECT name, age FROM users WHERE age > 30;

-- Update data
UPDATE users SET age = 29 WHERE name = 'Alice';

-- Delete data
DELETE FROM users WHERE id = 1;
```

### SQL in CoderKit
- **SQLite** (embedded database)
- **Interactive** (write queries, see results instantly)
- **Visualization** (see tables as they change)

### SQL Courses
- **SQL 101** - Basics, queries, tables

---

## 💎 Other Languages

### Groovy
- JVM language (Java compatibility)
- Dynamic typing (easier than Java)
- Great for scripting

### Clojure
- Functional programming
- Lisp dialect (parentheses-heavy)
- Immutability-first

### Bash
- Shell scripting
- System administration
- Command automation

### JSON & XML
- Data formats (not runnable)
- Syntax highlighting only
- Validation tools

---

## 🔄 Language Runtime Management

### Download Runtimes
**On first use:**
- Select language in IDE
- "Python not installed" → Tap Download
- Wait 2-5 minutes (WiFi recommended)
- ~150-300MB per runtime

**Manage Runtimes:**
- Settings → Languages → Installed
- See which languages downloaded
- Delete unused languages (free storage)
- Re-download anytime

### Language Limitations

**Not Supported Yet:**
- 🔴 PHP (coming Q2 2026)
- 🔴 Ruby (coming Q2 2026)
- 🔴 Swift (limited ARM support)
- 🔴 Kotlin (same as Java, use Java instead)

**Offline Execution:**
- ✅ Python, Java, C/C++, Go, Bash (fully offline)
- ✅ JavaScript (offline via bundled engine)
- ✅ HTML/CSS (offline via WebView)
- ⚠️ Web frameworks (require npm packages—partial offline)

---

## 💡 Choosing a Language

### For Beginners
**Start with:** Python  
**Why:** Easy syntax, powerful, great for learning fundamentals

**Path:** Python 101 → 201 → 301 → Choose specialization

### For Web Development
**Start with:** JavaScript + HTML/CSS  
**Why:** Required for frontend, fun to see results immediately

**Path:** Web 101 → 201 → React/Vue specialization

### For Computer Science
**Start with:** Python (fundamentals) → Java (OOP) → C (systems)  
**Why:** Progressive complexity, builds solid foundation

**Path:** Python → Java → C track

### For Competitive Programming
**Start with:** Python (fast development) or C++ (performance)  
**Why:** Python for algorithms, C++ for micro-optimizations

**Path:** Python 101 → Algorithms course → Practice problems

---

## 🆘 Troubleshooting

### Language Download Fails
- Check internet connection
- Try again (servers might be busy)
- Use WiFi instead of cellular
- Check storage space available

### Code Won't Run - Syntax Error
- Red underline shows error location
- Read error message
- Check language-specific syntax rules
- Review examples in lessons

### "Language Not Installed"
- Download runtime in Settings → Languages
- Or wait—app will prompt on first use
- Can't install? Delete other runtimes to free space

### Slow Execution
- **Python/Java:** Normal for interpreted/JVM languages
- **C/C++:** Should be fast; check code efficiency
- **JavaScript:** Browsers are slower; use modern syntax

---

## 🚀 Next Steps

- ✅ Choose your language? Start coding!
- 📚 Want to learn properly? Jump to Learn Mode
- 🏆 Ready for challenges? Practice problems await

**Which language calls to you?** 🚀


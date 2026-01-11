# App Capabilities & Features

Welcome to the ultimate mobile coding experience. This document outlines the powerful features and language capabilities available in the app, designed for learning, experimenting, and building real projects offline.

---

## 🚀 Core App Features

### 1. Professional Mobile IDE

* **Offline-First**: Compile and run code locally on your device. No internet connection required.
* **Smart Code Editor**:
  * Syntax Highlighting for 10+ languages.
  * Real-time Error Detection (Linting).
  * Automatic Code Formatting.
  * Auto-indentation and Line Numbers.
* **Interactive Terminal**:
  * Real-time standard output (stdout).
  * Interactive standard input (stdin) – type and interact with your programs just like on a PC.
  * ANSI Color support for rich terminal output.

### 2. Workspace Management

* **File Explorer**: Create, rename, delete, and organize files and folders.
* **Multi-File Projects**: Work on complex projects with multiple files.
* **Asset Management**: Handle images and data files within your project.

### 3. Integrated Web Server

* **Live Preview**: View your web apps in an embedded browser.
* **Local Hosting**: Run real HTTP servers (Flask, Ktor, Java Web) directly on your phone.

---

## 🎓 Learn Features: The Rhombus Methodology

Our learning experience is built on the **Rhombus Methodology**, a 7-layer framework designed to take you from zero knowledge to deep mastery.

### 1. The 7-Layer Structure

* **Layer 1-3: Instructional Spiral**: Builds a holistic understanding, starting from a high-level overview and spiraling down to technical precision.
* **Layer 4: Mastery Deep Dive**: The "widest" part of the rhombus. A module-by-module deep dive where you master every concept in isolation.
* **Layer 5-7: Application Spiral**: Shifts from learning to *using*. Solve debugging challenges, synthesize concepts, and design high-level solutions.

### 2. The Interactive Loop ⚙️

Every concept is taught using a proven 3-step loop:

1. **Explain**: A concise, text-based explanation of a single atomic concept.
2. **Visualize**: A user-controlled, animated visualizer that demonstrates the concept in action.
3. **Test**: An immediate knowledge check to ensure understanding before moving on.

### 3. Interactive Visualizers

We don't just tell you; we *show* you. Our app includes 20+ specialized visualizers:

* **Core Concepts**:
  * **Interactive Theory Reader**: Dynamic text that responds to your touch.
  * **Code Comparison**: See the difference between "Good" vs "Bad" code side-by-side.
  * **Concept Decoder**: Break down complex jargon into simple terms.
* **System Internals**:
  * **OS Memory Manager**: Visualize how RAM and Stack/Heap memory work.
  * **Compilation Explorer**: Watch your code transform from text to binary.
  * **Execution Trace**: Step through code execution line-by-line.
  * **Concurrency View**: Visualize threads, locks, and race conditions.
* **Data Structures & Algorithms**:
  * **Graph & Grid Visualizers**: See pathfinding and graph algorithms in action.
  * **Tree View**: Visualize binary trees and hierarchies.
  * **Algorithmic Sandbox**: Experiment with algorithms in a safe environment.
* **Hands-on Practice**:
  * **Guided Practice**: Type-along coding exercises with "ghost code" support.
  * **Code Scramble**: Unscramble lines of code to fix the logic.
  * **Bug Squasher**: Find and fix bugs in realistic scenarios.
  * **Function Builder**: Visually construct function signatures and implementations.
* **Specialized Tools**:
  * **Regex Visualizer**: See how regular expressions match text in real-time.
  * **SQL Visualizer**: Execute queries and see the database tables update.
  * **Network Journey**: Visualize packets traveling across the internet.

---

## 🐍 Python (Data Science & Backend)

The most complete Python environment on mobile.

* **Runtime**: Full Python 3.10 environment (via Chaquopy).
* **Capabilities**:
  * ✅ **Execution**: Run scripts with real-time streaming output.
  * ✅ **Interactive Input**: Use `input()` to build interactive CLI apps.
  * ✅ **Linting**: PEP8 style checking and syntax error highlighting.
  * ✅ **Formatting**: Auto-format code to PEP8 standards.
* **Pre-installed Libraries**:
  * **Data Science**: `numpy`, `pandas`, `scipy`, `scikit-learn`.
  * **Math & Logic**: `networkx`.
  * **Web & Networking**: `Django`, `flask`, `requests`, `beautifulsoup4`, `urllib3`.
  * **Utilities**: `regex`, `faker`, `pyyaml`, `toml`, `tqdm` (progress bars), `colorama`.

### Python Web Development (Flask & Django)

* **Full Flask Support**: Run real Flask applications.
* **Full Django Support**: Run Django projects with models, views, and templates.
* **Features**:
  * Routing (`@app.route` for Flask, URL patterns for Django).
  * Jinja2/Django Templating.
  * JSON APIs.
  * Session Management.
  * ORM Support (Django).
  * Admin Panel (Django).
  * Powered by **Waitress** WSGI server.

---

## ☕ Java (Enterprise & Education)

A robust Java environment powered by the Eclipse Compiler.

* **Runtime**: Compiles with ECJ.
* **Capabilities**:
  * ✅ **Execution**: Run full Java applications with `public static void main`.
  * ✅ **Interactive Input**: Support for `Scanner` and `BufferedReader`.
  * ✅ **Linting**: Real-time syntax checking with precise error messages.
  * ✅ **Formatting**: Standard Java code formatting.
* **Language Support**: Supports modern Java syntax (Java 8 through 21) including Generics, Lambdas, and Streams.

### Java Web Development

* **Custom Web Server**: Built-in lightweight HTTP server.
* **Features**:
  * Pattern-based Routing.
  * JSON Response handling.
  * POST/PUT Body parsing.

---

## 🌐 Web Development (Frontend)

Build and preview modern web applications instantly.

### HTML & CSS

* **Live Preview**: See changes instantly in the split-screen preview.
* **Linting**: Detects invalid tags, unclosed elements, and CSS syntax errors.
* **Formatting**: Auto-format HTML and CSS for clean code.

### JavaScript (ES6+)

* **Engine**: Mozilla Rhino (ES6 compatible).
* **Capabilities**:
  * ✅ **Execution**: Run JS logic in the console.
  * ✅ **Linting**: Syntax validation.
  * ✅ **Formatting**: Prettier-style formatting.
  * **Features**: Arrow functions, `let`/`const`, Template literals.

### Modern Frameworks (React & Vue)

* **React**:
  * Write JSX code directly.
  * Use Functional Components and Hooks (`useState`, `useEffect`).
  * Compiles in-browser via Babel.
* **Vue.js**:
  * Build reactive UIs.
  * Component-based architecture.

---

## ~~💜 Kotlin~~ (Removed)

> **Note:** Local Kotlin execution was removed due to Android compatibility issues with the Kotlin compiler. See [LOCAL_EXECUTION_DOCS.md](./LOCAL_EXECUTION_DOCS.md#kotlin-removal-notes) for details.
>
> **Alternative:** Kotlin code can still be executed via the online Piston API when internet is available.

---

## 🐹 Go (Systems Programming)

Write efficient, concurrent programs with Go.

* **Runtime**: Yaegi interpreter (embedded via Gomobile AAR).
* **Capabilities**:
  * ✅ **Execution**: Run Go programs with real-time streaming output.
  * ✅ **Interactive Input**: Use `fmt.Scanln()` and `fmt.Scanf()` for interactive CLI apps.
  * ✅ **Linting**: Syntax checking via `go/parser`.
  * ✅ **Formatting**: Auto-format code using `gofmt` (`go/format`).
* **Standard Library**: Full Go standard library available (fmt, strings, math, etc.).
* **Note**: Use `fmt.Println` for prompts to ensure they display immediately (line-buffered output).

---

## 🎯 Other Languages

### Groovy

* **Runtime**: Apache Groovy 4.0.
* **Capabilities**: Script execution, Linting, Formatting. Great for scripting and automation tasks.

### Clojure

* **Runtime**: Clojure 1.11.
* **Capabilities**: REPL-style execution, Linting, Formatting. Perfect for functional programming.

### SQL

* **Engine**: SQLite.
* **Capabilities**:
  * Execute SQL queries (`SELECT`, `INSERT`, `CREATE`, etc.).
  * View result tables directly in the output.
  * Persistent database files within the workspace.

### Dart

* **Runtime**: Dart Eval.
* **Capabilities**: Basic script evaluation.

---

## 📦 Summary Table

| Language | Execution | Input (stdin) | Linting | Formatting | Web Server |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Python** | ✅ | ✅ | ✅ | ✅ | ✅ (Flask) |
| **Java** | ✅ | ✅ | ✅ | ✅ | ✅ (Custom) |
| ~~Kotlin~~ | ❌ | - | - | - | - |
| **Go** | ✅ | ✅ | ✅ | ✅ | - |
| **JavaScript** | ✅ | - | ✅ | ✅ | - |
| **HTML/CSS** | ✅ (Preview) | - | ✅ | ✅ | - |
| **Groovy** | ✅ | - | ✅ | ✅ | - |
| **Clojure** | ✅ | - | ✅ | ✅ | - |
| **SQL** | ✅ | - | - | - | - |

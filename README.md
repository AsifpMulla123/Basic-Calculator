# 🧮 Basic Calculator

[](https://opensource.org/licenses/MIT)
[](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[](https://developer.mozilla.org/en-US/docs/Web/HTML)
[](https://developer.mozilla.org/en-US/docs/Web/CSS)

**Basic Calculator** is a fast, responsive web utility designed for everyday arithmetic. Built with vanilla JavaScript, it provides a reliable interface for fundamental calculations, focusing on precision, speed, and a minimalist design that eliminates unnecessary complexity.

> ⚡ **Mission:** To provide a reliable, instant-access calculation tool by leveraging clean JavaScript logic and a tactile user interface.

-----

## 🧠 Overview

This project serves as a core implementation of functional programming and state management in the browser. It focuses on:

  * ➕ **Arithmetic Logic:** Efficiently handling addition, subtraction, multiplication, and division.
  * ⚡ **Event-Driven UI:** Using high-performance listeners to capture user inputs instantly.
  * 🎯 **UX Simplicity:** A streamlined, "no-fluff" design that prioritizes usability.

-----

## 💡 The Problem & The Solution

**The Problem:** Many digital calculators are either buried in OS submenus or bundled within complex apps, making "quick math" feel slower than it should be.

**The Solution:** This web-based calculator provides an instant-on experience. By using a lightweight stack, it loads immediately and offers a familiar grid-based interface that works seamlessly on both mobile and desktop.

-----

## ✨ Features

  * **Standard Operations:** Full support for addition, subtraction, multiplication, and division.
  * **Instant Evaluation:** Results are computed and displayed immediately upon hitting the equals sign.
  * **Responsive Feedback:** Visual cues for button presses to simulate a tactile physical calculator.
  * **Error Resilience:** Robust handling for mathematical edge cases (like division by zero).

-----

## ⚙️ How It Works: The Logic Flow

The application follows a standard input-process-output model:

1.  **Input:** User clicks a number or operator button.
2.  **State Management:** JavaScript stores the current value, the operator, and the previous value.
3.  **Operation Logic:** When the equals (`=`) button is pressed, the script executes the math based on the selected operator.
4.  **Display Update:** The calculated result is injected into the screen element using `textContent`.

-----

## 🛠 Tech Stack

| Category | Technology |
| :--- | :--- |
| **Structure** | HTML5 (Semantic Buttons & Layout) |
| **Styling** | CSS3 (Flexbox/Grid for the button matrix) |
| **Logic** | Vanilla JavaScript (ES6+ Arithmetic & Events) |

-----

## 📊 Engineering Highlights

  * **Mathematical Precision:** Managed floating-point results to ensure accurate decimal representation.
  * **Modular Logic:** Separated the arithmetic functions from the UI event listeners for better maintainability.
  * **Input Validation:** Built-in checks to prevent multiple decimals or consecutive operator errors.
  * **Division by Zero:** Implemented a specific safety check that returns an error message rather than "Infinity," improving user clarity.

-----

## ⚙️ Setup & Installation

This is a standalone frontend project with no dependencies:

1.  **Clone the Repo**

    ```bash
    git clone https://github.com/AsifpMulla123/Basic-Calculator.git
    cd Basic-Calculator
    ```

2.  **Launch**
    Simply open the `index.html` file in any modern web browser to start calculating.

-----

## 🔮 Future Roadmap

  - [ ] **Keyboard Support:** Allow users to use their physical numpad for operations.
  - [ ] **Calculation History:** Add a small ledger to track the last five operations.
  - [ ] **Scientific Mode:** Integrate square roots, exponents, and trigonometric functions.
  - [ ] **Dark Mode:** A toggle for a high-contrast dark theme.

-----

## 🤝 Connect With Me

  * **LinkedIn:** [linkedin.com/in/asif-p-mulla](https://linkedin.com/in/asif-p-mulla)
  * **Email:** [asifmullaofficial@gmail.com](mailto:asifmullaofficial@gmail.com)

-----

**If you found this utility helpful, please give it a ⭐\!**

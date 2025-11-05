⚡ The False Calculator

A fun and deceptive calculator built with HTML, CSS, and JavaScript.
Unlike normal calculators, this one lies — it intentionally gives wrong results 80% of the time while looking completely legit.
Designed with a glitchy, dark terminal-style UI, it’s part joke, part experiment, and part front-end showcase.

🌐 project preview : [live demo here](https://paras941.github.io/mini-project-false-calculator/)

(Replace this link with your deployed project)

🧱 Tech Stack

HTML5 – Structure of the calculator

CSS3 – Styling, layout, and glitch animations

JavaScript (Vanilla) – Logic and random behavior

Google Fonts – Poppins and Roboto Mono for clean typography

✨ Features

🎲 Random results — 80% false, 20% real

⚡ Glitch animation when false results appear

💻 Dark, retro-style screen with scanline effect

🚫 Error handling for invalid inputs and divide-by-zero

📱 Fully responsive design

🧠 Random “fake smart” logic

🖼️ Modes

🟥 False Mode — Glitchy red results with incorrect calculations

🟩 Correct Mode — Real calculations (rare chance)

⚠️ Error Mode — Shows warnings for invalid inputs or division by zero

📁 Folder Structure
false-calculator/
│
├── index.html       # Main UI and structure
├── style.css        # Styling and glitch effects
├── script.js        # Randomized logic and animations
└── README.md        # Project documentation

🧮 Example Behavior
Operation	Real Result	False Result
3 + 2	5	1
6 × 4	24	1.5
9 ÷ 3	3	27
2 ^ 4	16	5
🚀 How to Run Locally

Clone the repository

git clone https://github.com/your-username/false-calculator.git


Navigate to the folder

cd false-calculator


Open the project

open index.html


(Or just double-click index.html)

⚙️ Core Logic Example
if (Math.random() < 0.8) {
  resultsDiv.classList.add("false");
  setTimeout(() => resultsDiv.classList.add("glitch"), 40);
} else {
  resultsDiv.classList.add("correct");
}


This simple logic randomly decides whether to display correct or incorrect results — and triggers the glitch animation for false outputs.

🔮 Future Improvements

Add a “Truth Mode” toggle

Include sound effects for the glitch animation

Store calculation history using localStorage

Add light/dark theme switch

Rebuild as a React app with components

📜 License

Released under the MIT License — feel free to use and modify.

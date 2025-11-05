⚡ The False Calculator

A fun and deceptive calculator app built with HTML, CSS, and JavaScript — it pretends to calculate but actually gives wrong answers 80% of the time.
Designed with a glitchy screen effect and dark tech aesthetic, it’s a perfect combo of humor, randomness, and clean front-end design.

🔗 Live Demo

🎯 Click Here to Try The False Calculator

(Replace with your actual Vercel or GitHub Pages link)

🧱 Tech Stack
Technology	Purpose
🧩 HTML5	Page structure and input fields
🎨 CSS3	Styling, layout, and glitch/scanline effects
⚙️ JavaScript (Vanilla)	Core logic for calculations and randomness
🔤 Google Fonts	Poppins & Roboto Mono for tech-style typography
✨ Features
Feature	Description
🎲 Random Results	80% of the time it gives fake results, 20% real ones
⚡ Glitch Animation	Visual distortion appears during false calculations
💻 Retro Terminal Look	Dark theme with scanline overlay for a CRT effect
🚫 Error Handling	Detects invalid inputs and division by zero
📱 Responsive Design	Works perfectly across devices
🧠 Fake Intelligence	Acts “smart” while being completely wrong
🖼️ Modes Overview
Mode	Appearance	Behavior
🟥 False Mode	Red-accented results + glitch effect	Displays wrong values intentionally
🟩 Correct Mode	Green-accented results	Shows actual math results (rare)
⚠️ Error Mode	Yellow text	Prompts invalid or missing input warning
📁 Folder Structure
File	Description
index.html	Main structure and calculator UI
style.css	Styling, color scheme, and glitch effects
script.js	Fake/real calculation logic
README.md	Project documentation (this file)
🧮 Example Behavior
Operation	Real Result	False Result Example
3 + 2	5	1
6 × 4	24	1.5
9 ÷ 3	3	27
2 ^ 4	16	5

(Yes, it lies convincingly.)

🚀 Run Locally
git clone https://github.com/your-username/false-calculator.git
cd false-calculator
open index.html


No frameworks, no dependencies — just open and run.

🔧 Logic Snippet
if (Math.random() < 0.8) {
  // 80% false mode
  resultsDiv.classList.add("false");
  setTimeout(() => resultsDiv.classList.add("glitch"), 40);
} else {
  // 20% true mode
  resultsDiv.classList.add("correct");
}

🔮 Future Improvements
Feature	Description
🎚️ Truth Mode Toggle	Switch between fake/real modes manually
💾 History Log	Save past calculations
🔊 Audio FX	Add glitch and typewriter sounds
🌗 Theme Mode	Add light/dark toggle
⚛️ React Version	Component-based remake for scalability
📜 License
License	Details
📝 MIT License	Free to use, modify, and share

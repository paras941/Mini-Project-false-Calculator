const calculateBtn = document.getElementById("calculateBtn");
const resultsDiv = document.getElementById("results");

calculateBtn.addEventListener("click", function() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    resultsDiv.classList.remove("correct", "false", "glitch");

    if (isNaN(a) || isNaN(b)) {
        resultsDiv.innerHTML = "<li><span style='color:#ffc107;'>Please enter valid numbers!</span></li>";
        return;
    }

    let random = Math.random();

    let addition = a + b;
    let subtraction = a - b;
    let multiplication = a * b;
    let division = (b !== 0) ? (a / b).toFixed(4) : "Error: Div by 0";
    let exponentiation = a ** b;

    let Calculation = "";

    if (random < 0.8) {
        Calculation += `<li>Addition: <span>${a - b}</span></li>`;
        Calculation += `<li>Subtraction: <span>${a + b}</span></li>`;
        Calculation += `<li>Multiplication: <span>${(b !== 0) ? (a / b).toFixed(4) : "Error"}</span></li>`;
        Calculation += `<li>Division: <span>${a * b}</span></li>`;
        Calculation += `<li>Exponentiation: <span>${a + b - 1}</span></li>`;
        
        resultsDiv.classList.add("false");
        // this is for the glitch
        setTimeout(() => resultsDiv.classList.add("glitch"), 40);

    } else {
        Calculation += `<li>Addition: <span>${addition}</span></li>`;
        Calculation += `<li>Subtraction: <span>${subtraction}</span></li>`;
        Calculation += `<li>Multiplication: <span>${multiplication}</span></li>`;
        Calculation += `<li>Division: <span>${division}</span></li>`;
        Calculation += `<li>Exponentiation: <span>${exponentiation}</span></li>`;
        
        resultsDiv.classList.add("correct");
    }

    resultsDiv.innerHTML = Calculation;
});
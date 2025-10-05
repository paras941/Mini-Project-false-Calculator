
const calculateBtn = document.getElementById("calculateBtn");
const resultsDiv = document.getElementById("results");

calculateBtn.addEventListener("click", function() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
        resultsDiv.innerHTML = "Please enter valid numbers!";
        return;
    }

    let random = Math.random();

    let addition = a + b;
    let subtraction = a - b;
    let multiplication = a * b;
    let division = (b !== 0) ? (a / b) : "Cannot divide by zero";
    let exponentiation = a ** b;

    let Calculation = "";

    if (random < 0.8) {
        Calculation += `<p>Addition Calculation: ${a - b}</p>`;
        Calculation += `<p>Subtraction Calculation: ${a + b}</p>`;
        Calculation += `<p>Multiplication Calculation: ${a / b}</p>`;
        Calculation += `<p>Division Calculation: ${a * b}</p>`;
    } else {
        Calculation += `<p>Addition Calculation: ${addition}</p>`;
        Calculation += `<p>Subtraction Calculation: ${subtraction}</p>`;
        Calculation += `<p>Multiplication Calculation: ${multiplication}</p>`;
        Calculation += `<p>Division Calculation: ${division}</p>`;
        Calculation += `<p>Exponentiation Calculation: ${exponentiation}</p>`;
    }

    resultsDiv.innerHTML = Calculation;
});

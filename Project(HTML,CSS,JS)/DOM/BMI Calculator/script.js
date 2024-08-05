const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  // Validate height input
  if (height <= 0 || isNaN(height)) {
    result.innerHTML = "Please provide a valid height";
    return; // Exit if invalid
  }

  // Validate weight input
  if (weight <= 0 || isNaN(weight)) {
    result.innerHTML = "Please provide a valid weight";
    return; // Exit if invalid
  }

  // Calculate BMI
  const bmi = (weight / (height / 100) ** 2).toFixed(2);
  result.innerHTML = `<span>Your BMI is: ${bmi}</span>`;

  // Determine BMI category
  if (bmi < 18.5) {
    result.innerHTML += "<br>Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    result.innerHTML += "<br>Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    result.innerHTML += "<br>Overweight";
  } else {
    result.innerHTML += "<br>Obesity";
  }
});

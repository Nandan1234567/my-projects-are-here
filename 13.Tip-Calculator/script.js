// Get the button element
const button = document.getElementById("calculateButton");

// Add a click event listener
button.addEventListener("click", function () {
  // Your tip calculation logic
  let bill = parseFloat(document.getElementById("bill").value);
  let tipPercent = parseFloat(document.getElementById("tip").value);

  if (isNaN(bill) || isNaN(tipPercent)) {
    document.getElementById("result").innerHTML= "Please enter valid numbers.";
    return;
  }

  let tip = bill * (tipPercent / 100);
  let total = bill + tip;

  document.getElementById("result").innerHTML=
    "Tip: ₹" + tip.toFixed(2) + "\nTotal: ₹" + total.toFixed(2);
});

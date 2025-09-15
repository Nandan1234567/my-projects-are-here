const form = document.querySelector('form');
//if u gave value it becomes empty stored in height
// const height=parseInt(document.querySelector("#height").value)

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `plz give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `plz give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); //show the result formula if both if else condition is false
    
    
    // this is a condition for  to check overweight underweight so on
    if (bmi <= 18) {
      results.innerHTML = `<span>${bmi} it's an underweight BMI </span>`;
    }else if (bmi >= 24.9) {
      results.innerHTML = `<span>${bmi} it's an Overweight BMI </span>`;
    }else{
      results.innerHTML = `<span>${bmi} it's an Normal BMI </span>`
    }
     
  }
});

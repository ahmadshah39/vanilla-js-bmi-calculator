import "../css/style.css";

const form = document.querySelector("#bmiForm");
const alert = document.querySelector(".alert");
const result = document.querySelector(".result");
const rbmi = result.querySelector(".bmi");
const rmsg = result.querySelector(".msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert.classList.add("hidden");
  const feets = form.feet.value;
  const inches = form.inches.value;
  let weight = form.weight.value;
  const unit = form.unit.value;
  if (inches >= 12) {
    alert.classList.remove("hidden");
    alert.children[0].innerText = "Inches cannot be more than 11";
    form.reset.classList.remove("hidden");
    return;
  }
  if (unit === "Select Unit") {
    alert.classList.remove("hidden");
    alert.children[0].innerText = "Please Select Weight Unit";
    form.reset.classList.remove("hidden");
    // setTimeout(() => {
    //   alert.classList.add("hidden");
    // }, 1000);
    return;
  }
  if (unit === "Pound") {
    weight = weight / 2.205;
  }
  const totalHeightInches = parseFloat(feets) * 12 + parseFloat(inches);
  const totalHeightMeters = totalHeightInches / 39.37;
  console.log(totalHeightMeters);
  const bmi = parseFloat(weight) / (totalHeightMeters * totalHeightMeters);

  let msg;
  if (bmi < 18.6) {
    msg = "Alas! your Underweight";
  } else if (bmi > 24.9) {
    msg = "Alas! your Overweight";
  } else {
    msg = "Hurray! you have a normal BMI";
  }
  rbmi.innerText = bmi;
  rmsg.innerText = msg;
  result.classList.remove("hidden");
  form.reset.classList.remove("hidden");
});
form.reset.addEventListener("click", () => {
  alert.classList.add("hidden");
  form.reset.classList.add("hidden");
  result.classList.add("hidden");
});

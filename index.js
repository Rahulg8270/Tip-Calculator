const totalPer_Person = document.querySelector(".total-perPerson");
const tipPer_Person = document.querySelector(".tip-perPerson");
const form = document.querySelector("form");
const billInput = document.querySelector("#bill");
const tipInput = document.querySelector("#tip-Input");
const totalPeople = document.querySelector("#personNum");
const resetBtn = document.querySelector(".tip-calculator__resetBtn");

console.log(form);
// let tipAmount = 0.0;
// let totalAmount = 0.0;

// console.log(totalPer_Person);
// console.log(tipPer_Person);

function updateUI() {
  //   initial result
  totalPer_Person.textContent = `$ 0.0`;
  tipPer_Person.textContent = `$ 0.0`;
}

updateUI();

form.addEventListener("reset", (e) => {
  console.log("reset the form and the result");
  updateUI();
});

form.addEventListener("input", (e) => {
  if (billInput.value && tipInput.value && totalPeople.value) {
    let tipValue = (billInput.value / tipInput.value).toFixed(2);
    let tipPerPersonValue = (tipValue / totalPeople.value).toFixed(2);
    console.log(tipPerPersonValue);
    tipPer_Person.textContent = tipPerPersonValue;
    totalPer_Person.textContent = (billInput.value / totalPeople.value).toFixed(
      2,
    );
  }
});

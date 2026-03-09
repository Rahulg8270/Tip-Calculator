const form = document.querySelector(".calculator__form");
const totalBill = document.querySelector(".calculator__real-input--bill");
const totalPeople = document.querySelector(".calculator__real-input--people");
const resetBtn = document.querySelector(".calculator__reset-btn");

const tipAmount_perPersonEl = document.querySelector("#tip-amount-perPerson");
const totalBill_perPersonEl = document.querySelector("#total-amount-perPerson");

let selectTipOptionEl;
let selectTipEl;
let selectedTipValue;

resetBtn.addEventListener("click", () => {
  tipAmount_perPersonEl.innerHTML = `$0.0`;
  totalBill_perPersonEl.innerHTML = `$0.0`;
});

form.addEventListener("input", calculateResult);

totalPeople.addEventListener("input", validateInput);
totalBill.addEventListener("input", validateInput);

// tipButtons.forEach((tipBtn) => {
// tipBtn.addEventListener("click", );
// });

function validateInput(e) {
  const selectedContainer = e.target.closest(`fieldset`);
  const selectedInput = selectedContainer.querySelector(`input[type="number"]`);
  const targetError = selectedContainer.querySelector(
    `.calculator__label-error`,
  );

  if (selectedInput.type === "number" && Number(selectedInput.value) === 0) {
    targetError.classList.add("error-show");
    targetError.classList.remove("error-hide");
    targetError.textContent = `Can't be zero`;
  } else if (
    selectedInput.type === "number" &&
    Number(selectedInput.value) !== 0
  ) {
    targetError.classList.remove("error-show");
    ("error-show");
    targetError.classList.add("error-hide");
    targetError.textContent = ``;
  }
}

function calculateResult(e) {
  if (e.target.type === "radio") {
    selectTipOptionEl = e.target.closest(`.calculator__tip-option`);
    selectTipEl = selectTipOptionEl.querySelector(".calculator__tip-value");
    selectedTipValue = Number(selectTipEl.value) || 0;
  }

  const billNums = Number(totalBill.value) || 0;
  const personsNums = Number(totalPeople.value) || 0;

  if (billNums && personsNums && selectedTipValue) {
    const tipAmount_perPersonValue = (
      (selectedTipValue * billNums) /
      100 /
      personsNums
    ).toFixed(2);

    const billAmount_perPersonValue = Number(billNums / personsNums).toFixed(2);

    const totalBill_perPersonValue = (
      Number(billAmount_perPersonValue) + Number(tipAmount_perPersonValue)
    ).toFixed(2);
    tipAmount_perPersonEl.innerHTML = `$${tipAmount_perPersonValue}`;
    totalBill_perPersonEl.innerHTML = `$${totalBill_perPersonValue}`;
  }

  return selectedTipValue;
}

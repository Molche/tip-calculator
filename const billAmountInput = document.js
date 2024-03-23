const billAmountInput = document.getElementById('bill_amount');
const tipRateSelect = document.getElementById('tip_rate');
const tipAmountSpan = document.getElementById('tip_amount');
const totalAmountSpan = document.getElementById('total_amount');

function calculate() {
  const billAmount = parseFloat(billAmountInput.value);
  const tipRate = parseFloat(tipRateSelect.value);
  const tipAmount = billAmount * (tipRate / 100);
  const totalAmount = billAmount + tipAmount;

  tipAmountSpan.textContent = tipAmount.toFixed(2);
  totalAmountSpan.textContent = totalAmount.toFixed(2);
}

document.addEventListener('submit', (event) => {
  event.preventDefault();
  calculate();
});

calculate();
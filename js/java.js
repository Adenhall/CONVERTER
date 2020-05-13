let amount = document.getElementById('amount')
let convertButton = document.getElementById('convertButton');



let fromCurrency = document.getElementById("fromCurrency");
let toCurrency = document.getElementById("toCurrency");


const currencyRatio = {
  vnd: {
    usd: 0.000043,
    krw: 0.051,
    eur: 0.000039,
    vnd: 1
  },
  usd: {
    usd: 1,
    krw: 1193.27,
    eur: 0.9,
    vnd: 23235.5
  },
  eur: {
    usd: 0.00084,
    krw: 1,
    eur: 0.00075,
    vnd: 19.47
  }
}
console.log(currencyRatio.vnd)

function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency"
  });
  return formatter.format(value);
}


function convertMoney() {
  let from = fromCurrency.value
  let to = toCurrency.value
  let ratio = currencyRatio[from][to]
  let result = (amount.value * ratio).toFixed(2);
  document.getElementById("results").innerHTML = `Your equivalent amount is ${result}`;
  console.log(amount)
  console.log(ratio)
}
convertButton.addEventListener('click',convertMoney)

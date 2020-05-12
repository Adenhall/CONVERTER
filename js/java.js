let amountInput = document.getElementById('amountInput')
let result = amountInput.value
console.log(result)
let convertButton = document.getElementById('convertButton');


let exchangeRatioUSD = 23228.63
let exchangeRatioEUR = 25061.24
let exchangeRatioEURUSD = 1.0743


let fromCurrency = document.getElementById("fromCurrency");
let toCurrency = document.getElementById("toCurrency");
console.log(fromCurrency.value)
console.log(toCurrency.value)

function fromVNDtoUSD () {
  let result=amountInput.value;
  let convertedAmount = result / exchangeRatioUSD
  console.log("The equivalent amount is ",new Intl.NumberFormat('usd',{ style: 'currency', currency: 'USD' }).format(convertedAmount.toFixed(2)))
  document.getElementById("results").innerHTML = `your money in USD is ${new Intl.NumberFormat('usd',{ style: 'currency', currency: 'USD' }).format(convertedAmount.toFixed(2))}`;
}
function fromUSDtoVND () {
    let result = amountInput.value;
    let convertedAmount = result * exchangeRatioUSD
    console.log("The equivalent amount is ", new Intl.NumberFormat('vnd', { style: 'currency', currency: 'VND' }).format(convertedAmount.toFixed(2)))
    document.getElementById("results").innerHTML = `your money in VND is ${new Intl.NumberFormat('vnd',{ style: 'currency', currency: 'VND' }).format(convertedAmount.toFixed(2))}`;
}
function fromVNDtoEUR () {
   let result = amountInput.value;
   let convertedAmount = result / exchangeRatioEUR
   console.log("The equivalent amount is ", new Intl.NumberFormat('eur', { style: 'currency', currency: 'EUR' }).format(convertedAmount.toFixed(2)))
   document.getElementById("results").innerHTML = `your money in EUR is ${new Intl.NumberFormat('eur',{ style: 'currency', currency: 'EUR' }).format(convertedAmount.toFixed(2))}`;
}
function fromEURtoVND () {
   let result = amountInput.value;
   let convertedAmount = result * exchangeRatioEUR
   console.log("The equivalent amount is ", new Intl.NumberFormat('vnd', { style: 'currency', currency: 'VND' }).format(convertedAmount.toFixed(2)))
   document.getElementById("results").innerHTML = `your money in VND is ${new Intl.NumberFormat('vnd',{ style: 'currency', currency: 'VND' }).format(convertedAmount.toFixed(2))}`;
}
function fromEURtoUSD () {
   let result = amountInput.value;
   let convertedAmount = result * exchangeRatioEURUSD
   console.log("The equivalent amount is ", new Intl.NumberFormat('usd', { style: 'currency', currency: 'USD' }).format(convertedAmount.toFixed(2)))
   document.getElementById("results").innerHTML = `your money in USD is ${new Intl.NumberFormat('usd',{ style: 'currency', currency: 'USD' }).format(convertedAmount.toFixed(2))}`;
}
function fromUSDtoEUR () {
   let result = amountInput.value;
   let convertedAmount = result / exchangeRatioEURUSD
   console.log("The equivalent amount is ", new Intl.NumberFormat('eur', { style: 'currency', currency: 'EUR' }).format(convertedAmount.toFixed(2)))
   document.getElementById("results").innerHTML = `your money in EUR is ${new Intl.NumberFormat('eur',{ style: 'currency', currency: 'EUR' }).format(convertedAmount.toFixed(2))}`;
}
if (fromCurrency === "VND" && toCurrency === "USD") {
  convertButton.addEventListener('click',fromVNDtoUSD)
}
else if (fromCurrency === "USD" && toCurrency === "VND") {
  convertButton.addEventListener('click',fromUSDtoVND)
}
else if (fromCurrency === "EUR" && toCurrency === "VND") {
  convertButton.addEventListener('click',fromEURtoVND)
}
else if (fromCurrency === "VND" && toCurrency === "EUR") {
  convertButton.addEventListener('click',fromVNDtoEUR)
}
else if (fromCurrency === "USD" && toCurrency === "EUR") {
  convertButton.addEventListener('click',fromUSDtoEUR)
}
else if (fromCurrency === "EUR" && toCurrency === "USD") {
  convertButton.addEventListener('click',fromEURtoUSD)
}
else console.log("Currency not available")

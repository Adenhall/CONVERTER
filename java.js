let from = prompt("Please input the amount you would like to exchange: ")
from = parseInt(from)
if (isNaN(from)) {
  let from = prompt("Please input a NUMBER! (Not letters (-_-)): ")
}


let exchangeRatioUSD = 23228.63
let exchangeRatioEUR = 25061.24
let currency1 = prompt("From what currency would you like to exchange?").toLowerCase()
let currency2 = prompt("To what currency would you like to exchange?").toLowerCase()

function fromVNDtoUSD () {
  let result = from / exchangeRatioUSD
  console.log("The equivalent amount is ",new Intl.NumberFormat('usd',{ style: 'currency', currency: 'USD' }).format(result.toFixed(2)))
}
function fromUSDtoVND () {
  let result = from * exchangeRatioUSD
  console.log("The equivalent amount is ",new Intl.NumberFormat('vnd',{ style: 'currency', currency: 'VND'}).format(result.toFixed(2)))
}
function fromVNDtoEUR () {
  let result = from / exchangeRatioEUR
  console.log("The equivalent amount is ",new Intl.NumberFormat('eur',{ style: 'currency', currency: 'EUR' }).format(result.toFixed(2)))
}
function fromEURtoVND () {
  let result = from * exchangeRatioEUR
  console.log("The equivalent amount is ",new Intl.NumberFormat('vnd',{ style: 'currency', currency: 'VND'}).format(result.toFixed(2)))
}

if (currency1 === "vnd" && currency2 === "usd") {
  fromVNDtoUSD()
}
else if (currency1 === "usd" && currency2 === "vnd") {
  fromUSDtoVND()
}
else if (currency1 === "eur" && currency2 === "vnd") {
  fromEURtoVND()
}
else if (currency1 === "vnd" && currency2 === "eur") {
  fromVNDtoEUR()
}
else console.log("Currency not available")

let from = prompt("Please input the amount you would like to exchange: ")
from = parseInt(from)
if (isNaN(from)) {
  let from = prompt("Please input a NUMBER! (Not letters (-_-)): ")
}


let exchangeRatio = 23228.63
let currency1 = prompt("From what currency would you like to exchange?")
let currency2 = prompt("To what currency would you like to exchange?")


function fromVNDtoUSD () {
  let result = from / exchangeRatio
  console.log("The equivalent amount is ",new Intl.NumberFormat('usd',{ style: 'currency', currency: 'USD' }).format(result.toFixed(2)))
}
function fromUSDtoVND () {
  let result = from * exchangeRatio
  console.log("The equivalent amount is ",new Intl.NumberFormat('usd',{ style: 'currency', currency: 'VND'}).format(result.toFixed(2)))
}


if (currency1 === "vnd" && currency2 === "usd") {
  fromVNDtoUSD()
}
else if (currency1 === "usd" && currency2 === "vnd") {
  fromUSDtoVND()
}
else console.log("Currency not available")

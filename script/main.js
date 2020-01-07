var cryptoEx;
let firstInput = document.querySelector("#myInput1")
let secondInput = document.querySelector("#myInput2")
let option1 = document.querySelector("#inputGroupSelect01")
let option2 = document.querySelector("#inputGroupSelect02")
let button = document.querySelector(".submit")

function getData(){
    let url = `https://api.cryptonator.com/api/ticker/${option1.value}-${option2.value}`

    fetch(url)
        .then(data => data.json())
        .then(cryptoData => {
            cryptoEx = cryptoData
            
            console.log(cryptoEx)
        })
        .then(convert)

}

console.log(option1.value)
getData()

function convert() {
    var priceNum = cryptoEx.ticker.price
    priceNum = parseFloat(priceNum)
    var finalPrice = firstInput.value * priceNum


   secondInput.value = finalPrice
}

 

button.addEventListener("click", getData)
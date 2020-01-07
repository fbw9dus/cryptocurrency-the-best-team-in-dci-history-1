var cryptoEx;
let firstInput = document.querySelector("#myInput1")
let secondInput = document.querySelector("#myInput2")
let option1 = document.querySelector("#inputGroupSelect01").value
let option2 = document.querySelector("#inputGroupSelect02").value


function getData(){
    let url = "https://api.cryptonator.com/api/ticker/btc-usd"

    fetch(url)
        .then(data => data.json())
        .then(cryptoData => {
            cryptoEx = cryptoData
            
            console.log(cryptoEx)
        })

}

console.log(option1)
getData()
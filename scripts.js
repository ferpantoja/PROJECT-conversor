const button = document.getElementById('convert-button') 
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
const bitcoin = 92344.07

const convertValues = () =>{
    const inputReais = document.getElementById('input-value').value
    const realValueText = document.getElementById('real-value-text')
    const dolarText = document.getElementById('dolar-value-text')
    realValueText.innerHTML = inputReais
    dolarText.innerHTML = inputReais / dolar
    

    realValueText.innerHTML = new Intl.NumberFormat ("pt-br", {
        style: "currency",
        currency: "BRL",
    }) .format (inputReais);
    

if(select.value === 'US$ Dólar Americano')
dolarText.innerHTML = new Intl.NumberFormat ("en-US", {
    style: "currency",
    currency: "USD",
}) .format (inputReais / dolar);

if(select.value === '€ Euro')
dolarText.innerHTML = new Intl.NumberFormat ("de-DE", {
    style: "currency",
    currency: "EUR",
}) .format (inputReais / euro);

if(select.value === 'Bitcoin')
dolarText.innerHTML = new Intl.NumberFormat ("bitcoin", {
    style: "currency",
    currency: "₿",
}) .format (inputReais / bitcoin);



};

changeCurrency = () =>{
    currencyName = document.getElementById('currency-name')
    currencyImg = document.getElementById('currency-img')
    
    
    if(select.value === 'US$ Dólar Americano'){
        currencyName.innerHTML = "Dólar"
        currencyImg.src = "./assets/estados-unidos (1) 1.png"
    }
    
    
    if(select.value === '€ Euro'){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }
  
    if(select.value === 'Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }
  
    convertValues()

}

button.addEventListener ('click', convertValues )
select.addEventListener ('change', changeCurrency )
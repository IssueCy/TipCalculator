/*

#price
#tip
#resultContainer

*/

let price = document.getElementById('price');
let tip = document.getElementById('tip');
let resultContainer = document.getElementById('resultContainer');

price.addEventListener('input', calcResults);
tip.addEventListener('input', calcResults);


function calcResults() {
    let priceValue = parseFloat(price.value);
    let tipValue = parseFloat(tip.value);
    
    if (isNaN(priceValue) || isNaN(tipValue) || priceValue <= 0) {
        resultContainer.style.color = "orangered";
        resultContainer.innerHTML = "Please enter a valid number";
    } else {
        let result = (tipValue / priceValue) * 100;
        resultContainer.style.color = "darkblue";
        resultContainer.innerHTML = `${result.toFixed(1)}%`;
    }

}

function resetValues() {
    price.value = "";
    tip.value = "";
    resultContainer.innerHTML = "";
}

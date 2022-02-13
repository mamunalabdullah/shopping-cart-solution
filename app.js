function updateInputNumber(product, price, isIncreasing){
    const inputNumber = document.getElementById(product + "-number-input");
    let inputNumberTotal = inputNumber.value;
    if (isIncreasing) {
        inputNumberTotal = Number(inputNumberTotal) + 1;
    } else if(inputNumberTotal > 0){
        inputNumberTotal = Number(inputNumberTotal) - 1; 
    }
    inputNumber.value = inputNumberTotal;

    //update price
    const inputPrice = document.getElementById(product + "-price");
    inputPrice.innerText = inputNumberTotal * price;
    calculate();
}

function getProductNumber(product){
    const productInput = document.getElementById(product + "-number-input");
    const productNumber = Number(productInput.value);
    return productNumber;
}

function calculate(){
    const phonePrice = getProductNumber("phone") * 1219;
    const casePrice = getProductNumber("case") * 59;
    const subtotal= phonePrice + casePrice;
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    document.getElementById("subtotal").innerText = subtotal;
    document.getElementById("tax").innerText = tax;
    document.getElementById("total").innerText = total;
}


document.getElementById("phone-plus-btn").addEventListener("click", function(){
    updateInputNumber("phone", 1219, true);
})

document.getElementById("phone-minus-btn").addEventListener("click", function(){
    updateInputNumber("phone", 1219, false);
    
})
document.getElementById("case-plus-btn").addEventListener("click", function(){
    updateInputNumber("case", 59, true);
})

document.getElementById("case-minus-btn").addEventListener("click", function(){
    updateInputNumber("case", 59, false);    
})

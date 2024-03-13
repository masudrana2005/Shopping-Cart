
function handleProductChange(product, isIncrease){
    var productValue = document.getElementById(product + "-count");
    var productCount = parseInt(productValue.innerText);
    var productNewCount = productCount;
    if (isIncrease == true){
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0){
        productNewCount = productCount - 1;
    }
    productValue.innerText = productNewCount;
    var productTotal = 0;
    if (product == "phone"){
        productTotal = productNewCount * 1500;
    }
    if (product == "case"){
        productTotal = productNewCount * 65;
    }
    document.getElementById(product + "-total").innerText = "$" + productTotal;
    calculateTotal();
}

function calculateTotal(){
    var phoneValue = document.getElementById("phone-count");
    var phoneCount = parseInt(phoneValue.innerText);

    var caseValue = document.getElementById("case-count");
    var caseCount = parseInt(caseValue.innerText);

    var totalPrice = phoneCount * 1500 + caseCount * 65;
    document.getElementById("total-price").innerText = "$" + totalPrice;

    var tax = Math.round(totalPrice * 0.05);
    document.getElementById("tax-amount").innerText = "$" + tax;

    var grandTotal = totalPrice + tax;
    document.getElementById("grand-total").innerText = "$" + grandTotal;
}
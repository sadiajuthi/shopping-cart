function updateProduct(product, increasing, price) {
    const productInput = document.getElementById(product + '-input');
    let productNumber = productInput.value;
    // increasing product number
    if (increasing) {
        productNumber = parseInt(productNumber) + 1;
    }
    // decreasing product number
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    // update price 
    productInput.value = productNumber
    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = productNumber * price;
    calculateTotal();

}


function getInputValue(product) {
    productNumber = document.getElementById(product + '-input').value;
    return productNumber;
}


// total calculation
function calculateTotal() {
    getInputValue('phone')
    phonePrice = productNumber * 1219;

    getInputValue('case');
    casePrice = productNumber * 59;


    subTotal = phonePrice + casePrice;
    document.getElementById('sub-total').innerText = subTotal;

    tax = subTotal / 10;
    document.getElementById('tax').innerText = tax;

    totalPrice = subTotal + tax;
    document.getElementById('total').innerText = totalPrice;


}






document.getElementById('phone-plus-btn').addEventListener('click', function () {
    updateProduct('phone', true, '1219')
})
document.getElementById('phone-minus-btn').addEventListener('click', function () {
    updateProduct('phone', false, '1219')
})
document.getElementById('case-plus-btn').addEventListener('click', function () {
    updateProduct('case', true, '59')
})
document.getElementById('case-minus-btn').addEventListener('click', function () {
    updateProduct('case', false, '59')
})


// check out
document.getElementById('checkout').addEventListener('click', function () {
    window.location.href = "checkout.html"
}) 
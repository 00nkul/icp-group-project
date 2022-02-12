function incKg(productID) {
    var elem = document.getElementById(productID);
    var value = parseInt(elem.innerText);

    value++;
    elem.innerText = value;
}

function decKg(productID) {
    var elem = document.getElementById(productID)
    var value = parseInt(elem.innerText)
    if (value > 1) {
        value--;
    }
    elem.innerText = value
}

function changePrice(productID, productTotalID, price) {
    // alert("called")
    var elem = document.getElementById(productID)
    var total = document.getElementById(productTotalID)

    var num = parseInt(elem.innerText)
    total.innerText = 'Total: ₹' + (num * price)
}
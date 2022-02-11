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
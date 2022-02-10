function showNavbar() {
    var navBar = document.getElementById("navBar")
    var imgId = document.getElementById("cross")

    if (navBar.style.display == 'none') {
        navBar.style.display = 'block'
        imgId.style.display = 'none'
    } else {
        navBar.style.display = 'none'
        imgId.style.display = 'block'
    }
}

function hideNavbar() {
    var navBar = document.getElementById("navBar")
    var imgId = document.getElementById("cross")

    navBar.style.display = 'none'
    imgId.style.display = 'block'
}
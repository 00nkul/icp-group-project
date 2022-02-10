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
    var ico1 = document.getElementById("bloc-icon-1")
    var ico2 = document.getElementById("bloc-icon-2")
    var ico3 = document.getElementById("bloc-icon-3")
    var ico4 = document.getElementById("bloc-icon-4")

    if (ico1.style.display != 'none') {
        ico1.style.display = 'none'
        ico2.style.display = 'none'
        ico3.style.display = 'none'
        ico4.style.display = 'none'
    } else {
        ico1.style.display = 'block'
        ico2.style.display = 'block'
        ico3.style.display = 'block'
        ico4.style.display = 'block'
    }
}
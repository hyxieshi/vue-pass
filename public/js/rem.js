function remSize() {
    var devWidth = document.documentElement.clientWidth || window.innerWidth;
    if (devWidth >= 750) {
        devWidth = 750
    }
    if (devWidth <= 320) {
        devWidth = 320
    }
    document.documentElement.style.fontSize = (devWidth / 7.5) + 'px'
    document.querySelector('body').style.fontSize = 0.3 + 'rem'
}
remSize()

window.onreset = function () {
    remSize()
}
var backtotop = document.querySelector("#backtotop")
window.onscroll = function () {
    if (this.scrollY >  500) {
        backtotop.style.display = "block"
    } else {
        backtotop.style.display = "none"
    }

}

backtotop.onclick = function () {
    window.scrollTo({
        top:0, 
        behavior: "smooth"
    })
}
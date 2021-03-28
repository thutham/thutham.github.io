console.log("JS run success")
const clickEvent = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

const scrollFunc = () => {
    if (window.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementsByClassName("topButton")[0].style.display = "flex"
    } else {
        document.getElementsByClassName("topButton")[0].style.display = "none"
    }
}
window.onscroll = scrollFunc
document.getElementsByClassName("topButton")[0].addEventListener("click", clickEvent)
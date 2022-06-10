function disableError() {
    const errorInfo = document.querySelector(".error.show");
    console.log("achou!")
    setTimeout(() => {
        errorInfo.classList.remove("show");
    }, "3000");
}
window.onload = disableError();
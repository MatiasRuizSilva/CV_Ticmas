const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
    this.classList.toggle("by-moon");
    if (this.classList.toggle("bi-brightness-high-fill")) {
        body.style.background = "white";
        body.style.color = "black";
        body.style.trasition = "2s";
    } else {
        body.style.background = "black";
        body.style.color = "white";
        body.style.trasition = "2s";
    }
});

const boton = document.querySelector("#switch");

const body = document.querySelector("body");

boton.onclick = function () {
    boton.classList.toggle("active");
    body.classList.toggle("active");
};

boton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    boton.classList.toggle("active");
});

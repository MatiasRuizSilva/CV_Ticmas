const colorClick = "#ff0000";

const cambiacolor = function () {
    document.body.style.backgroundColor.value = colorClick;
};

document.getElementsByClassName("icono").addEvenListener("click");

document
    .getElementsByClassName("contacto-icono")
    .addEvenListener("mouseover", cambiacolor);

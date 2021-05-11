let r = document.querySelector(".R");
let g = document.querySelector(".G");
let b = document.querySelector(".B");
let button = document.querySelector(".btn1");
r.oninput = () => {
    document.querySelector(".one").innerHTML = r.value;
    colr = "rgb(" + r.value + "," + g.value + ", " + b.value + ")";
    document.querySelector("#color").style.backgroundColor = colr;
    document.querySelector(".rgb").innerHTML = colr;
    document.querySelector(".HEX").innerHTML = "#" + fullColorHex(r.value, g.value, b.value);
}
g.oninput = () => {
    document.querySelector(".two").innerHTML = g.value;
    colr = "rgb(" + r.value + ", " + g.value + ", " + b.value + ")";
    document.querySelector("#color").style.backgroundColor = colr;
    document.querySelector(".rgb").innerHTML = colr;
    document.querySelector(".HEX").innerHTML = "#" + fullColorHex(r.value, g.value, b.value);
}
b.oninput = () => {
    document.querySelector(".three").innerHTML = b.value;
    colr = "rgb(" + r.value + "," + g.value + ", " + b.value + ")";
    document.querySelector("#color").style.backgroundColor = colr;
    document.querySelector(".rgb").innerHTML = colr;
    document.querySelector(".HEX").innerHTML = "#" + fullColorHex(r.value, g.value, b.value);
}

var rgbToHex = function (rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};

var fullColorHex = function (r, g, b) {
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return red + green + blue;
};

let button2 = document.querySelector(".btn2");
let button3 = document.querySelector(".btn3");
button2.onclick = () => {
    colr.select();
    document.execCommand("copy");
    alert("Copied the text: " + document.querySelector(".rgb").value);
}

// rgb(r.value, g.value, b.value)
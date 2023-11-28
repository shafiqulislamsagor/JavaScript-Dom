const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length ; i++){
    text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;

//attribute change:

const img = document.getElementById("id");

img.src = "change.img";
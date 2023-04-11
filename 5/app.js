function changeClr() {
    let eleClass = prompt("Enter Element Class");
    let eleClr = prompt("Enter Element Colour");

    document.getElementById(eleClass).style.backgroundColor = eleClr;
}
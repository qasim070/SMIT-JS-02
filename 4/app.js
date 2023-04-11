function addText() {
    let text = prompt("Insert Text ");

    el = document.createElement('li');
    el.innerHTML = text;
    document.getElementById('list').appendChild(el);
}
console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = "New Value";
var marginLeft = 0;
var img = document.getElementById('img');
function MoveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(MoveRight, 50);
};
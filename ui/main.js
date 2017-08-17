console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = "New Value";
var marginleft = 0;
var img = document.getElementById("img");
function MoveRight(){
    marginleft = marginleft + 1;
    img.style.marginleft = marginleft + 'px';
}
img.onclick = function(){
    var interval = setInterval(MoveRight, 10);
};
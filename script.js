const display = document.getElementById("ansDisplay");
function clicked(event){
    display.value += event.target.value;
}
function clickedAns(){
    display.value = eval(display.value);
}
function resetClicked(){
    display.value = null;
}
var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

function clickeventhandler(){

console.log("clicked");
console.log("input",txtInput.value);
}

btntranslate.addEventListener("click", clickeventhandler)
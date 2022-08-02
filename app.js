var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var divoutput = document.querySelector("#output");

function clickhandler(){

console.log("clicked");

divoutput.innerText =  "this the the translated word - " + txtInput.value ;

};

btntranslate.addEventListener("click", clickhandler);
function getNumber(num){
    var result = document.getElementById("result");

    result.value +=  num; 
}
function clearResult(){
    var result = document.getElementById("result");

    result.value =  ""; 
}
function getResult(){
    var result = document.getElementById("result");

    result.value =  eval(result.value); 
}
function back() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}
function addChar(result, character) {
	if(result.value == null || result.value == "0")
    result.value = character
	else
    result.value += character
}
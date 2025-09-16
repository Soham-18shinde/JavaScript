
const textbox=document.getElementById("textbox")
const toFahrenheit=document.getElementById("toFahrenheit")
const toCelsius=document.getElementById("toCelsius")
const result=document.getElementById("result")
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp=Number(textbox.value);
        temp=temp*9/5+32;
        result.textContent=temp+ "°F"//For degree symbol press alt+0176
    }
    else if(toCelsius.checked){
        temp=Number(textbox.value);
        temp=(temp-32) - (5/9)
        result.textContent=temp+ "°C"//For degree symbol press alt+0176
    }
    else{
        result.textContent="select a unit"
    }
}

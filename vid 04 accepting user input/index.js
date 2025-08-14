/* Easy way
let username=window.prompt("Enter your Username")
console.log(username)*/

//Professional Way

let username;
document.getElementById("btn").onclick = function(){
    username= document.getElementById("name").value;
    document.getElementById("myh1").textContent=`hello ${username}`
    console.log(username)
}
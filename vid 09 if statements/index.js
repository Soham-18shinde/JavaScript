
let age;

document.getElementById("sbtn").onclick=function(){
    let name=document.getElementById("username").value;
    age=Number(document.getElementById("info").value)
    if (age>=18){
        document.getElementById("heading").textContent=(`Congrats ${name} you are Eligible for Driving License`)
    }
    else{
        document.getElementById("heading").textContent=(`Sorry ${name} you are NOT Eligible for Driving License as your Age is:${age}`)
    }
}

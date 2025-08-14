let subs=document.getElementById("box");
let visa=document.getElementById("vbtn");
let master=document.getElementById("mbtn");
let rup=document.getElementById("rbtn")


document.getElementById("sbtn").onclick=function(){
    if(subs.checked){
        document.getElementById("subdisplay").textContent=(`Congrats you have successfully subscribed`)
    }
   
    else{
        document.getElementById("subdisplay").textContent = "You have not subscribed";

    }

    if(visa.checked){
       document.getElementById("paydisplay").textContent="You have choosed Visa for the payment"
    }
    if(master.checked){
        document.getElementById("paydisplay").textContent="You have choosed Mastercard for the payment"
    }
    if(rup.checked){
        document.getElementById("paydisplay").textContent="You have choosed Rupay for the payment"
    }
    else{
        document.getElementById("paydisplay").textContent="You have not choosen any card for payment please choose one"
    }
}
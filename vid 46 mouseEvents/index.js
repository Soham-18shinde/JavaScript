// eventListner =  Listen for specific events to create interactive web pages events : click,mouseover,mouseout
//syntax = .addEventListner(e,callback)

const myBox = document.getElementById("mybox");



myBox.addEventListener("mouseout",(e)=>{
e.target.style.backgroundColor = "green"
e.target.textContent = "aaahH!"
})
let count = 0;
document.getElementById("in").onclick=function(){
    count =count+1
document.getElementById("countdisplay").textContent=(`${count}`)

}
document.getElementById("de").onclick=function(){
    count =count-1
    document.getElementById("countdisplay").textContent=(`${count}`)

}
document.getElementById("re").onclick=function(){
    count = 0
    document.getElementById("countdisplay").textContent=(`${count}`)
}

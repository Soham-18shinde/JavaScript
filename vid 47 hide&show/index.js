

const myBtn = document.getElementById("mybtn")
const myImg = document.getElementById("myimg")

myBtn.addEventListener("click",()=>{

    if(myImg.style.display === "none"){
        myImg.style.display = "block"
          myBtn.textContent = "Hide"
    }
    else{
        myImg.style.display = "none"
        myBtn.textContent = "Show"

    }

    
})


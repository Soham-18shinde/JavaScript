//callback= it is a function that is passed as an argument to another function,it is used to handle asynchronous operations


/*function leave(){

    console.log("leave")
}

function hello(callback){
    console.log("hello")
    callback()
}


function goodBye(){
    console.log("goodBye")
}





hello(leave)
*/

function sum(callback ,x,y){
    let result =x+y;
    callback(result)
}

function displayConsole(result){
   document.getElementById("mhh1").textContent=result
}



sum(displayConsole,50,7)
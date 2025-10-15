/*setTimeout()= it is a function that allows you to schedule the execution of a function after an amount of time (ms)
                Times are approximate
                syntax:- setTimeout(callback,delay)*/

//clearTimeOut(timeOutId) =it can cancel a timeout before it triggers


/*setTimeout(()=>{
    console.log("hello world")
},3000)*/

/*function greeting(){
    console.log("hello")
}
setTimeout(greeting,3000)*/


/*const timeOutId= setTimeout(()=>{
    console.log("hello world")
},3000)

clearTimeout(timeOutId)*/

let timeOutId;
function startTimer(){
    timeOutId=setTimeout(()=>{
        window.alert("Heyyyyyyyy!!!")
    },3000)
    console.log("started")
}


function clearTimer(){
    clearTimeout(timeOutId)
    console.log("cleared")
}
/* synchornous=  it executes line by line consecutively in a sequential manner or we can say that it is a code that waits for an operation to complete

asynchronous = it allows multiple operations to be performed concurrently without waiting.It doesnt block the execution flow and allows the program to continue (I/O operations, network requests , fetching data )
it is handled with: Callback,promises,Async/Await
*/


/*/ synchronous
console.log("Task 1 ")
console.log("Task 2 ")
console.log("Task 3 ")
*/

//Asynchronous


function func1(callback){
    setTimeout(()=>{console.log("Task 0"); callback()},3000)
    

}
function func2(){


console.log("Task 1 ")
console.log("Task 2 ")
console.log("Task 3 ")
}

func1(func2);
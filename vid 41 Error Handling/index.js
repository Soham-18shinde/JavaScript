/*Error = it is an object that is created to represent a problem that occurs often with user input or establishing a connection*/
/* try{}= it encloses code that might potentially cause an error
catch{}= catch and handle any thrown errors from try{}
finally{}= this always executes.Used mostly for cleanUp*/


/*try{
    console.log(
        "Hello"
    )

}
catch(error){
    console.error(error)
}
finally{
    console.log("This always executes")
}
console.log("You have reached to the end")
*/


try{
    const dividend = Number(window.prompt("Enter dividend"))
    const divisor = Number(window.prompt("Enter divisor"))

    if(divisor==0){
        throw new Error("You cant divide by 0")
    }

    if (isNaN(dividend)||isNaN(divisor)){
        throw new Error("You must enter only a number")
    }
    const result =dividend/divisor
    console.log(result)
}

catch(error){
    console.error(error)
}

console.log("You have reached the end")
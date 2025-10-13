/* closure= it is a function defined inside of another function,
            the inner function has access to the variables and 
            scope of the outer function.
            It allows for private variables and state maintenance
            used frequently in JS frameworks: React,Vue,Angular */


/*function outer(){

    let msg= "hello"
    function inner(){
        console.log(msg)
    }
     inner();
}     
    
outer() */ 

function createCounter(){

    let count = 0;

function increment(){
    count++
    console.log(`Count increased to ${count}`)
}

return{increment}
}

const counter=createCounter()

counter.increment()
counter.increment()
counter.increment()
counter.increment()
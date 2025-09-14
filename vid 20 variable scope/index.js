
let x= 5;// globally scoped

function fun1(){
    let x=6;//block scoped 
    console.log(x)
}

function fun2(){
    let x=8;// block scoped
    console.log(x)
}


fun1()
fun2()
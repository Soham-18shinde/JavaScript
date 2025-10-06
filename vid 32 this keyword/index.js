//this = it is a reference to the object where THIS is used 
//       ( the object depends on the immediate context )
//    syntax = person.name = this.name
/// dont use arrow functions while using "this" use regular functions



const person1 = {
    name:"soham",
    food:"sprouts",
    sayHello:function(){
        console.log(`Hello i am ${this.name} i like cricket`)
    }
}

const person2 = {
    name:"shinde",
    food:"chicken",
    sayHello:function(){
        console.log(`Hello i am ${this.food} i like cricket`)
    }
}


person1.sayHello()
person2.sayHello()
let fruits = ["Apple","Orange","Banana","Mango"]

fruits.forEach(toUpperCase)
fruits.forEach(display)
fruits.forEach(lowerCase)

function toUpperCase(element,index,array){
    array[index]= element.toUpperCase()
}

function lowerCase(element,index,array){
    array[index]= element.toLowerCase()
}

function display(fruit){
    console.log(fruit)
}
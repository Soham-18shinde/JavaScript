//forEach()= it is a method used to iterate over the elements of an array and apply a specified function(callback)
//           to eah element eg:=> array.forEach(callback) 



/*let nums= [1,2,3,4,5]

nums.forEach(double)
nums.forEach(display)

function double(element,index,array){
    array[index] = element*3
}

function display(element){
    console.log(element)
}*/





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

function display(element){
    console.log(element)
}
// No Method Chaining-------
let input = window.prompt("Enter Your username")

/*input=input.trim()

let letter=input.charAt(0)

letter=letter.toUpperCase()
let extrachar= input.slice(1,)
extrachar=extrachar.toLowerCase()
input=letter+extrachar
console.log(input)*/

//With METHOD Chaining

input= input.trim().charAt(0).toUpperCase()+ input.trim().slice(1).toLowerCase()
console.log(input)
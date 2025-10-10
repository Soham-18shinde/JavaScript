/* destructuring = it extract values from arrays and objects , then assign those values to variables in a convenient way []= to perform array destructuring
{}= to perform object destructuring */

/* ------- Swap value of 2 variables-------

var a = 1;
var b = 6;

[a, b] = [b, a];

console.log(a); // 6
console.log(b); // 1
*/


/* ----- swap 2 elements in an array----*/
let colors;
colors=["red","black","yellow","gold","white","cyan"]
[colors[0], colors[3]]=[colors[3], colors[0]]
console.log(colors[0])
console.log(colors[3])
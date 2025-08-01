
// const = a variable that can't be Changed


/*onst PI =3.14;
let radius=window.prompt("Enter radius of a circle")
radius=Number(radius)

let circumference;
circumference=2*pi*radius
window.alert(circumference)
*/


let radius;
const PI=3.14;
let circumference;

document.getElementById("sbtn").onclick=function(){

    radius=Number(document.getElementById("rad").value);

    circumference=2*PI*radius;
    
    document.getElementById("myh1").textContent=(`The Circumference of a Circle of Given Radius is: ${circumference}`)
}
/* Dom-Navigation =  it is the process of navigating through the structure of an html doucment using js
*/

//---------.firstElementChild-------------------

/*const element =document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor= "cyan";*/

//-----by querySelectorAll for first Child---------

/*const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElements=>{
    const firstChild = ulElements.firstElementChild;
    firstChild.style.backgroundColor = "Cyan"
})
*/



//-------.lastElementChild------------------


/*const element = document.getElementById("fruits");
const lastchild = element.lastElementChild;
lastchild.style.backgroundColor= "red"*/


//-----by querySelectorAll for .lastElementChild---------



/*const ulElement = document.querySelectorAll("ul");

ulElement.forEach(ulElement=>{
    const lastchild = ulElement.lastElementChild;
    lastchild.style.backgroundColor = "yellow"
})*/


//-----------------.nextElementSibling------------
/*const element = document.getElementById("Apple");
const nextSibling= element.nextElementSibling;
nextSibling.style.backgroundColor = "grey"*/


//----- .previousElementSibling------------ 

const element = document.getElementById("rabdi");
const previousSibling = element.previousElementSibling;
previousSibling.style.backgroundColor = " red"



// PASSWORD GENERATOR 

function passwordG(passwordLength,wantLowercase,wantUppercase,wantNumbers,wantSymbols){
 
    const lowercaseChars="qwertyuiopasdfghjklzxcvbnm"
    const uppercaseChars="QWERTYUIOPASDFGHJKLZXCVBNM"
    const numberChars="0123456789"
    const symbolChars="!@#$%^&*()_-+."


    let allowedChars="" // for the chars to be included
    let password="" 


    allowedChars+= wantLowercase ? lowercaseChars : ""
    allowedChars+= wantUppercase ? uppercaseChars : ""
    allowedChars+= wantNumbers ?   numberChars : ""
    allowedChars+= wantSymbols ?   symbolChars : ""

    
    if(passwordLength<=0){
        return("The password length must be atleast 1")
    }

    if(allowedChars.length===0){
        return("atleast 1 set of character needs to be selected ")
    }
    for(let i=0;i<passwordLength;i++){
        const randomIndex =Math.floor(Math.random()* allowedChars.length);
        password+=allowedChars[randomIndex] 
    }

 
    return password;
}



const passwordLength= 12; // for setting password length

const wantLowercase= true;// for lowercase charcters

const wantUppercase=false; // foe uppercase characters

const wantNumbers= true //for numbers

const wantSymbols= false;//for symbols


const password= passwordG(passwordLength,wantLowercase,wantUppercase,wantNumbers,wantSymbols)
console.log(`The Generated password: ${password}`)
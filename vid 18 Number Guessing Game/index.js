let minNum=1;// start 
let maxNum=50;//end

const ans=Math.floor(Math.random()*(maxNum-minNum+1)) // floor to round up and random to generate random number
console.log(ans)

let trys=0
let guess;

let running= true;
while(running){

    guess=window.prompt(`Enter your Guess Number Between ${minNum}-${maxNum}`)
   
    guess=Number(guess)//to convert string into int
   
    
    if(isNaN(guess)){
        window.alert("Please Only Enter a Number")
    }
    
    else if (guess< minNum || guess> maxNum){
        window.alert("Please Enter a number within the given range")
    }


    else{
        trys++;
        if(guess < ans){
            window.alert("Too low try again")

        }

        else if(guess> ans){
            window.alert("Too high try again")
        }

        else{
            window.alert(`Congrats you have won the game in ${trys} attempts and the answer was ${ans}`)
            running=false// to exit the game
        }

    }


}
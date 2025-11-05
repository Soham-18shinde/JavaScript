/* Promise = It is an object that manages async operations.
             Wrap a promise object around {async code}
             syntax = new Promise((resolve,reject)=>{async code})
             
             Do this chores in this order
             1. walk the Dog
             2. Clean the Kitchen
             3.Take out the Trash
*/


function walkDog() {

    return new Promise((resolve, reject)=> {
        setTimeout(() => {

            const dogWalked = false;
            if( dogWalked){

                resolve("Dog walked successfully")
            }
            else{
                reject("you didnt walked the dog")
            }
           
        }, 2000)

    })
}

function cleanKitchen() {
    
    return new Promise((resolve, reject)=> {
        setTimeout(() => {

            const isKitchenCleaned = true;
            if(isKitchenCleaned){

                resolve("Kitchen cleaned successfully")
            }
            else{
                reject(" you didnt cleaned the kitchen")
            }

           
        }, 3000)
    })
}

function cleanTrash() {
   
   return new Promise((resolve,reject)=>{
     setTimeout(() => {

        const isTrashCleaned = true;
        if(isTrashCleaned){
            resolve("Trash cleaned successfully")

        }
        else{
            reject("you didnt cleaned the trash")
        }

        
    }, 1500)
   })
   
}

walkDog().then(value => {console.log(value)
    return cleanKitchen()
})
.then(value => {console.log(value)
    return cleanTrash()})
.then(value => {
    console.log(value)
})   
.catch(error => console.error(error))

/* Async/Await = Async = it makes a function return a promise
                 Await = makes an async function wait for a promise

 it allows you to write async code in a synchronous manner 
 async doesnt have resolve or reject parameters 
 Everything after Await is placed in an event queue 
 */


function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = false;
            if (dogWalked) {

                resolve("Dog walked successfully")
            }
            else {
                reject("you didnt walked the dog")
            }

        }, 2000)

    })
}

function cleanKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const isKitchenCleaned = true;
            if (isKitchenCleaned) {

                resolve("Kitchen cleaned successfully")
            }
            else {
                reject(" you didnt cleaned the kitchen")
            }


        }, 3000)
    })
}

function cleanTrash() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const isTrashCleaned = true;
            if (isTrashCleaned) {
                resolve("Trash cleaned successfully")

            }
            else {
                reject("you didnt cleaned the trash")
            }


        }, 1500)
    })

}

async function doChores() {

    try {
        const walkDogResult = await walkDog()
        console.log(walkDogResult)

        const cleanKitchenResult = await cleanKitchen()
        console.log(cleanKitchenResult)

        const cleanTrashResult = await cleanTrash()
        console.log(cleanTrashResult)
    }
    catch (error) {
        console.error(error)

    }
}

doChores()
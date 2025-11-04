/* CallBack Hell =  it is a situation in js where callbacks are nested within other callbacks to the degree where the
code is difficult to read.the old pattern to handle callback hell eas async Functions/
Nowadays we use Promsies + async/await to avoid callback hell
*/

function task1(callback){
setTimeout(()=>{
    console.log("task1 complete")
callback()},3000)}

function task2(callback){
    console.log("task2 complete")
callback()}

function task3(callback){
    console.log("task3 complete")
callback()}

function task4(callback){
    console.log("task4 complete")
callback()}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("All tasks are completed")
            })
        })
    })
})





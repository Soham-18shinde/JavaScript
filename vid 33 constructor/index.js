// constructor = it is a special method for  defining the properties and methods of an object helps in code reuseability



function Car(company,model,year){
    this.company=company,
    this.model=model,
    this.year=year
    this.drive=function(){
        console.log(`You drive a ${this.model}`)
    }
}


const Car1=  new Car("Ford","Mustang",2025)
const Car2=  new Car("Mahindra","Scorpio",2020)

console.log(Car1.company)
console.log(Car1.model)
console.log(Car1.year)
console.log(Car2.company)
console.log(Car2.model)
console.log(Car2.year)


Car1.drive()
Car2.drive()
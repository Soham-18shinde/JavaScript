const fullName = "soham nilesh shinde"

let firstName=fullName.slice(0,5)
console.log(firstName)

const email ="sohamshinde6254@gmail.com"
let username= email.slice(0,email.indexOf("@"))
let extension= email.slice(email.indexOf("@"))

console.log(username)
console.log(extension)
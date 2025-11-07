/* fetch = it is a function for making http requests to fetch resources.(JSON style data,images,files)
 it simplifies async data fetching in js and used for interacting with APIs to retrieve and send data asynchronously over the web
 syntax = fetch(url,{options}) */ 



 fetch("https://pokeapi.co/api/v2/pokemon/goku")
.then(response => response.json())
.then(data =>console.log(data.name))
.catch(error => console.error(error))
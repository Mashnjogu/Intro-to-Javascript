const countries = ['Kenya', 'Australia', 'Uganda', 'South Africa', 'Mexico', 'Brazil']

let index = countries.indexOf('Ethiopia')

if(index == -1){
    countries.push('Ethiopia')
    console.log(countries)
}else{
    console.log('ETHIOPIA')
}

// export{countries}

//find the middle countries in the array
let middleCountry = Math.floor(countries.length/2)
console.log(`The middle country is: ${countries[middleCountry]}`)

if(countries.length % 2 !== 0){
    
}else{
    const middleIndex = Math.ceil(countries.length/2)
    console.log(`The middle index is: ${middleIndex}`)
}
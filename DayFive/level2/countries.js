const countries = ['Kenya', 'Australia', 'Uganda', 'South Africa', 'Mexico', 'Brazil', 'China']

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

// Divide the countries array into two equal arrays if it is even. 
// If countries array is not even , add one more country for the first half

if(countries.length % 2 !=0){

    countries.push("Morocco")
    let middleIndex = Math.ceil(countries.length/2)
    const firstHalf = countries.slice().splice(0, middleIndex)
    const secondHalf = countries.slice().splice(-middleIndex)

    console.log(firstHalf)
    console.log(secondHalf)

}else{
    let middleIndex = Math.ceil(countries.length/2)
    const firstHalf = countries.slice().splice(0, middleIndex)
    const secondHalf = countries.slice().splice(-middleIndex)

    console.log(firstHalf)
    console.log(secondHalf)
}


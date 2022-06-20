const countries = ['Kenya', 'Australia', 'Uganda', 'South Africa', 'Mexico', 'Brazil']

let index = countries.indexOf('Ethiopia')

if(index == -1){
    countries.push('Ethiopia')
    console.log(countries)
}else{
    console.log('ETHIOPIA')
}

// export{countries}
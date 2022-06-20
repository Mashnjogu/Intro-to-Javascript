const arr = Array()

const countries = ["Kenya", "Tanzania", "Uganda", "Zimbambwe", "Congo", "Congo"]
console.log(countries.length)

//get the first, middle and last element
console.log(countries[0])
console.log(countries[countries.length / 2])
console.log(countries[countries.length - 1])

const mixedDataTypes = [0, "Dennis", "Nyahururu", 8.9, true, { 'club': 'Mancity', 'player': 'Mahrez' }]
console.log(mixedDataTypes.length)

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log(`The number of companies is: ${itCompanies.length}`)
//print the first, last and middle company
console.log(`The first company is: ${itCompanies[0]}`)
console.log(`The last company is: ${itCompanies[itCompanies.length - 1]}`)
console.log(`The middle company is: ${itCompanies[Math.round(itCompanies.length - 1) / 2]}`)
//print each company
for (i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
}
console.log(`${itCompanies.toString()} are big companies`)

//check whether a certain company exits in the array
let companyExistsIndex = itCompanies.indexOf('Chamasoft')
if (companyExistsIndex == -1) {
    console.log("The company does not exist")
} else {
    console.log("The company exists in our database")
}

console.log(itCompanies.reverse())

//slice out the first 3 companies
console.log(`The first 3 are: ${itCompanies.slice(0,3)}`)
//slice out the last 3 companies
console.log(`The last 3 are: ${itCompanies.slice(itCompanies.length - 3, itCompanies.length)}`)
//slice out the middle company
console.log(`The middle company is: ${itCompanies.slice((itCompanies.length/2),(itCompanies.length/2) + 1)}`)
// Remove the first IT company from the array
console.log(`The first element is: ${itCompanies.shift()}`)
// Remove the middle IT company or companies from the array
console.log(`The middle element is: ${itCompanies.slice((itCompanies.length/2),(itCompanies.length/2) + 1)}`)
// Remove the last IT company from the array
console.log(`The last element is: ${itCompanies.pop()}`)
// Remove all IT companies


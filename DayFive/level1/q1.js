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

// var itCompanies = function (str) {
//     for (var i = 0; i <= str.length; i++) {
//         for (var j = i + 1; j <= str.length; j++) {
//             if (str[j] == str[i]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

let companiesWithDoubleo = itCompanies.includes("oo")
console.log(`The companies with double o are: ${companiesWithDoubleo}`)




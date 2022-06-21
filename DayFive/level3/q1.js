const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24, 47]
// Sort the array and find the min and max age
const sortedAges = ages.sort()
const minAge = Math.min(...sortedAges)
console.log(`The minimum age is ${minAge}`)
const maxAge = Math.max(...sortedAges)
console.log(`The maximum age is ${maxAge}`)
// Find the median age(one middle item or two middle items divided by two)
const medianAge = median(ages)
console.log(`The median is: ${medianAge}`)

function median(arr){
    arr = arr.sort((a,b) => a - b)
    if(arr.length % 2 !== 0){
        return  arr[Math.floor(arr.length/2)]; 
    }else{
        let mid1 = arr[arr.length/2]
        let mid2 = arr[arr.length/2 - 1]
        return (mid1 + mid2) / 2
    }
}
// Find the average age(all items divided by number of items)
const averageAge = sortedAges.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / sortedAges.length;
console.log(`The average age is: ${averageAge}`)
//slice the first four values
console.log(ages.slice(0,4))
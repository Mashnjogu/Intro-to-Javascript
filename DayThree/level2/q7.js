let noHours = prompt("Enter the number of hours")
let ratePerHour = prompt("Enter the rate per hour")

let dailyEarning = parseInt(noHours) * parseInt(ratePerHour)
let weeklyEarning = dailyEarning * 5
document.write(`Your weekly rate is: sh${weeklyEarning}`)
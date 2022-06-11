let day = prompt("What is the day today?")

if(day == 'Saturday' || day.includes('sat')){
    document.write("Saturday is a weekend")
}else if(day == 'Sunday' || day.includes('sun')){
    document.write("Sunday is a weekend")
}else if(day.includes('day') && day != 'Saturday' && day != 'Sunday'){
    document.write(`${day} is a weekday`)
}
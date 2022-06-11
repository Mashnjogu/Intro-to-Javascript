let scrore = prompt("Enter the marks you scored")
let score1 = parseInt(scrore)

if(score1 < 100 && score1 >= 80){
    document.write("You have an A")
}else if(score1 <= 79 && score1 >= 70){
    document.write("You have a B")
}else if(score1 <= 69 && score1 >= 60){
    document.write("You have a C")
}else if(score1 <= 59 && score1 >= 50){
    document.write("You have a D")
}else{
    document.write("You have a F")
}
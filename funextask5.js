var year=Number(prompt("enter the year"))

function leapyearchecking(){

    if (year%4==0 && year%100 !==0){
        document.write("<h1> ",year," leap year </h1>")
    }
    else if(year%400==0){
        document.write("<h1> ",year," leap year </h1>")
    }

    else{
        document.write("<h1> ",year," not a leap year </h1>")
    }
}
leapyearchecking()
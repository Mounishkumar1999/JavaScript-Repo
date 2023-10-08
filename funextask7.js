var year=Number(prompt("enter the year"))
var month=Number(prompt("enter the month"))

function yearandmonth(){

    if(month==1 || month==3 ||month==5 || month==7 || month==8 || month==10 || month==12){
        document.write("<h2> 31 days </h2>");

        
    }

   else if(month==2 && year%4==0){
        document.write("<h2>29 days</h2>");
        
    }

    else if(month==2 && year%4!==0){
        document.write("<h2>28 days</h2>");
       

    }

    else if(month==4 || month==6 || month==9 || month==11){
        document.write("<h2>30 days</h2>");
       
    }

    else {
        document.write("<h2>Invalid month</h2>");
        
    }

}
yearandmonth()
var num=prompt("enter the value");
var start=prompt("enter the start");
var range=prompt("enter the range");
function inrange(){
    if(num>=start && num<= range){
        document.write("Between the range");
    }
    else{
        document.write("outside the range");
    }
}
(inrange())
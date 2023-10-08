function prblm(){
    var side1=document.querySelector("#frst").value ;
    var side2=document.querySelector("#sec").value;
    var side3=document.querySelector("#thrd").value;
    if(side1==side2 && side2==side3){
        document.getElementById("triangle").innerHTML=("Equilateral triangle");
    }
    else if(side1==side2||side2==side3){
        document.getElementById("triangle").innerHTML=("isosceles triangle");
    }
    else{
        document.getElementById("triangle").innerHTML=("scalene triangle");
    }
}
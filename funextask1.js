function prblm(){
    var num1=document.querySelector("#frst").value ;
    var num2=document.querySelector("#sec").value;
    var num3=document.querySelector("#thrd").value;
    if(num1>num2 && num1>num3){
        document.getElementById("answer").innerHTML=("Num 1 is Greater");
    }
    else if(num2>num3){
        document.getElementById("answer").innerHTML=("Num 2 is Greater");
    }
    else{
        document.getElementById("answer").innerHTML=("Num 3 is Greater");
    }
}
for(a=1;a<=100;a++){ 
    if(a%5==0 && a%3==0){
        document.write(a,"Fizz Buzz","<br>");
     }
     else if(a%3==0){
        document.write(a,"Fizz","<br>");
     }
     else if(a%5==0){
      document.write(a,"Buzz","<br>");
     }
     else{
        document.write(a,"<br>");
     }
}
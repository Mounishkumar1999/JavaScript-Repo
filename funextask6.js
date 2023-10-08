var mark=Number(prompt("enter student mark"))

function gradingmethod(){

    if(mark>=90 && mark<=100){
        document.write("<h1> ", mark, " is S grade <h1>")
    }

    else if(mark>=80 && mark<=90){
        document.write("<h1> ", mark, " is A grade </h1>")
    }

    else if(mark>=70 && mark<=80){
        document.write("<h1> ", mark, " is B grade </h1>")
    }
    else if(mark>=60 && mark<=70){
        document.write("<h1> ", mark, " is C grade </h1>")
    }
    else if(mark>=50 && mark<=60){
        document.write("<h1> ", mark, " is D grade </h1>")
    }
    else if(mark>=40 && mark<=50){
        document.write("<h1> ", mark, " is E grade </h1>")
    }
    else if(mark>=0 && mark<=40) {
        document.write("<h1>student got ", mark, " is fail grade </h1>")
    }
    else  {
        document.write("<h1> ", mark, " is invalid </h1>")
    }


}
gradingmethod()
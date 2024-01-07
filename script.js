function report(){
a =  document.getElementById("a").value;
i = document.getElementById("i").value;
d = document.getElementById("d").value;


 details  = document.getElementById("details").innerHTML = "The interest rate " + (a*i*d/100) 


 if(a == ""){
    alert("pease write a amount");

 }
 if(i == ""){
    alert("please write a interest rate");

 }
 if(d == ""){
    alert("write a year");

 }

 window.prompt("enter your name");

 
};



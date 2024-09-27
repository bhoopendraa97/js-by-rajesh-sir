

/*  document.getElementById("btn1").addEventListener("click", mysrart);
document.getElementById("btn2").addEventListener("click", mystop);
document.getElementById("btn3").addEventListener("click", myclear);

var myint;

function  mycount(){
    let myval= Number(document.getElementById("ans").innerHTML);
     myval++;
     document.getElementById("ans").innerHTML=myval;
}
function mysrart(){
    myint=setInterval(mycount,1000);
}
function mystop(){
    clearInterval(myint);
}
function myclear(){
    document.getElementById("ans").innerHTML=0;
 }   */


  /* var myint;
function myfun()  {
document.getElementById("demo").innerHTML+="Happy Birth Day to you!";
}
myint=setTimeout(myfun, 2000);
function stopnow(){   
clearTimeout(myint);
}   */


 /*  var myint;
function myfun(){
 let a= Number(document.getElementById("demo").innerHTML);
     a++;
     document.getElementById("demo").innerHTML=a;
     myint=setTimeout(myfun,1000);
}
  myint=setTimeout(myfun, 100);
function stopnow(){
clearTimeout(myint);
}     

var myint;
function myfun(){
    let a=Number(document.getElementById("demo").innerHTML);
    a++;
    document.getElementById("demo").innerHTML
} */
 
 function time(){
    let  tm;
    const ho=d.getHours();
    const min=d.getMinutes();
    const sec=d.getSeconds();
    const mon=d.Month();
      if(ho>12){
     hou=ho-12;
     tm="PM";
 }
 else{
hou=ho;
tm="AM";
 }
document.getElementById("click").innerHTML="ho"+"min"+"sec"+"mon";
  }
  setInterval(time,1000);




  







const lowerCase="abcdefghijklmnopqrstuvwxyz";
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers="0123456789";
const symbols="!@#$^&~`*()";


let input=document.getElementById("input");
let btn1=document.getElementById("get");
let len=document.getElementById("check");
let lower=document.getElementById("lower");
let upper=document.getElementById("upper");
let number=document.getElementById("number");
let symbol=document.getElementById("symbol");


btn1.addEventListener("click",function(){
    let chart="";
    let pass="";
    let length=len.value;

    if(lower.checked){
        chart+=lowerCase;
    }
    if(upper.checked){
        chart+=upperCase;
    } 
    if(number.checked){
        chart+=numbers;
    } 
    if(symbol.checked){
        chart+=symbols;
    }
    for(var i=0;i<length;i++){
        pass+=chart.charAt(Math.random()*chart.length);
    }

    input.value=pass;
    
});

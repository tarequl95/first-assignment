let fistNumber = document.querySelector('#fistNumber');
let Option=document.querySelector('#option');
let secondNumber= document.querySelector('#secondNumber');
let showresult=document.querySelector('#showresult');
let calculatebtn= document.querySelector('#calculate');


calculatebtn.addEventListener("click",function(){
    let optionval=Option.value;
    let number1 = fistNumber.value ;
    let number2= secondNumber.value;
   
    if(number1===null || number2===null){
        showresult.innerText="input fild is null.";
        showresult.className="alert alert-danger p-10";
    }

    
    if( number1==='' || number2===''){
      showresult.innerText="input fild is empty.";
      showresult.className="alert alert-danger p-10";
  }
   if(String(number1) || String(number2)){
      if(number2.length==0){
         showresult.innerText="input fild is empty.";
         showresult.className="alert alert-danger p-10";
      }
     else if(number1.length==0){
         showresult.innerText="input fild is empty.";
         showresult.className="alert alert-danger p-10";
      }
      else{
      showresult.innerText="cant input taxt.";
      showresult.className="alert alert-danger p-10";
      }
   }
  
  if(optionval==1&&parseFloat(number1)&&parseFloat(number2)){
   let result=parseFloat(number1)+parseFloat(number2);
   showresult.innerText= "Result : "+result;
   showresult.className="alert alert-success p-10";

}
if(optionval==1&& parseFloat(number1)===0){
   let result=parseFloat(number1)+parseFloat(number2);
   if(result){
      showresult.innerText="Result: "+result;
   showresult.className="alert alert-success p-10";
   }
   else{
      showresult.innerText="empty fild empty";
      showresult.className="alert alert-danger p-10";
   }
}
if(optionval==1&& parseFloat(number2)===0){
   let result=parseFloat(number1)+parseFloat(number2);
   if(result){
      showresult.innerText="Result: "+result;
   showresult.className="alert alert-success p-10";
   }
}
//subtraction calculate
if(optionval==2 &&Number(number1)&&Number(number2)){
   let result=Number(number1)-Number(number2);
   showresult.innerText="Result : "+result;
   showresult.className="alert alert-success p-10";
}
if(optionval==2 && parseFloat(number1)===0){
   let result=0-Number(number2);
   if(result){
   showresult.innerText="result :"+result;
   showresult.className="alert alert-success p-10";
   }
}
if(optionval==2 && parseFloat(number2)===0){
   let result=Number(number1);
   if(result){
   showresult.innerText="result :"+result;
   showresult.className="alert alert-success p-10";
   }
  
}
//multiply
if(optionval==3 &&Number(number1)&&Number(number2)){
   let result=Number(number1) * Number(number2);
   showresult.innerText="Resul: " +result;
   showresult.className="alert alert-success p-10";
}
if(optionval==3 && parseFloat(number1)===0){
   let result=0 * Number(number2)
   showresult.innerText="Result: "+ result;
   showresult.className="alert alert-success p-10";
}
if(optionval==3 && parseFloat(number2)===0){
   let result=0 * Number(number1);
   showresult.innerText="Result : "+result;
   showresult.className="alert alert-success p-10";
}
//division
if(optionval==4 &&Number(number1)&&Number(number2)){
   let result=Number(number1) / Number(number2);
   showresult.innerText= "Result: "+result;
   showresult.className="alert alert-success p-10";
}
if(optionval==4 && parseFloat(number1)===0){
   showresult.innerText="zero can't divide by any number";
   showresult.className="alert alert-danger p-10";
}
if(optionval==4 && parseFloat(number2)===0){
   showresult.innerText="can't divide by zero";
   showresult.className="alert alert-danger p-10";
}

})


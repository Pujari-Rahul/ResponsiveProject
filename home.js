let username=document.getElementById("username");
let password=document.getElementById("password");
let flag =1;
function validateform(){
    if(username.value==""){
        document.getElementById("userError").innerHTML="username is empty";
        flag=0;
    }else if(username.value.length<3){
        document.getElementById("userError").innerHTML="username is minimum 3 character";flag=0;
    }else{
        document.getElementById("userError").innerHTML="";flag=1;
    }
    if(address.value==""){
        document.getElementById("addError").innerHTML="address is empty";flag=0;
    }else{
        document.getElementById("addError").innerHTML="";flag=1;
    }
    if(number.value==""){
        document.getElementById("numberError").innerHTML="mobile no is empty";
        flag=0;

    }else if(number.value.length<10){
        document.getElementById("numberError").innerHTML="invalid number";
        flag=0;
    }else{
        document.getElementById("numberError").innerHTML="";
        flag=1;
    }
    
   if(flag){
    return true;
   }else{
    return false;
   }
}
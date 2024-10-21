
document.addEventListener("DOMContentLoaded",()=>{
    const username="Kennyg"
const password=12345678;
let loginbutton=document.getElementById("logid")


let UserNamefield=document.querySelector(".username")

let PasswordField=document.querySelector(".password")
let Errormessage=document.querySelector(".errormessage")


let errorcount=0;

loginbutton.addEventListener("click",(e)=>{
    e.preventDefault()
    let enteredName=UserNamefield.value;
    let enteredPass=PasswordField.value;

  
    if(enteredName!=username&&enteredPass!=password){
     Errormessage.classList.add("active")
     errorcount++
     UserNamefield.value=""
     PasswordField.value=""
     errorcount+=1;
     console.log(errorcount);
     
     }

    if(errorcount>6){
        window.open("error.html")
    }

    if(enteredName==username&&enteredPass==password){
    window.open("index.html")
    }

    console.log("loho")

    
})

})

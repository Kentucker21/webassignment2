let invoiceholder=document.createElement("li")

let retrieveitems=JSON.parse(localStorage.getItem("cart"))


document.addEventListener('DOMContentLoaded',()=>{
    let itemcount=retrieveitems;
    let parentInv=document.querySelector(".summary-container")
    let untaxed=0
    let tax=document.querySelector(".tax")
    for(i=0;i<itemcount.length;i++){
       let checklistitem=document.createElement("li")
       checklistitem.classList.add("inner-sum")
       checklistitem.innerHTML=`<div class="book-name">${retrieveitems[i].name}</div>
            <div class="book-price">${retrieveitems[i].price}</div>`


        parentInv.appendChild(checklistitem)



        untaxed+=parseInt(retrieveitems[i].price.replace(/\$/g, ''))
        console.log(untaxed);
        

        tax.innerHTML=` GCT Tax:$${untaxed*0.15}`

        let totalcheckout=document.querySelector(".totalcheckout")

        totalcheckout.innerHTML=`Total:$${untaxed+(untaxed*0.15)}`
    }

    let itemqty=document.querySelector(".item-qty")
    
    itemqty.innerHTML=`you are buying a total of ${itemcount.length} items`





    //buttons
    let cancelbtn=document.querySelector(".Cancelbtn")
    let submitbtn=document.querySelector(".Submitbtn")

    cancelbtn.addEventListener('click',()=>{
        let cancelcheck=window.prompt("Are you sure you want to cancel?type yes")

        if(cancelcheck=="yes"){
            localStorage.clear()
            window.open("index2.html")
        }
    })


    submitbtn.addEventListener("click",()=>{
        window.alert("thank you for your purchase")
        localStorage.clear();
        window.open("purchasethanks.html")
    })

    
})



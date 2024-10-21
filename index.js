//hamburger menu


document.addEventListener('DOMContentLoaded',()=>{
    let hamburger=document.querySelector(".hamburger")
let mobile_menu=document.querySelector(".mobile-men")
    
hamburger.addEventListener('click',()=>{
     mobile_menu.classList.add("active")
    })



    let close_menu=document.querySelector(".close")

    close_menu.addEventListener("click",()=>{
        mobile_menu.classList.remove("active")
    
    
    
    
  
})

let close_cart=document.querySelector(".close-cart")
    let cart=document.querySelector(".mycart")
    let open_cart=document.querySelector(".Cart-opener")
    


    open_cart.addEventListener("click",()=>{
        cart.classList.add("visible")
        console.log("hill");
        
    })


    close_cart.addEventListener("click",()=>{
        cart.classList.remove("visible")
        })


   




    //cart adder
    let addbutton=document.querySelectorAll(".addbtn")
    let cartitems=document.querySelector(".cartitems")

    function AddtoCart(){
        console.log(this.parentElement.children[0]);
        let listnode=document.createElement("li")
        listnode.classList.add("cart-book")
        listnode.innerHTML=`<img src='${this.parentElement.children[0].getAttribute('src')}'>
        <h4>${this.parentElement.children[1].innerHTML}<\h4>
        <h4>${this.parentElement.children[2].innerHTML}<\h4>
        <button class="Removebtn">Remove</button>`


        cartitems.appendChild(listnode)
        totalitems();

        let Removebtns=document.querySelectorAll(".Removebtn")
    

    for(let Remove of Removebtns){
        Remove.addEventListener("click",RemoveItem)
    }

    }

    function clep(){
        console.log('lo');
        
    }

    for (let added of addbutton){
        added.addEventListener("click",AddtoCart)
    }
        
   
    let carttotal=document.querySelector(".Carttotal")
    let cartAtm=0
    function totalitems(){
        let cartquantity=cartitems.children.length;
        carttotal.innerHTML=`Items in cart:${cartquantity}`
        return cartquantity
    }


    

    function RemoveItem(event){
        let targets=event.target;
       targets.parentElement.parentElement.remove();



       totalitems();

       console.log("rem");
       
    }




    let nameholder=[
        {
            name:'kenny',
            price:78
        }
    ]
        
        
    

    function checkout(){


        
        let Allcartbooks=document.querySelectorAll(".cart-book")
        
        
        for(i=0;i<totalitems();i++){
          
            
         singleitem=Allcartbooks[i].children[1].innerHTML;
         singleitemprice=Allcartbooks[i].children[3].innerHTML;

        
         nameholder[i]={name:singleitem,price:singleitemprice};
             

         
         
        }
        



        let checker=window.prompt("are you sure you want to check out?type yes");

        if (checker=="yes"){
         window.alert("checkout in progress")
         window.open("invoice.html")
        }

        localStorage.setItem('cart',JSON.stringify(nameholder))



      
        


        
        
        
    }

   

    let checkoutbtn=document.querySelector(".checkout")
    checkoutbtn.addEventListener("click",checkout);
    

})

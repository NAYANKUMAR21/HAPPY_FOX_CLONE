window.addEventListener("scroll",function(){
   
    let navbar = this.document.getElementById("parentBottom");

    if(window.pageYOffset>=62){
        navbar.classList.add("sticky")
    }
    else{
        navbar.classList.remove("sticky");
    }
})

let price = document.querySelector('#priceing');
price.addEventListener("click",function(){
    location.href = "../pricing/pricing.html"
})
let login = document.querySelector('#login');
login.addEventListener("click",function(){
    location.href = "../myTask/index.html"
})
window.addEventListener("scroll",function(){
   
    let navbar = this.document.getElementById("parentBottom");

    // if(window.pageYOffset>=62){
    //     navbar.classList.add("sticky")
    // }
    // else{
    //     navbar.classList.remove("sticky");
    // }
    if(window.pageYOffset>=62){
        navbar.classList.add("sticky")
    }
    else if(window.pageYOffset>=600){
        navbar.classList.remove("sticky");
    }else{
        navbar.classList.remove("sticky");
    }


})

// let Price = document.querySelector('#priceing');
// Price.addEventListener("click",function(){
//     console.log("hello")
//     window.location.href = "./pricing/pricing.html"
// })
// let login = document.querySelector('#login');
// login.addEventListener("click",function(){
//     window.location.href = "./login/index.html"
// })

// document.getElementById('demo_nav').addEventListener("click",function(){
//     window.location.href=''
// })

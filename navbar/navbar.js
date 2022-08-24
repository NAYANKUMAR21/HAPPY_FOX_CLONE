window.addEventListener("scroll",function(){
   
    let navbar = this.document.getElementById("parentBottom");

    if(window.pageYOffset>=61){
        navbar.classList.add("sticky")
    }
    else{
        navbar.classList.remove("sticky");
    }
})

   var navLinks = document.getElementById("navLinks");


    function ShowMenu(){
        navLinks.style.right = "0";
    }
    function hideMenu(){
        navLinks.style.right = "-500px";
    }
    const text = document.querySelector('.sub-title');
    // text animation header
const textLoad = () =>{
    setTimeout(()=>{
        text.textContent = "Web Development";
    },0);
    setTimeout(()=>{
        text.textContent = "App Development";
    },2000);

    setTimeout(()=>{
        text.textContent = "Ui/Ux Design";
    },4000);
}

textLoad();
setInterval(textLoad,6000);

window.addEventListener('scroll',function(){
    var navbar = document.getElementById('navbar');
    if(window.pageYOffset > 50){
        navbar.classList.add('scrolled');
        navbar.classList.remove('transparent');
    }else{
        navbar.classList.remove('scrolled');
        navbar.classList.add('transparent');
    }
})

var menuItem = document.getElementsByClassName('.menu-item a');
menuItem.forEach(function(item){
    item.addEventListener('click',function(){
        menuItem.classList.remove('active');
    });
    this.classList.add('active');
})




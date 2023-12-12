let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

let shops = document.querySelector(".shop");
let mainpage = document.querySelector(".mainPage");
let customer = document.querySelector(".customer");
let read = document.querySelector(".read");
let contacts = document.querySelector(".contact");



icon.addEventListener("click", ()=>{
    ul.classList.toggle("showdata");

    if(ul.classList == "showdata"){
        document.getElementById("bar").classList= "fa-solid fa-xmark";
    }else{
        document.getElementById("bar").classList= "fa-solid fa-bars";
    }
});


function home(){
    mainpage.style.display = "flex";
    contacts.style.display = "block";
    shops.style.display = "block";
    customer.style.display = "block";
    read.style.display = "block";

    document.getElementById("shop").style.color ="white";
    document.getElementById("active").style.color = "aqua";
    document.getElementById("review").style.color = "white";
    document.getElementById("blog").style.color = "white";
    document.getElementById("contact").style.color = "white";
    

}

function shop(){
    shops.style.display = "block"
    mainpage.style.display = "none";
    customer.style.display = "none";
    read.style.display = "none";
    contacts.style.display = "none";

    document.getElementById("shop").style.color ="aqua";
    document.getElementById("active").style.color = "white";
    document.getElementById("review").style.color = "white";
    document.getElementById("blog").style.color = "white";
    document.getElementById("contact").style.color = "white";

}

function review(){
    customer.style.display = "block";
    mainpage.style.display = "none";
    shops.style.display = "none";
    read.style.display = "none";
    contacts.style.display = "none";

    document.getElementById("shop").style.color ="white";
    document.getElementById("active").style.color = "white";
    document.getElementById("review").style.color = "aqua";
    document.getElementById("blog").style.color = "white";
    document.getElementById("contact").style.color = "white";

}

function blog(){
    read.style.display = "block";
    mainpage.style.display = "none";
    shops.style.display = "none";
    customer.style.display = "none";
    contacts.style.display = "none";

    document.getElementById("shop").style.color ="white";
    document.getElementById("active").style.color = "white";
    document.getElementById("review").style.color = "white";
    document.getElementById("blog").style.color = "aqua";
    document.getElementById("contact").style.color = "white";

}

function contact(){
    contacts.style.display = "block";
    mainpage.style.display = "none";
    shops.style.display = "none";
    customer.style.display = "none";
    read.style.display = "none";
    

    document.getElementById("shop").style.color ="white";
    document.getElementById("active").style.color = "white";
    document.getElementById("review").style.color = "white";
    document.getElementById("blog").style.color = "white";
    document.getElementById("contact").style.color = "aqua";
   
}

let crd = document.querySelectorAll(".crd");
let itempage = document.querySelector(".itemPage");
let container = document.querySelector(".container");
let itemimg = document.querySelector("#itemimg");

crd.forEach(function(curvalue){
    curvalue.addEventListener("click", function(){
        itempage.style.display = "flex";
        container.style.display = "none";

        let imgsrc = curvalue.firstElementChild.src;

        itemimg.src = imgsrc;

    })
})
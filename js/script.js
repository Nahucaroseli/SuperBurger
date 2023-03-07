$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('active');
    });

    $(window).on('scroll load', function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('active');

        if($(window).scrollTop() > 60){
            $('.header').addClass('active');
        }
        else{
            $('.header').removeClass('active');
        }

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

})

//menu circular 
const menu_slider = document.querySelector('.wrapper');
let slides = document.querySelectorAll('.slides');
let images = document.querySelectorAll('.slides img');
let burger_descriptions = document.querySelectorAll('.burger_description')

slides.forEach((slide,i)=>{
    slide.onclick = () =>{
        menu_slider.style.transform = `rotateZ(-${360 / 10 * (i+6)}deg)`;

        images.forEach((img,i)=>{
            img.style.setProperty('--img-no',5)
            img.classList.remove("active")
            burger_descriptions[i].classList.remove("is-active");
        })
        burger_descriptions[i].classList.add("is-active");
        slide.querySelector("img").classList.add("active");

    }
})

// carousel promo

let promo = document.getElementById("promoImg")

let current = 0;

let images_promo = ["images/Promo1.png","images/Promo2.png"];

function changePromo(){
    
    current<=images_promo.length?current+=1:current=0
    promo.style.transition = `${3}s ease`;
    promo.src = images_promo[current];


}


setInterval(()=>{
    changePromo();
},3500);





//user scroll


let scroll_section = document.querySelector(".scroll");
let bread1 = document.querySelector("#burgerscroll");
let meat = document.querySelector("#meat");
let scroll_text = document.querySelector("#scrollText");
let cheddar = document.querySelector("#cheddar");
let lettuce = document.querySelector("#lettuce");
let bread2 = document.querySelector("#bread2");

window.addEventListener("scroll",()=>{
    console.log(window.scrollY);
    if(window.scrollY <700){
        bread1.style.opacity = 0;
        meat.style.opacity = 0;
        cheddar.style.opacity = 0;
        lettuce.style.opacity = 0;
        bread2.style.opacity = 0;
        scroll_text.style.opacity = 0;
    }
    if(window.scrollY> 700){
        bread1.style.opacity = .5;
      
        meat.style.opacity = 0;
        cheddar.style.opacity = 0;
        lettuce.style.opacity = 0;
        scroll_text.style.opacity = 1;
        bread2.style.opacity = 0;
    }
    if(window.scrollY> 1000){
        bread1.style.opacity = 1;
    }
    
    if(window.scrollY>1100){
        meat.style.opacity = .5;
    }
    
    if(window.scrollY >1250){
        meat.style.opacity = 1;
    }
    if(window.scrollY >1400){
        cheddar.style.opacity = .5;
    }
    if(window.scrollY >1550){
        cheddar.style.opacity = 1;
    }
    if(window.scrollY >1750){
        lettuce.style.opacity = .5;
    }
    if(window.scrollY >1750){
        lettuce.style.opacity = .5;
    }
    if(window.scrollY >1900){
        lettuce.style.opacity = 1;
    }
    if(window.scrollY >2150){
        bread2.style.opacity = .5;
    }
    if(window.scrollY >2300){
        bread2.style.opacity = 1;
    }
    if(window.scrollY >2900){
        bread1.style.opacity = 0;
        meat.style.opacity = 0;
        cheddar.style.opacity = 0;
        lettuce.style.opacity = 0;
        bread2.style.opacity = 0;
        scroll_text.style.opacity = 0;
    }


})





const sideMenu= document.querySelector("aside");
const menuBtn= document.querySelector("#menu-btn");
const closeBtn= document.querySelector("#close-btn");
const themToggler=document.querySelector(".theme-toggler")

menuBtn.addEventListener('click',()=>{
    sideMenu.style.display='block';
})

closeBtn.addEventListener('click',()=>{
    sideMenu.style.display='none';
})

themToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables');

    themToggler.querySelector('span:nth-child(1)').classList.toggle('active');
})


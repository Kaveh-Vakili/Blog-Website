import $ from 'jquery'

let header = $("header");

window.addEventListener("scroll",()=>{
    header.classList.toggle("shadow",window.scrollY>0)
})
const toggler = document.querySelector('.toggle');
const nav = document.querySelector('nav');
const ul = document.querySelector('ul');
const h1 = document.querySelector(' nav h1');
const togglerImg = document.querySelector(' nav img');
const section = document.querySelector('.home img')
const aside= document.querySelector('aside')
const runPage = ()=>{

    toggler.addEventListener('click',()=>{
        nav.style.transition= 'height ease-out 0.3s'
        nav.style.height = '200px'
        toggler.style.visibility='hidden'
        ul.style.display="block"
        h1.style.display="none"
        togglerImg.style.display="block"
      section.style.marginTop="60px"
      aside.style.marginTop="70px"

    })
    togglerImg.addEventListener('click', ()=>{
       
        nav.style.height = '80px'
        toggler.style.visibility='visible'
        ul.style.display="none"
        h1.style.display="block"
        togglerImg.style.display="none"
    })

}

window.addEventListener('load',runPage);
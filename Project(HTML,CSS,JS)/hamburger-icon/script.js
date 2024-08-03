const hamburger=document.querySelector('.hamburger');
const ul = document.querySelector('ul');

hamburger.addEventListener('click',()=>{
  ul.classList.toggle('hamActive');
  let hamChild=hamburger.firstElementChild;
  if(ul.classList.contains('hamActive')){
    hamChild.classList.replace('fa-bars','fa-xmark');
  }
  else{
    hamChild.classList.replace('fa-xmark','fa-bars');
  }
})
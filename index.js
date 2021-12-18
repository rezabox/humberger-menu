const body=document.querySelector('body');
const start=document.querySelector('.open');
const end=document.querySelector('.close');

start.addEventListener('click',function(){
  body.classList.toggle('active');
})
const botao = document.getElementById('botao')

function toggleMenu(event){
  if(event.type === 'touchstart')event.preventDefault()
const nav = document.getElementById('nav');
nav.classList.toggle('active');
}
botao.addEventListener('click', toggleMenu);
botao.addEventListener('touchstart', toggleMenu);
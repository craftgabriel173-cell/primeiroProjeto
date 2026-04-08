const botao = document.getElementById('butao');
const inputUser = document.getElementById('inputuser');
const erro = document.getElementById('erro');

const pass =  document.getElementById('pass');
const nigt = document.getElementById('nigt');
const body = document.body;

botao.addEventListener("click", () => {
  let nameUser = inputUser.value;
  let passod = pass.value;
  
  let listaDeUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
  let usuarioEnconrado = listaDeUsuarios.find(user => user.nome === nameUser  && user.senha === passod);
  
  if (usuarioEnconrado) {
    window.location.href = '../Sob_paginas/paginaPrincipal.html';
  }
  else {
    erro.style.display = 'block'
  }
})

  let cor1 = '#35446d';
  let cor2 = '#1e3651';
  let mod = false;
  
nigt.addEventListener("click",  () => {
  if (mod === false) {
    document.body.style.backgroundColor = cor2;
    mod = true;
  }
  else {
    document.body.style.backgroundColor = cor1;
    mod = false;
  }
  
})

const cdelet = document.getElementById('cdelet');
const butttondelet = document.getElementById('butttondelet');
const cdeletNaoEcontrado = document.getElementById('cdeletIN');
  const janela = document.getElementById('meumodel');
  const comfirm = document.getElementById('comfirm');
   const cancel = document.getElementById('cancel');
   const deletN = document.getElementById('deletN');
     const deletS = document.getElementById('deletS');
  
  
  let abrirJanela = () => {
  janela.showModal()
  }
  let fecharJanela = () => {
   janela.close();
  }

butttondelet.addEventListener("click", () => {
  
  let deletSd =  deletS.value;
  let deletNd =  deletN.value;

  cdelet.style.display = 'none';
  cdeletNaoEcontrado.style.display = 'none';
  
/*ainda em desenvolvimento*/

let listaDeUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

let verificarSeUsuarioexiste = listaDeUsuarios.find(user => user.nome === deletNd && user.senha === deletSd);

if (verificarSeUsuarioexiste){
  abrirJanela();
}
else {
  cdeletNaoEcontrado.style.display = 'block';
}

});

comfirm.addEventListener("click", () => {
  let deletSd2 = deletS.value;
  let deletNd2 = deletN.value;

  let listaDeUsuarios2 = JSON.parse(localStorage.getItem('usuarios')) || [];

  let remover = listaDeUsuarios2.filter(user => !(user.nome === deletNd2 && user.senha === deletSd2));

  localStorage.setItem('usuarios', JSON.stringify(remover));

  fecharJanela();
  cdelet.style.display = 'block';
});

cancel.addEventListener("click", () => {
  fecharJanela();
})

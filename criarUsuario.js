const but5 = document.getElementById('but5');
const mensagemSucesso = document.getElementById('susseco2');
const mensagemDeError = document.getElementById('error');
const namerepetid = document.getElementById('namerepetid');

but5.addEventListener("click", () => {
    const nameUser = document.getElementById('us-0').value;
    const senhaUser = document.getElementById('us-1').value;
    const senhaConfirmacao = document.getElementById('us-2').value;
    const preenchaOsCampos = document.getElementById('preenchaOsCampos');
    const mensagemDeErrorDigitosAusentes = document.getElementById('mensagemDeErrorDigitosAusentes');
     
    namerepetid.style.display = 'none';
    mensagemDeError.style.display = 'none';
    mensagemSucesso.style.display = 'none';
    preenchaOsCampos.style.display = 'none';
    mensagemDeErrorDigitosAusentes.style.display = 'none';

    if (nameUser === "" || senhaConfirmacao === "" || senhaUser === "") {
        preenchaOsCampos.style.display = 'block'
        return;
    }
    
    let listaDeUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    let usuariosRep = listaDeUsuarios.some(user => user.nome === nameUser);
    
    if (usuariosRep) {
      namerepetid.style.display = 'block'
      return;
    }

    if (senhaUser !== senhaConfirmacao) {
        mensagemDeError.style.display = 'block';
        return;
    }
    
    if (senhaUser.length < 6) {
      mensagemDeErrorDigitosAusentes.style.display ='block'
      return;
    }
    
    let novoUsuario = { 
        nome: nameUser, 
        senha: senhaUser 
    };

    listaDeUsuarios.push(novoUsuario); 
    
    localStorage.setItem('usuarios', JSON.stringify(listaDeUsuarios));
    
    document.getElementById('us-0').value = "";
    document.getElementById('us-1').value = "";
    document.getElementById('us-2').value = "";

    if (senhaUser === senhaConfirmacao) {
     mensagemSucesso.style.display = 'block'
     return;
    }
    
});

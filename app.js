let amigos = [];

function adicionarAmigo() {

    amigoInput = document.getElementById('amigo');
    
    if(amigoInput.value != ''){
        amigos.push(amigoInput.value);
        console.log(amigos);
        atualizarLista();
    } else {
        alert("Preencha o campo com o nome do seu amigo");
    }

    amigoInput.value = '';
    amigoInput.focus();
}

function atualizarLista() {
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }

    let limparResultado = document.getElementById('resultado');
    if(limparResultado != ''){
        limparResultado.innerHTML = '';
    }
}

function sortearAmigo() {
    if(amigos.length === 0){
        alert("Nenhum amigo adicionado");
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`;

    //let limparLista = document.getElementById('listaAmigos');
    //limparLista.innerHTML = '';


}
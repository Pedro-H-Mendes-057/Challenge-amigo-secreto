let amigos = [];

function adicionarAmigo() {

    amigoInput = document.querySelector('input').value;
    
    if(amigoInput != ''){
        amigos.push(amigoInput);
        console.log(amigos);
    } else {
        alert("Preencha o campo com o nome do seu amigo");
    }

    limparCampo();
}

function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}
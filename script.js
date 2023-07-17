async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = '';

    try{
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCEPConvertida = await consultaCEP.json();

    if (consultaCEPConvertida.erro){
        throw Error ('CEP não existente!');
    };

    var cidade = document.getElementById('cidade');
    var logradouro = document.getElementById('endereco');
    var cidestado = document.getElementById('estado');

    cidade.value = consultaCEPConvertida.localidade;
    logradouro.value = consultaCEPConvertida.logradouro;
    estado.value = consultaCEPConvertida.uf;

    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;
    } catch (erro){
        mensagemErro.innerHTML = '<p>CEP invalido. Tente Novamente</p>'
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', ()=> buscaEndereco(cep.value));
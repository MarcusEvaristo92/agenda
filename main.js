const form = document.getElementById('form-agenda');
const atividade = [];
const agendaNumero = [];
let linhas = '';


form.addEventListener('submit', function(e){
    e.preventDefault(e);
    adicionarLinha();
    atualizaTabela();
}
)

function adicionarLinha(){
    const nome = document.getElementById('nome');
    const telefone = document.getElementById('telefone')
    
    if(atividade.includes(nome.value)){
        alert(`O nome: ${nome.value} ja foi cadastrado`);
    }
    else{
        atividade.push(nome.value);
        agendaNumero.push(parseInt(telefone.value));

        let linha = '<tr>'
        linha += `<td>${nome.value}</td>`
        linha += `<td>${telefone.value}</td>`
        linha += '<tr>'

        linhas += linha;
    }
    nome.value = '';
    telefone.value = '';
}

function atualizaTabela(){
    const corpotabela = document.querySelector("tbody");
    corpotabela.innerHTML = linhas;
}
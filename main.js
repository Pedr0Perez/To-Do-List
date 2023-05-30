var tarefas = [];
var id = 1;

function adicionar(){
    let entrada = document.querySelector("#task").value;
    let tbody = document.querySelector("#tbody");
    if(entrada){
        let tarefaData = [id, entrada];
        tarefas.push(tarefaData);
        mostrarTabela();
        let clearEntrada = document.querySelector("#task");
        clearEntrada.value = "";
        clearEntrada.focus();
    } else{
        alert("Escreva uma tarefa para adicionar na tabela.");
    }
    
}

function mostrarTabela(){
    console.log("Array tarefas após adicionar tarefa: " + tarefas);
    tbody.innerText = '';
    for(i=0; i<tarefas.length; i++){
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let tdText = document.createTextNode(tarefas[i][1]);
        td.appendChild(tdText);
        tr.appendChild(td);
        tbody.appendChild(tr);  
        let tdAcao = document.createElement("td");
        let botaoEdit = document.createElement("button");
        let botaoEditText = document.createTextNode("✏️");
        botaoEdit.appendChild(botaoEditText);
        tdAcao.appendChild(botaoEdit);
        let botaoDel = document.createElement("button");
        let botaoDelText = document.createTextNode("🗑️");
        botaoDel.appendChild(botaoDelText);
        botaoEdit.classList = "botAcao";
        botaoDel.classList = "botAcao";
        tdAcao.appendChild(botaoDel);
        tr.appendChild(tdAcao);
        tbody.appendChild(tr);
        botaoEdit.setAttribute("onclick", "prepararAlterar(" + tarefas[i][0] + ")");
        botaoDel.setAttribute("onclick", "deletar(" + tarefas[i][0] + ")");
        id++
    }
}

function deletar(valId){
    console.log("Array tarefas após excluir tarefa: " + tarefas);
    let tbody = document.querySelector("#tbody");
    for(let i=0; i<tarefas.length; i++){
        if (tarefas[i][0] == valId){
            tbody.deleteRow(i);
            tarefas.splice(i, 1);
            indice--;
        }
    }
}

function prepararAlterar(valId){
    let salvarBotao = document.querySelector(".add");
    let alterarBotao = document.querySelector(".edit");
    salvarBotao.style.display = "none";
    alterarBotao.style.display = "inline";
    alterarBotao.setAttribute("onclick", "alterar(" + valId + ")");
}

function alterar(valId){
    let tbody = document.querySelector("#tbody");
    let entrada = document.querySelector("#task").value;
    for(let i=0; i<tarefas.length; i++){
        if(tarefas[i][0] == valId){
            tarefas[i][1] = entrada;
        }
    }
    for(let i=0; i<tarefas.length; i++){
        tbody.deleteRow(0);
    }
    mostrarTabela();
    
    let salvarBotao = document.querySelector(".add");
    let alterarBotao = document.querySelector(".edit");
    salvarBotao.style.display = "inline";
    alterarBotao.style.display = "none";

}



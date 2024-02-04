const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaLista = []

function addTarefa() {
    minhaLista.push({
        tarefa: input.value,
        concluida: false
    })
    input.value = ''
    mostrarTarefa()
}

function deletarTarefa(index) {
    minhaLista.splice(index, 1)
    mostrarTarefa()

}

function concluirTarefa(index) {
    minhaLista[index].concluida = !minhaLista[index].concluida

    mostrarTarefa()

}

function mostrarTarefa() {
    let novaLi = ''

    minhaLista.forEach((item, index) => {
        novaLi = novaLi + `
            
            <li class="task ${item.concluida && "done"}">
                <img src="./img/checked.png" onclick="concluirTarefa(${index})"/>
                <p>${item.tarefa}</p>
                <img src="./img/trash.png" onclick="deletarTarefa(${index})" />
            </li>`
    })

    listaCompleta.innerHTML = novaLi
    localStorage.setItem('lista', JSON.stringify(minhaLista))
}

function recarregarTarefas() {
    const tarefasdoLocalStorage = localStorage.getItem('lista')
    minhaLista = JSON.parse(tarefasdoLocalStorage)
    mostrarTarefa()

}


recarregarTarefas()
button.addEventListener('click', addTarefa)
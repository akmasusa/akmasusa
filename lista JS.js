// Adiciona evento de clique ao botão "Adicionar"
document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Por favor, insira uma tarefa.');
        return;
    }

    // Cria o item da lista
    const listItem = document.createElement('li');
    listItem.textContent = taskInput.value;

    // Botão para marcar como concluído
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Concluir';
    completeBtn.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });

    // Botão para remover tarefa
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remover';
    removeBtn.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    // Adiciona os botões ao item da lista
    listItem.appendChild(completeBtn);
    listItem.appendChild(removeBtn);

    // Adiciona o item à lista de tarefas
    taskList.appendChild(listItem);

    // Limpa o campo de entrada
    taskInput.value = '';
});

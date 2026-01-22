const taskInput = document.getElementById('task-input');
        const addBtn = document.getElementById('add-btn');
        const taskList = document.getElementById('task-list');
        const totalCount = document.getElementById('total-count');
        const completedCount = document.getElementById('completed-count');
        const deleteAllBtn = document.getElementById('delete-all-btn');
        const filterInput = document.getElementById('filter-input');

        let totalTasks = 0;
        let completedTasks = 0;

        
        function updateCounters() {
            totalCount.textContent = totalTasks;
            completedCount.textContent = completedTasks;
        }

        
        function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText === '') {
                alert('Nama tugas tidak boleh kosong!');
                return;
            }

        
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'task-checkbox';

            const taskTextSpan = document.createElement('span');
            taskTextSpan.className = 'task-text';
            taskTextSpan.textContent = taskText;

            const date = new Date();
            const dateString = date.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            const dateSpan = document.createElement('span');
            dateSpan.className = 'task-date';
            dateSpan.textContent = dateString;

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = 'Hapus';

            
            checkbox.addEventListener('change', function() {
                if (checkbox.checked) {
                    taskItem.classList.add('completed');
                    completedTasks++;
                } else {
                    taskItem.classList.remove('completed');
                    completedTasks--;
                }
                updateCounters();
            });

            
            deleteBtn.addEventListener('click', function() {
                taskList.removeChild(taskItem);
                totalTasks--;
                if (checkbox.checked) {
                    completedTasks--;
                }
                updateCounters();
            });

            
            taskItem.appendChild(checkbox);
            taskItem.appendChild(taskTextSpan);
            taskItem.appendChild(dateSpan);
            taskItem.appendChild(deleteBtn);
            taskList.appendChild(taskItem);
            totalTasks++;
            updateCounters();
            taskInput.value = '';
        }


        function deleteAllTasks() {
    if (taskList.children.length === 0) {
        alert('Tidak ada tugas untuk dihapus!');
        return;
    }

    const confirmDelete = confirm('Apakah Anda yakin ingin menghapus semua tugas?');
    if (!confirmDelete) return;

    taskList.innerHTML = '';

    totalTasks = 0;
    completedTasks = 0;

    updateCounters();
}

        function filterTasks() {
            const filterText = filterInput.value.toLowerCase();
            const tasks = taskList.getElementsByTagName('li');

            for (let task of tasks) {
                const taskText = task.querySelector('.task-text').textContent.toLowerCase();
                if (taskText.includes(filterText)) {
                    task.style.display = 'flex';
                } else {
                    task.style.display = 'none';
                }
            }
        }

        deleteAllBtn.addEventListener('click', deleteAllTasks);
        addBtn.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTask();
            }
        });
        filterInput.addEventListener('input', filterTasks);
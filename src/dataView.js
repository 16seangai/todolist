const DataView = {
    updateProjectHeader(projectName) {
        const header = document.querySelector('.main h1');
        header.textContent = projectName ? `Tasks - ${projectName}` : 'Tasks'
    },

    renderProjects(projects, activeProjectId) {
        const projectList = document.querySelector('.project-list');
        projectList.innerHTML = '';
        
        projects.forEach((project, index) => {
            const li = document.createElement('li');
            li.dataset.projectId = project.id;
            
            if (activeProjectId === project.id || (!activeProjectId && index === 0)) {
                li.classList.add('active');
            }
            
            const nameSpan = document.createElement('span');
            nameSpan.textContent = project.name;
            nameSpan.className = 'project-name';
            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '×';
            deleteBtn.className = 'delete-project-btn';
            deleteBtn.dataset.projectId = project.id;
            
            li.appendChild(nameSpan);
            li.appendChild(deleteBtn);
            projectList.appendChild(li);
        });
    },

    renderTasks(project) {
        ['to-do', 'in-progress', 'done'].forEach(status => {
            const taskList = document.querySelector(`.task-column[data-status="${status}"] .task-list`);
            taskList.innerHTML = '';

            if (project) {
                const tasks = project.tasks.filter(task => task.status === status);

                tasks.forEach(task => {
                    const li = document.createElement('li');
                    li.className = 'task-item';
                    li.dataset.taskId = task.id;
                    li.dataset.priority = task.priority;
                    li.dataset.deadline = task.deadline;

                    li.innerHTML = `
                        <span class="task-name">${task.name}</span>
                        <span class="task-meta">
                            <span class="task-priority">${task.priority}</span>
                            ${task.deadline ? `<span class="task-deadline">${task.deadline}</span>` : ''}
                        </span>
                    `;

                    taskList.appendChild(li);
                })
            }
        })
    }
};

export { DataView };
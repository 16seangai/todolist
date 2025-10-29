import { DataManager } from './dataManager.js';
import { DataView } from './dataView.js';
import './styles.css';

// ==================== Helper Functions ====================
function getActiveProjectId() {
    const activeProjectLi = document.querySelector('.project-list li.active');
    return activeProjectLi ? parseInt(activeProjectLi.dataset.projectId) : null;
}

function getActiveProject() {
    const projectId = getActiveProjectId();
    return projectId ? DataManager.Projects.find(projectId) : null;
}

function refreshProjectView(activeProjectId = null) {
    DataView.renderProjects(DataManager.projects, activeProjectId);
}

function updateProjectHeader() {
    const projectName = getActiveProject()?.name;
    DataView.updateProjectHeader(projectName);
}

function refreshTaskView() {
    const project = getActiveProject();
    if (project) {
        DataView.renderTasks(project);
    }
}

function getTaskFormData() {
    return {
        name: document.querySelector('input[name="task-name"]').value.trim(),
        description: document.querySelector('textarea[name="description"]').value.trim(),
        priority: document.querySelector('select[name="priority"]').value,
        deadline: document.querySelector('input[name="deadline"]').value || null,
    };
}

function populateTaskForm(task) {
    document.querySelector('input[name="task-name"]').value = task.name;
    document.querySelector('textarea[name="description"]').value = task.description;
    document.querySelector('select[name="priority"]').value = task.priority;
    document.querySelector('input[name="deadline"]').value = task.deadline || '';
}

function clearTaskForm() {
    document.querySelector('.task-form').reset();
}

function openDialog(dialog, dataAttributes = {}) {
    Object.entries(dataAttributes).forEach(([key, value]) => {
        if (value !== undefined) {
            dialog.dataset[key] = value;
        }
    });
    dialog.showModal();
}

function closeDialog(dialog, clearForm = null) {
    dialog.close();
    if (clearForm) clearForm();
    // Clear all data attributes
    Object.keys(dialog.dataset).forEach(key => delete dialog.dataset[key]);
}

// ==================== Initialization ====================
DataManager.load();
refreshProjectView();
refreshTaskView();
updateProjectHeader();

// ==================== Project Management ====================
const projectList = document.querySelector('.project-list');
const projectDialog = document.getElementById('project-dialog');
const addProjectButton = document.getElementById('add-project-btn');
const saveProjectButton = document.querySelector('.project-form button[value="save"]');

// Add project
addProjectButton.addEventListener('click', () => {
    openDialog(projectDialog);
});

// Save project
saveProjectButton.addEventListener('click', () => {
    const projectNameInput = document.querySelector('input[name="project-name"]');
    const projectName = projectNameInput.value.trim();

    if (projectName) {
        const newProject = DataManager.Projects.add(projectName);
        refreshProjectView(newProject.id);
        refreshTaskView();
        updateProjectHeader();
        closeDialog(projectDialog);
        projectNameInput.value = '';
    }
});

// Project list interactions
projectList.addEventListener('click', (e) => {
    // Delete project
    if (e.target.classList.contains('delete-project-btn')) {
        e.stopPropagation();
        const projectId = parseInt(e.target.dataset.projectId);
        const index = DataManager.projects.findIndex(p => p.id === projectId);

        DataManager.Projects.delete(projectId);

        // Select adjacent project
        const newActiveIndex = index > 0 ? index - 1 : 0;
        const newActiveId = DataManager.projects[newActiveIndex]?.id;

        refreshProjectView(newActiveId);
        refreshTaskView();
        updateProjectHeader();
        return;
    }

    // Select project
    if (e.target.closest('li')) {
        const projectId = parseInt(e.target.closest('li').dataset.projectId);
        refreshProjectView(projectId);
        refreshTaskView();
        DataView.updateProjectHeader(getActiveProject()?.name);
    }
});

// ==================== Task Management ====================
const taskDialog = document.getElementById('task-dialog');
const taskBoard = document.querySelector('.task-board');
const addTaskButtons = document.querySelectorAll('.add-task-btn');
const saveTaskButton = document.querySelector('.task-form button[value="save"]');
const deleteTaskButton = document.querySelector('.task-form button[value="delete"]');

// Drag and drop tasks to update their status
let dragStarted = false;

taskBoard.addEventListener('dragstart', (e) => {
    if (e.target.classList.contains('task-item')) {
        dragStarted = true;
        e.target.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
    }
});

taskBoard.addEventListener('dragend', (e) => {
    if (e.target.classList.contains('task-item')) {
        e.target.classList.remove('dragging');
    }
});

taskBoard.addEventListener('dragover', (e) => {
    e.preventDefault();
    const column = e.target.closest('.task-column');
    if (column) {
        e.dataTransfer.dropEffect = 'move';
    }
});

taskBoard.addEventListener('drop', (e) => {
    e.preventDefault();

    const column = e.target.closest('.task-column');
    if (!column) return;

    const draggingTask = document.querySelector('.dragging');
    if (!draggingTask) return;

    const newStatus = column.dataset.status;
    const taskId = parseInt(draggingTask.dataset.taskId);
    const projectId = getActiveProjectId();

    // Update task status
    DataManager.Tasks.update(projectId, taskId, { status: newStatus });
    refreshTaskView();
});

// Add task (click + button)
addTaskButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const column = e.target.closest('.task-column');
        const status = column.dataset.status;

        clearTaskForm();
        openDialog(taskDialog, { status });
    });
});

// Edit task (click task item)
taskBoard.addEventListener('click', (e) => {
    const taskItem = e.target.closest('.task-item');
    if (!taskItem) return;

    const taskId = parseInt(taskItem.dataset.taskId);
    const project = getActiveProject();
    const task = project?.tasks.find(t => t.id === taskId);

    if (task) {
        populateTaskForm(task);
        openDialog(taskDialog, { status: task.status, taskId });
    }
});

// Save task
saveTaskButton.addEventListener('click', () => {
    const taskId = taskDialog.dataset.taskId;
    const projectId = getActiveProjectId();

    if (!projectId) return;

    const taskData = {
        ...getTaskFormData(),
        status: taskDialog.dataset.status,
    };

    if (taskId) {
        DataManager.Tasks.update(projectId, parseInt(taskId), taskData);
    } else {
        DataManager.Tasks.add(projectId, taskData);
    }

    closeDialog(taskDialog, clearTaskForm);
    refreshTaskView();
});

// Delete task
deleteTaskButton.addEventListener('click', () => {
    const taskId = taskDialog.dataset.taskId;
    const projectId = getActiveProjectId();

    if (taskId) {
        DataManager.Tasks.delete(projectId, parseInt(taskId));
        closeDialog(taskDialog, clearTaskForm);
        refreshTaskView();
    }
});


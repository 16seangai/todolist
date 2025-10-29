const DataManager = {
    projects: [],
    nextProjectId: 1,
    nextTaskId: 1,

    save() {
        localStorage.setItem('projects', JSON.stringify(this.projects));
        localStorage.setItem('nextProjectId', this.nextProjectId);
        localStorage.setItem('nextTaskId', this.nextTaskId);
    },

    load() {
        const stored = localStorage.getItem('projects');
        this.nextProjectId = parseInt(localStorage.getItem('nextProjectId')) || 1;
        this.nextTaskId = parseInt(localStorage.getItem('nextTaskId')) || 1;
        stored ? this.projects = JSON.parse(stored) : this.init();
        return this.projects;
    },

    init() {
        this.projects = [
            {
                id: this.nextProjectId++,
                name: 'Default Project',
                tasks: []
            }
        ];
        this.save()
    },

    Projects: {
        find(projectId) {
            return DataManager.projects.find(project => project.id === projectId);
        },

        add(projectName) {
            const newProject = {
                id: DataManager.nextProjectId++,
                name: projectName,
                tasks: []
            };
            DataManager.projects.push(newProject);
            DataManager.save();
            return newProject;
        },

        delete(projectId) {
            DataManager.projects = DataManager.projects.filter(project => project.id !== projectId);
            DataManager.save();
        }
    },

    Tasks: {
        add(projectId, taskData) {
            const project = DataManager.projects.find(p => p.id === projectId);
            if (project) {
                const newTask = {
                    id: DataManager.nextTaskId++,
                    name: taskData.name,
                    description: taskData.description || '',
                    priority: taskData.priority,
                    deadline: taskData.deadline || null,
                    status: taskData.status,
                };
                project.tasks.push(newTask);
                DataManager.save();
                return newTask;
            }
        },

        update(projectId, taskId, updates) {
            const project = DataManager.Projects.find(projectId);
            if (project) {
                const task = project.tasks.find(t => t.id === taskId);
                if (task) {
                    Object.assign(task, updates);
                    DataManager.save();
                    return task;
                }
            }
        },

        delete(projectId, taskId) {
            const project = DataManager.Projects.find(projectId);
            if (project) {
                project.tasks = project.tasks.filter(t => t.id !== taskId);
                DataManager.save();
            }
        }
    }
};

export { DataManager };
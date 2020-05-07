import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        //this are some tests values
        taskLastId: 7,
        tasks: [
            { id: 1, value: "task1", completed: false },
            { id: 2, value: "task2", completed: false },
            { id: 3, value: "task3", completed: false },
            { id: 4, value: "task4", completed: true },
            { id: 5, value: "task5", completed: false },
            { id: 6, value: "task6", completed: true },
            { id: 7, value: "task7", completed: false }
        ]
    },
    mutations: {
        //this for handler on front end
        addNewTask: (state) => {
            state.taskLastId = state.taskLastId + 1;
            state.tasks.push({
                id: state.taskLastId,
                value: "",
                completed: false
            });
        },
        deleteTask: (state, value) => {
            var index = state.tasks.indexOf(value);
            Vue.delete(state.tasks, index)
        },
        completeAllTasks: (state) => {
            state.tasks.forEach(task => (task.completed = true));
        },
        activeAllTasks: (state) => {
            state.tasks.forEach(task => (task.completed = false));
        },
    },
    actions: {
        //on normal application this will send async message to the server, then call mutations
        addNewTaskAsync: ({ commit }, value) => commit("addNewTask", value),
        deleteTaskAsync: ({ commit }, value) => commit("deleteTask", value),
        completeAllTasksAsync: ({ commit }, value) => commit("completeAllTasks", value),
        activeAllTasksAsync: ({ commit }, value) => commit("activeAllTasks", value)
    },
    getters: {
        getTasks: state => state.tasks,
        getCompletedTasks: state => state.tasks.filter(x => x.completed === true),
        getActiveTasks: state => state.tasks.filter(x => x.completed === false),
    },
    modules: {},
});
<template>
  <div>
    <div v-for="task in filteredTasks" :key="task.id">
      <Task :task="task" @deletetask="deleteTask" />
    </div>
  </div>
</template>

<script>
import Task from "./task.vue";
import Vue from "vue";

export default {
  props: ["value", "filter"],
  components: {
    Task
  },
  data() {
    return {
      tasks: this.value
    };
  },
  computed: {
    filteredTasks: function() {
      var all_tasks = this.tasks;

      var completed_tasks = this.tasks.filter(x => x.completed === true);

      var active_tasks = this.tasks.filter(x => x.completed === false);
      //bad practice will refactor later when learn vuex
      this.$root.$emit("task-count", {
        all: all_tasks.length,
        completed: completed_tasks.length,
        active: active_tasks.length
      });

      if (this.filter === "completed") {
        return completed_tasks;
      } else if (this.filter === "active") {
        return active_tasks;
      } else {
        return all_tasks;
      }
    }
  },
  methods: {
    deleteTask: function(event) {
      var index = this.tasks.indexOf(event);
      Vue.delete(this.tasks, index);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
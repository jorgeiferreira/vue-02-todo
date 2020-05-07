<template>
  <div>
    <div v-for="task in filteredTasks" :key="task.id">
      <Task :task="task" @deletetask="deleteTaskAsync" />
    </div>
  </div>
</template>

<script>
import Task from "./task.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["filter"],
  components: {
    Task
  },
  data() {
    return {
      tasks: this.value
    };
  },
  computed: {
    ...mapGetters(["getTasks", "getCompletedTasks", "getActiveTasks"]),
    filteredTasks: function() {
      if (this.filter === "completed") {
        return this.getCompletedTasks;
      } else if (this.filter === "active") {
        return this.getActiveTasks;
      } else {
        return this.getTasks;
      }
    }
  },
  methods: {
    ...mapActions(["deleteTaskAsync"])
  }
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <div>
    <div class="top-options">
      <button class="botton" @click="completeAllTasksAsync">Complete All</button>
      <button class="botton" @click="activeAllTasksAsync">Active All</button>
    </div>
    <ShowTasks v-model="tasks" :filter="filter" />
    <div class="bottom-options">
      <button class="boton" @click="addNewTaskAsync">Add new</button>
    </div>
  </div>
</template>

<script>
import ShowTasks from "../components/show_tasks.vue";
import { mapActions } from "vuex";

export default {
  props: ["tasks", "filter"],
  components: {
    ShowTasks
  },
  methods: {
    ...mapActions([
      "addNewTaskAsync",
      "completeAllTasksAsync",
      "activeAllTasksAsync"
    ])
  }
};
</script>

<style scoped>
.top-options .botton,
.botton-options .botton {
  margin: 10px;
  margin-top: 0px;
}
</style>
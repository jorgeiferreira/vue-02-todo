<template>
  <div>
    <div class="top-options">
      <button class="botton" @click="completeAll">Complete All</button>
      <button class="botton" @click="activeAll">Active All</button>
    </div>
    <ShowTasks v-model="tasks" :filter="filter" />
    <div class="bottom-options">
      <button class="boton" @click="addNew">Add new</button>
    </div>
  </div>
</template>

<script>
import ShowTasks from "../components/show_tasks.vue";
export default {
  props: ["tasks", "filter"],
  components: {
    ShowTasks
  },
  methods: {
    completeAll: function() {
      this.tasks.forEach(task => {
        task.completed = true;
      });
    },
    activeAll: function() {
      this.tasks.forEach(task => {
        task.completed = false;
      });
    },
    addNew: function() {
      //the id is only to have a correct behavior on the loop using :key
      //as we have some test data hard code just starting from 50
      if (!this.lastId) {
        this.lastId = 50;
      }
      this.lastId = this.lastId + 1;
      this.tasks.push({
        id: this.lastId,
        value: "",
        completed: false
      });
    }
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
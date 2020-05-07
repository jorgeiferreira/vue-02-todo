<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        All
        <span>({{all_tasks}})</span>
      </router-link>|
      <router-link to="/active">
        Active
        <span>({{all_active}})</span>
      </router-link>|
      <router-link to="/completed">
        Completed
        <span>({{all_completed}})</span>
      </router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getTasks", "getCompletedTasks", "getActiveTasks"]),
    all_tasks: function() {
      return this.getTasks.length;
    },
    all_active: function() {
      return this.getActiveTasks.length;
    },
    all_completed: function() {
      return this.getCompletedTasks.length;
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

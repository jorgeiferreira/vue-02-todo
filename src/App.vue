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
export default {
  data() {
    //bad practice will refactor later when learn vuex
    this.$root.$on("task-count", function(eventData) {
      var data = this.$children[0].$data;
      data.all_tasks = eventData.all;
      data.all_active = eventData.active;
      data.all_completed = eventData.completed;
    });
    return {
      all_tasks: 10,
      all_active: 5,
      all_completed: 3
    };
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

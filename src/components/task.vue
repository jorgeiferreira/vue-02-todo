<template>
  <div>
    <input class="task-check" type="checkbox" name="select_task" v-model="task.completed" />
    <span
      class="textarea"
      role="textbox"
      rows="1"
      contenteditable="true"
      v-html="task.value"
      @blur="handleTextInput"
    ></span>
    <button class="task-close" @click="$emit('deletetask',task)">X</button>
  </div>
</template>

<script>
export default {
  props: ["task"],
  methods: {
    handleTextInput: function(e) {
      this.task.value = e.target.innerHTML;
    }
  }
};
</script>

<style scoped>
.textarea {
  display: inline-block;
  width: 30%;
  overflow: hidden;
  min-height: 30px;
  line-height: 30px;
  text-align: left;
  border: lightblue 1px solid;
}

.textarea[contenteditable]:empty::before {
  content: "Write Something";
  color: gray;
}
.task-check {
  display: inline-block;
  height: 30px;
  vertical-align: top;
  margin-right: 10px;
}
.task-close {
  display: inline-block;
  height: 30px;
  vertical-align: top;
  margin-left: 10px;
}
</style>
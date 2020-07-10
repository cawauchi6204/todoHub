<template>
  <div>
    <TaskDetail />
    <li v-for="(task, index) in tasks" :key="index" class="task">
      <div class="task-box">
        <p class="task-name">{{ task.title }}</p>
      </div>
      <div class="content">{{ task.detail }}</div>
      <p>{{ task.date }}</p>
    </li>
  </div>
</template>

<script>
import TaskDetail from './TaskDetail'
export default {
  components: {
    TaskDetail,
  },
  props: ['tasks'],
}
</script>
<style lang="scss">
.task {
  list-style: none;
  border: 1px solid #e1e4e8;
  padding: 5px 15px;
  position: relative;
  margin: 10px;
  border-radius: 10px;
  width: 45%;

  .task-box {
    margin: 10px 10px 10px 0;
  }
}
</style>

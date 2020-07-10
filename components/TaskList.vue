<template>
  <div>
    <li v-for="(task, index) in tasks" class="task" :key="index">
      <div class="task-box">
        <p class="task-name">{{ task.title }}</p>
      </div>
      <div class="content">{{ task.detail }}</div>
    </li>
  </div>
</template>

<script>
export default {
  props: ['tasks'],
}
</script>
<style lang="scss">
.task {
  list-style: none;
  border-top: 1px solid #eee;
  padding: 5px 15px;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: flex-start;
  position: relative;

  &:first-child {
    border: none;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.02);
  }

  .task-box {
    margin: 10px 10px 10px 0;

    .avatar {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      border: 1px solid #eee;
      background-size: cover;
    }

    .task-name {
      margin: 5px 0 0 0;
      text-align: center;
      font-size: 0.7rem;
      line-height: 0.7rem;
      width: 50px;
    }
  }

  .content {
    padding: 10px;
  }
}
</style>

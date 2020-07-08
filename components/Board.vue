<template>
  <div class="todo">
    <TaskDetail />
    <TaskList title="Todo" :tasklist="todolist" />
    <TaskList title="Done" :tasklist="todolist" />
  </div>
</template>

<script>
import TaskDetail from '../components/TaskDetail'
import TaskList from '../components/TaskList'
export default {
  components: {
    TaskList,
    TaskDetail,
  },
  computed: {
    todolist() {
      return this.$store.getters['task/orderdTodos']
      // .filter((el) => {
      //   return el.status === false
      // }, this)
    },
    donelist() {
      return this.$store.getters['task/orderdTodos']
      // .filter((el) => {
      //   return el.status === true
      // }, this)
    },
  },
  created() {
    this.$store.dispatch('task/init')
  },
}
</script>

<style>
.status.done {
  text-decoration: line-through;
}
</style>

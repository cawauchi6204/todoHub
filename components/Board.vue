<template>
  <div class="todo">
    <TaskList :tasks="tasks" />
    <Calendar />
  </div>
</template>

<script>
import TaskList from '../components/TaskList'
import Calendar from '../components/Calendar'
import firebase from '~/plugins/firebase'
const db = firebase.firestore()
const taskRef = db.collection('task')

export default {
  components: {
    TaskList,
    Calendar,
  },
  data() {
    return {
      tasks: [],
    }
  },
  created() {
    taskRef
      .orderBy('date', 'desc')
      .limit(5)
      .onSnapshot((querySnapshot) => {
        this.tasks = []
        querySnapshot.forEach((doc) => {
          this.tasks.push(doc.data())
          console.log('test')
        })
      })
  },
}
</script>

<style>
.status.done {
  text-decoration: line-through;
}
</style>

<template>
  <div class="todo">
    <TaskList :tasks="tasks" />
  </div>
</template>

<script>
import TaskList from '../components/TaskList'
import firebase from '~/plugins/firebase'
const db = firebase.firestore()
const taskRef = db.collection('task')

export default {
  components: {
    TaskList,
  },
  data() {
    return {
      tasks: [],
    }
  },
  created() {
    taskRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.tasks.push(doc.data())
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

<template>
  <div class="todo">
    <TaskDetail />
    <TaskList :tasks="tasks" />
  </div>
</template>

<script>
import TaskDetail from '../components/TaskDetail'
import TaskList from '../components/TaskList'
import firebase from '~/plugins/firebase'
const db = firebase.firestore()
const taskRef = db.collection('task')

export default {
  components: {
    TaskList,
    TaskDetail,
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
  // firestore() {
  //   return {
  //     tasks: taskRef,
  //   }
  // },
}
</script>

<style>
.status.done {
  text-decoration: line-through;
}
</style>

<template>
  <div class="todo">
    <TaskDetail />
    <TaskList :tasks="tasks" title="Todo" :tasklist="todolist" />
    //おそらくここのtitleやv-bindでエラーがおこっている
    <TaskList title="Done" :tasklist="todolist" />
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
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data())
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

<template>
  <div class="flex">
    <h1>Todo List</h1>
    <input type="text" v-model="title" />
    <textarea cols="30" rows="10" v-model="detail"></textarea>
    <input type="date" v-model="date" />
    <button @click="add">Todoディポジトリに追加する</button>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
const db = firebase.firestore()
const taskRef = db.collection('task')

export default {
  data() {
    return {
      tasks: [],
      title: '',
      detail: '',
      dialog: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
    }
  },
  methods: {
    add() {
      if (this.title.trim()) {
        taskRef.add({
          title: this.title,
          detail: this.detail,
          date: this.date,
          status: false,
        })
      }
      //  ここの部分をtaskに追加する記述にする
      this.dialog = false
      this.title = ''
      this.detail = ''
      // 追加した後にinput欄をデフォルト値に戻す
    },
  },
}
</script>

<style>
.flex {
  display: flex;
  flex-direction: column;
}
</style>

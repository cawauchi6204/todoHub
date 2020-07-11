<template>
  <div class="task-detail">
    <input type="text" v-model="title" placeholder="タイトル" />
    <textarea placeholder="詳細" cols="15" rows="3" v-model="detail"></textarea>
    <input type="date" v-model="date" />
    <button class="button is-primary" @click="add">
      Todoディポジトリに追加する
    </button>
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

<style lang="scss" scoped>
.task-detail {
  border: 1px solid #e1e4e8;
  padding: 5px 15px;
  position: relative;
  margin: 10px 0 10px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 45%;

  input,
  textarea,
  button {
    margin: 5px;
    border-radius: 5px;
  }

  .task-box {
    margin: 10px 10px 10px 0;
  }
}
</style>

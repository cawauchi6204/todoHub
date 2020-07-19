<template>
  <div class="task-detail">
    <input v-model="title" type="text" placeholder="タイトル" />
    <textarea v-model="detail" placeholder="詳細" cols="15" rows="3"></textarea>
    <input v-model="date" type="date" />
    <button class="button is-primary" @click="add">
      Todoリポジトリに追加する
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
          uid: this.$store.getters.currentUser,
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
    margin: 3px;
    border-radius: 5px;
    border: 1px #e1e4e8 solid;
  }

  .task-box {
    margin: 10px 10px 10px 0;
  }
}
.is-primary {
  background-color: #04d2b2;
}
</style>

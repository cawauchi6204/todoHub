<template>
  <div class="task-detail">
    <input v-model="title" type="text" placeholder="タイトル" />
    <textarea v-model="detail" placeholder="詳細" cols="15" rows="3"></textarea>
    <input v-model="date" type="date" />
    <button class="button is-primary" @click="addTodo">
      Todoリポジトリに追加する
    </button>
  </div>
</template>

<script>
import '../store/store'
// import firebase from '~/plugins/firebase'
// const db = firebase.firestore()

export default {
  data() {
    return {
      title: '',
      detail: '',
      date: new Date().toISOString().substr(0, 10),
    }
  },
  methods: {
    // storeに値をディスパッチしている
    // storeからfirebaseにsubscribeでデータに変更があった場合にfirestoreにデータが送られる
    addTodo() {
      if (this.title.trim()) {
        this.$store.dispatch('addTodo', {
          title: this.title,
          detail: this.detail,
          date: this.date,
          status: false,
        })
        console.log(this.$store.state.tasks)
      }
      //  ここの部分をtaskに追加する記述にする
      this.title = ''
      this.detail = ''
      this.date = ''
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

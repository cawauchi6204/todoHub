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
export default {
  data() {
    return {
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
      this.$store.dispatch('task/add', {
        title: this.title,
        detail: this.detail,
        date: this.date,
      })
      this.dialog = false
      this.title = ''
      this.detail = ''
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

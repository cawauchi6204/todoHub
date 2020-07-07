<template>
  <article class="box media">
    <div class="media-content">
      <h4>{{ title }}</h4>
      <ul>
        <li v-for="task in taskList" :key="task.id">
          <h4>{{ task.title }}</h4>
          <p>{{ task.detail }}</p>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    type: String,
  },
  tasklist: {
    type: Array,
    default: null,
  },
  methods: {
    remove(id) {
      this.$store.dispatch('task/remove', id)
    },
    toggle(task) {
      this.$store.dispatch('task/toggle', task)
    },
  },
}
</script>

<style scoped>
.card-description {
  margin: 20px 20px 10px 10px;
}
</style>

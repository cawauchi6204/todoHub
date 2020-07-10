<template>
  <article class="box media">
    <div class="media-content">
      <h4>{{ title }}</h4>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <h4>タイトル:{{ task.title }}</h4>
          <p>詳細:{{ task.detail }}</p>
          <h4>追加日:{{ task.date }}</h4>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  props: ['tasks'],
}
</script>

<style scoped>
.card-description {
  margin: 20px 20px 10px 10px;
}
</style>

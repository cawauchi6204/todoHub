<template>
  <article class="box media">
    <div class="media-content">
      <h4>{{ title }}</h4>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <h4>{{ task.title }}</h4>
          <p>{{ task.detail }}</p>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {}
</script>

<style scoped>
.card-description {
  margin: 20px 20px 10px 10px;
}
</style>

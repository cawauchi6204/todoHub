<template>
  <div>
    <Header />
    <div class="container">
      <main class="columns">
        <Sidebar class="column is-one-quarter" />
        <Board class="column is-three-quarter" />
      </main>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>

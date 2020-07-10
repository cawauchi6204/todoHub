<template>
  <div>
    <Header />
    <div class="container">
      <main class="columns">
        <Sidebar class="column is-one-thirds" />
        <Board class="column is-two-thirds" />
        <Calendar />
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
  align-items: center;
}
</style>

<template>
  <header class="header">
    <nav class="navbar">
      <div class="navbar-brand">
        <div>
          <img />
        </div>
        <input
          type="text"
          placeholder="search or jump to......."
          class="search-box navbar-item"
        />
        <li class="navbar-item has-text-white">Pull requests</li>
        <li class="navbar-item has-text-white">Issues</li>
        <li class="navbar-item has-text-white">Marketplace</li>
        <li class="navbar-item has-text-white">Explore</li>
      </div>
      <Login class="has-test-right" />
    </nav>
  </header>
</template>

<script>
import Login from './Login'
export default {
  components: {
    Login,
  },
}
</script>

<style>
.header {
  width: 100%;
}

.navbar {
  background-color: #252a2e;
}

.search-box {
  height: 70%;
  margin: auto;
  background-color: #46494d;
  border: none;
  border-radius: 8px;
}
</style>

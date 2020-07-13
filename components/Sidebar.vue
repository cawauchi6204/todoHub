<template>
  <div class="side-header">
    <img
      src="https://identicons.github.com/pronama.png"
      class="profile-image"
    />
    <h3 class="user-name">taro yamada</h3>
    <p class="occupation">職業:無職</p>
    <p class="email">email:hogehoge@example.com</p>
    <p class="description">hogehgoefugafuga</p>
    <button class="button is-gray">Edit profile</button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.side-header {
  p {
    color: #31373a;
  }
}
.profile-image {
  border-radius: 50%;
  width: 25%;
  height: auto;
}
.user-name {
  font-size: 30px;
  font-weight: bold;
}
</style>

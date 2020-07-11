<template>
  <div>
    <button v-if="currentUser" class="button is-primary" @click="logout">
      ログアウト
    </button>
    <button v-else class="button is-primary" @click="login">ログイン</button>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
const auth = firebase.auth()
const db = firebase.firestore()
export default {
  data() {
    return {
      currentUser: {},
    }
  },
  created() {
    auth.onAuthStateChanged((user) => {
      this.currentUser = user
    })
  },
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithPopup(provider).then((result) => {
        alert('こんにちは' + result.user.displayName + 'さん!')
        this.createUser(result.user)
      })
    },
    logout() {
      auth.signOut().then(() => {
        alert('ログアウトできました')
        this.$router.push('/')
        location.reload()
      })
    },
    createUser(user) {
      db.collection('users').doc(user.uid).set(
        {
          name: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
        },
        { merge: true }
      )
    },
  },
}
</script>
<style lang="scss" scoped>
.is-primary {
  background-color: #04d2b2;
}
</style>

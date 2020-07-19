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
        alert('こんにちは' + result.user.displayName + 'さん!').then(
          (result) => {
            this.createUser(result.user)
            this.currentUser = result.user
            this.$store.dispatch('login', { result })
          }
        )
      })
    },
    logout() {
      auth.signOut().then(() => {
        alert('ログアウトできました')
        this.$router.push('/user/:id')
        location.reload()
      })
    },
    createUser(user) {
      // 一致するuserがなければ情報をセットする
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

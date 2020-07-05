<template>
  <div>
    <button class="button is-primary is-rounded" @click="login">
      ログイン
    </button>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  methods: {
    login() {
      console.log('login')
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          const user = result.user
          console.log('success:' + user)
        })
        .catch((error) => {
          const errorCode = error.code
          console.log('error:' + errorCode)
        })
    },
  },
}
</script>

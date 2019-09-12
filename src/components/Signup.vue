<template>
  <div class="">
    <div class="signup">
      <h2>新規登録</h2>
      <input type="text" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <button @click="signUp">登録</button>
      <p>すでにアカウントをもっていますか?</p>
      <router-link to="/signin">ログインはこちら</router-link>
    </div>
    <div class="under-container">

    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(res => {
        console.log('Create account: ', res.user.email)
      }).catch(error => {
        alert(error.message)
      })
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #1985c1;
}
.signup {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: #97e6ff;
  height: 80vh;
}
.under-container {
  height: 20vh;
  background-color: #60b4f4;
}

input {
  margin: 10px 0;
  padding: 10px;
}
button {
  margin: 10px 0;
  padding: 10px;
  width: 80px;
  height: 50px;
  background-color: #1985c1;
  color: white;
  border-radius: 20px;
  border-style: none;
}
</style>

<template>
  <div class="">
    <div class="signin">
      <h2>ログイン</h2>
      <input type="text" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <button @click="signIn">ログイン</button>
      <p>アカウントを持っていますか?
        <router-link class="link" to="/signup">新規登録はこちら</router-link>
      </p>
    </div>
    <div class="under-container">

    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Signin',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(res => {
        console.log("res.user.qa:"+res.user.qa)
        res.user.getIdToken().then(idToken => {
          localStorage.setItem("jwt", idToken.toString());
        });
        this.$router.push('/')
      }, err => {
        alert(err.message)
      })
      console.log("jwt:"+localStorage.getItem('jwt'))
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
.signin {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #97e6ff;
}
.under-container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
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
  width: 100px;
  height: 50px;
  background-color: #1985c1;
  color: white;
  border-radius: 20px;
  border-style: none;
}

</style>

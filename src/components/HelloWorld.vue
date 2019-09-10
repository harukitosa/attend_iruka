
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Essential Links</h3>
    <button @click="signOut" type="button" name="button">Sign out</button>
    <button @click="apiPublic" type="button" name="button">public</button>
    <button @click="apiPrivate" type="button" name="button">private</button>
    <button @click="check" type="button" name="button">id</button>
  </div>
</template>

<script>
import axios from 'axios'
import firebase from 'firebase'

export default {
  name: 'HelloWorld',
  data () {
      return {
      msg: 'Welcome to Your Vue.js App.',
      name: firebase.auth().currentUser.email
    }
  },
  methods: {
    signOut: function() {
        firebase.auth().signOut().then(() => {
        localStorage.removeItem('jwt')
        this.$router.push('/signin')
      })
    },
    apiPublic: async function() {
      let res = await axios.get('http://localhost:8000/public')
      this.msg = res.data
    },
    apiPrivate: async function() {
      // console.log("jwt: "+localStorage.getItem('jwt'))
      let res = await axios.get('http://localhost:8000/private', {
        headers: {'Authorization': `Bearer ${localStorage.getItem('jwt')}`}
      })
      this.msg = res.data
    },
    check: async function() {
      let res = await axios.get('http://localhost:8000/check_user', {
        headers: {'Authorization': `Bearer ${localStorage.getItem('jwt')}`}
      })
      this.msg = res.data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
  color: #42b983;
}
</style>

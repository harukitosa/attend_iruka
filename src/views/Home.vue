<template>
  <div class="container">
    <h1>IRUKA</h1>
    <p>home</p>
    <button @click="attend">出欠</button>
    <button>記録を見る</button>
    <button>生徒を追加</button>
    <button @click="signOut">ログアウト</button>
    <p>{{this.year}}</p>
    <p>{{this.month}}</p>
    <p>{{this.day}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase'
// import axios from 'axios'

export default {
  name: "home",
  data() {
    var now = new Date()
    return{
      year: now.getYear()+1900,
      month: now.getMonth()+1,
      day: now.getDate()
    }
  },
  methods: {
    attend: function() {
      this.$router.push("/roll_call/"+this.year+"/"+this.month+"/"+this.day+"/"+0);
    },
    signOut: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          localStorage.removeItem("jwt");
          this.$router.push("/signin");
        });
    }
  }
};
</script>

<style src="../assets/home.css" scoped>
</style>

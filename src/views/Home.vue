<template>
  <div class="container">
    <h1>IRUKA</h1>
    <button @click="attend" onthouchstart>本日の出欠</button>
    <button @click="rool_book" ontouchstart>記録を見る</button>
    <button @click="newdata" ontouchstart>生徒を追加</button>
    <button @click="signOut" ontouchstart>ログアウト</button>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";
// import axios from 'axios'

export default {
  name: "home",
  data() {
    var now = new Date();
    return {
      year: now.getYear() + 1900,
      month: now.getMonth() + 1,
      day: now.getDate(),
    };
  },
  methods: {
    rool_book: function() {
      this.$router.push("/roll_book");
    },
   attend: function() {
      this.$router.push(
        "/roll_call/" + this.year + "/" + this.month + "/" + this.day
      );
    },
    newdata: function() {
      this.$router.push("/insert_new_data");
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

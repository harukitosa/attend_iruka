<template>
  <div class="container">
    <h2>生徒情報登録</h2>
    <div class="form-box">
      <input type="text" placeholder="学年" v-model="studentGrade" />
      <input type="text" placeholder="組" v-model="studentClass" />
      <span>追加する人数を指定してください</span>
      <input type="text" placeholder="人数" v-model="studentNumber" />
      <!-- <input type="name" placeholder="名前" v-model="studentName" /> -->
    </div>
    <button @click="submit" class="button">登録</button>
  </div>
</template>

<script>
import axios from "axios";
import firebase from "firebase";
export default {
  name: "InsertNewData",
  data: function() {
    var user = firebase.auth().currentUser;
    return {
      studentGrade: "",
      studentClass: "",
      studentNumber: "",
      // studentName: "",
      owner_id: user.uid
    };
  },
  methods: {
    submit() {
      axios.post(
        process.env.VUE_APP_HOST + "/insert_student/:" + this.owner_id+"/:"+this.studentNumber,
        {
          grade: this.studentGrade,
          class: this.studentClass,
          // number: this.studentNumber,
          // name: this.studentName,
          ownerID: this.owner_id
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json"
          }
        }
      );
      this.studentGrade = '';
      this.studentClass = '';
      // this.studentName = '';
      this.studentNumber = '';
    }
  }
};
</script>

<style src="../assets/insertnewdata.css" scoped>
</style>
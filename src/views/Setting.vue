<template lang="html">
  <div class="setting">
    <div class="main">
      <h4>ユーザー情報を変更する</h4>
      <input type="name" placeholder="名前" v-model="name" required>
      <input  placeholder="学年" v-model="grade">
      <input  placeholder="組" v-model="cla">
      <input placeholder="番号" v-model="number">
      <b-button @click='store' class="button">保存</b-button>
    </div>
    <BaseSlide/>
  </div>
</template>

<script>
import BaseSlide from '@/components/BaseSlide.vue'
import axios from 'axios'
import firebase from 'firebase'

export default {
  name: 'Setting',
  components: {
    BaseSlide
  },
  data: function() {
    var user = firebase.auth().currentUser;
    return {
      name: '',
      grade: '',
      cla: '',
      number: '',
      id: user.uid,
    }
  },
  methods: {
    store() {
      axios.post('http://localhost:8000/insert_user/:'+this.id,
      {
        name: this.name,
        grade: this.grade,
        class: this.cla,
        number: this.number,
      },
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
          'Content-Type': 'application/json',
        },
      }
    )
  }
}
}
</script>

<style lang="css" scoped>
.setting {
  background-color: #97e6ff;
  height: 100vh;
  padding-top: 180px;
}
.main {
  background-color: #97e6ff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
.button {
  background-color: #1985c1;
}
</style>

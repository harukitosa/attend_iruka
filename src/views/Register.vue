
<template lang="html">
<div class="main">
  <div class="attendance" v-if="show">
    <h1>出席簿登録</h1>
    <span>パスワードを入力してください。</span>
    <input type="password" placeholder="Password" v-model="password">
    <b-button @click="postpassword" variant="warning" class="button">登録</b-button>
    {{this.check.value}}
  </div>
  <div class="attendance" v-else>
    <b-card class="card">
      <h3 v-if="check.value">出席簿に登録しました</h3>
      <h3 v-else>パスワードが間違っているか、出席簿が存在していません</h3>
      <b-button class="button" variant="warning" @click="back">戻る</b-button>
    </b-card>
  </div>
  <BaseSlide/>
</div>
</template>

<script>
import BaseSlide from '@/components/BaseSlide.vue'
import axios from 'axios'
import firebase from 'firebase'
export default {
    name: 'Register',
    data: function() {
        var user = firebase.auth().currentUser;
        return {
            id: user.uid,
            check: [],
            password: '',
            show: true
        }
    },
    methods: {        
        postpassword() {
            axios.get('https://attend-iruka.herokuapp.com/:'+this.password+'/:'+this.id, {
                headers: {'Authorization': `Bearer ${localStorage.getItem('jwt')}`}
            })
                .then(response => {
                    this.check = response.data
                    console.log(response.data)
                })
            this.show = !this.show
        },
        back() {
            this.show = !this.show
        }
  },
    components: {
    BaseSlide
    }
}
</script>

<style lang="css" scoped>
h1, h2 {
  font-weight: normal;
}
p {
  font-size: 18px;
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
.card {
    width: 80vw;
    max-width: 600px;
    text-align: center;
}
.main {
  background-color: #97e6ff;
}
.attendance{
  display: flex;
  flex-flow: column nowrap;
  /* justify-content: center; */
  padding-top: 200px;
  align-items: center;
  height: 100vh;
  background-color: #97e6ff;
}

input {
  margin: 10px 0;
  padding: 10px;
  width: 70vw;
  max-width: 400px;
}

.alert {
  margin-top: 50px;
  width: 80vw;
}
.button {
  margin-top: 30px;
  width: 70vw;
  height: 50px;
  max-width: 400px;
}
</style>

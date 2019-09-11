<template lang="html">
<div class="container">
  <div class="form" v-if="!show">
    <h2>出欠を取る</h2>
    <h6>ワンタイムパスワードを設定してください</h6>
    <input type="text" placeholder="Password" v-model="password">
    <button variant="warning" @click="change">＋</button>
  </div>
  <div class="form" v-else>
    <h2>出欠を開始しました</h2>
    <h4>パスワードは{{this.password}}です。</h4>
    <p>有効期間は今から15分間です。</p>
    <button @click="back">戻る</button>
  </div>
  <BaseSlide/>
</div>
</template>

<script>
import BaseSlide from '@/components/BaseSlide.vue'
import axios from 'axios'
import firebase from 'firebase'
export default {
    name: 'MakeList',
    components: {
        BaseSlide
    },
    data: function() {
        return {
            show: false,
            password: '',
        }
    },
    methods: {
        change(){
            var user = firebase.auth().currentUser;
            this.show = true
            axios.post('http://localhost:8000/insert_list/:'+this.$route.params.id,
                       {
                           password: this.password,
                           user_id: user.uid
                       },
                       {
                           headers: {
                               'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                               'Content-Type': 'application/json',
                           },
                       },
                      )
        },
        back() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="css" scoped>
.container {
    padding-top: 120px;
    min-height: 100vh;
    min-width: 100vw;
    background-color: #97e6ff;
    display: flex;
    flex-flow: column;
    align-items: center;
}
h1, h2, h6 {
    font-weight: normal;
}
h6 {
    padding-top: 50px;
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

.form {
    display: flex;
    flex-flow: column;
    align-items: center;
    border:solid #1985c1;
    padding: 60px;
    height: 50vh;
}

input {
    margin: 10px 0;
    padding: 10px;
}
button {
    margin: 10px 0;
    padding: 10px;
    width: 100px;
    height: 60px;
    background-color: #1985c1;
    color: white;
    border-radius: 20px;
    border-style: none;
    box-shadow:0px 5px 1px #60b4f4;
}
button:hover {
    margin: 15px 0;
    box-shadow: none;
}
</style>

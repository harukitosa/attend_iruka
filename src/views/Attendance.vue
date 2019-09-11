<template lang="html">
<div class="main">
  <div>
    <!--ここでパスコード登録ではない-->
    <div class="attendance" v-if="show">
      <h1>出席</h1>
      <span>パスワードを入力してください。</span>
      <input type="password" placeholder="Password" v-model="password">
      <b-button @click="postpassword" variant="warning" class="button">登録</b-button>
      {{this.check.value}}      
    </div>
    <div class="attendance" v-else>
      <b-card class="card">
        <div v-if="check.value">
          <h3>出席完了しました。</h3>
        </div>
        <div v-else>
          <h3>パスワードが間違っているか、時間外の出席です。</h3>
        </div>
        <b-button @click="back" variant="warning" class="button">戻る</b-button>
      </b-card>
    </div>
    <BaseSlide/>
  </div>
</div>
</template>

<script>
import BaseSlide from '@/components/BaseSlide.vue'
import axios from 'axios'
import firebase from 'firebase'
export default {
    name: 'Attendance',
    data: function() {
        var user = firebase.auth().currentUser;
        return {
            id: user.uid,
            check: [
                { value: false}
            ],
            password: '',
            show: true,
        }
    },
    methods: {        
        postpassword() {
            axios.get('http://localhost:8000/check_list_pass/:'+this.password+'/:'+ this.$route.params.id + '/:'+ this.id, {
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
h3 {
    font-size: 22px;
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
    width: 90vw;
    max-width: 500px;
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

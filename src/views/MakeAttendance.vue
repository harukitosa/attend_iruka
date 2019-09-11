<template lang="html">
  <div>
    <div class="make_attendance" v-if="show">
      <h1>出席簿を作成する</h1>
      
      <p>タイトル</p>
      <input type="name" placeholder="出席簿名" v-model="title" required>
      <p>パスワード</p>
      <input placeholder="パスワード" v-model="password" required>
      
      <p>概要欄</p>
      <textarea placeholder="例: 朝礼の名簿だよ!" v-model="description" required></textarea>
      <b-button @click="send" class="button" variant="warning">作成</b-button>
      <BaseSlide/>
    </div>
    <div class="make_attendance" v-else>
      <h1>完了しました</h1>
      <b-button class="button blue" @click="back">Homeに戻る</b-button>
      <BaseSlide/>
    </div>
 </div>

</template>

<script>
import BaseSlide from '@/components/BaseSlide.vue'
import axios from 'axios'
import firebase from 'firebase'

export default {
    name: 'MakeAttendance',
    components: {
        BaseSlide
    },
    data: function() {
        var user = firebase.auth().currentUser;
        return {
            title: '',
            description: '',
            password: '',
            user_id: user.uid,
            show: true,
        }
    }, 
    methods: {
        send() {
            this.dismissCountDown = this.dismissSecs
            axios.post('https://attend-iruka.herokuapp.com/insert_room/:'+this.user_id,
                       {
                           owner_id: this.user_id,
                           title: this.title,
                           description: this.description,
                           password: this.password,
                       },
                       {
                           headers: {
                               'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                               'Content-Type': 'application/json',
                           },
                       },
                      )
            this.show = !this.show
        },
        back() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="css" scoped>
.make_attendance{
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #97e6ff;
}

p {
    margin-top: 20px;
    margin-bottom: 10px;
}

.alert {
    width: 100vh;
    height: 80px;
}

input {
    padding: 10px;
    width: 80vw;
    max-width: 400px;
}

.button {
  width: 80vw;
  margin-top: 80px;
  height: 60px;
  max-width: 400px;
  z-index: auto;
}
textarea {
  width: 80vw;
  padding: 10px;
  max-width: 400px;
  height: 140px;
}

.blue {
    background-color: #1985c1;
}
</style>

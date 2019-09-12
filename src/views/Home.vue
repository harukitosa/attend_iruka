<template>
  <div class="home">
    <div class="main-home">
      <b-container class="container">
        <b-card>
          <h4>{{name}}</h4>
          <p v-if="grade != ''">{{grade}}年 {{cla}}組 {{number}}番</p>
          <div v-if="name === ''">
            <p>⬇初回利用の方はこちら</p>
            <b-button variant="warning" @click="post" class="newpost" type="button" name="button">データ登録</b-button>
          </div>
          <b-button class="singoutbutton" @click="signOut" type="button" name="button">ログアウト</b-button>
        </b-card>
        <b-button
        variant="warning"
        @click="change"
        class="button"
        >登録する</b-button>
        <!-- fixed-bottom -->
        <b-button
        @click="make_attendance"
        class="button primary"
        >作成する</b-button>
        <BaseRoomList/>
      </b-container>
      <BaseSlide/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase'
import BaseSlide from '@/components/BaseSlide.vue'
import axios from 'axios'
import BaseRoomList from '@/components/BaseRoomList.vue'
export default {
  name: 'home',
  data: function() {
    var user = firebase.auth().currentUser;
    return {
      user: null,
      id: user.uid,
      name: '',
      grade: '',
      cla: '',
      number: '',
    }
  },
  mounted: async function(){
    let res = await axios.get(process.env.VUE_APP_HOST + '/get_user/:'+this.id, {
      headers: {'Authorization': `Bearer ${localStorage.getItem('jwt')}`}
    })
    this.user = res.data
    this.name = this.user.name
    this.grade = this.user.grade
    this.cla = this.user.class
    this.number = this.user.number
  },
  methods: {
    change() {
      this.$router.push('/register')
    },
    make_attendance() {
      this.$router.push('/make_room')
    },
    signOut: function() {
      firebase.auth().signOut().then(() => {
        localStorage.removeItem('jwt')
        this.$router.push('/signin')
      })
    },
    post: function() {
      this.$router.push('/setting')
    }
  },
  components: {
    BaseSlide,
    BaseRoomList
  }
}
</script>

<style scoped>
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
.main-home{
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  background-color: #97e6ff;
}

.container {
  padding: 30px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
.card {
  margin-top: 90px;
  padding: 20px;
  width: 90vw;
  max-width: 600px;
}
.inner {
  padding: 15px;
}
.inner-top {
  display: flex;
  justify-content: flex-end;
  padding: 20px;
}
.name {
  margin: 6px;
}
.grade {
  margin: 6px;
}
.button {
  width: 90vw;
  margin-top: 50px;
  height: 60px;
  max-width: 600px;
  z-index: auto;
}
.primary {
  background-color: #60b4f4;
  border: none;
}
.primary:hover {
  background-color: #1985c1;
}
.singoutbutton {
  background-color: #1985c1;
}
.singoutbutton:hover {
  background-color: #60b4f4;
}


</style>

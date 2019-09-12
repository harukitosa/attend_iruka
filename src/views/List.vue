<template lang="html">
<div class="container">
  <div class="header">
    <b-card class="card">
      <h3>{{$route.params.title}}</h3>
    </b-card>
    <b-button variant="warning" class="button" @click="make_list">
      出欠を取る
    </b-button>
    <div class="box">
        <b-card v-for="list in lists" v-bind:key="list.id" class="list">
          <router-link :to="{name: 'MemberList', params: {id: list.id, title: list.title}}">
            {{list.title}}
          </router-link>
        </b-card>
    </div>
  </div>
  <BaseSlide/>
</div>
</template>

<script>
import BaseSlide from '@/components/BaseSlide.vue'
import axios from 'axios'
export default {
    name: 'RoomList',
    data: function() {
        return {
            lists: null,            
        }
    },
    components: {
        BaseSlide
    },
    mounted: async function() {
        let res_room_list = await axios.get(process.env.VUE_APP_HOST+'/get_room_list/:' + this.$route.params.id,{
                  headers: {'Authorization': `Bearer ${localStorage.getItem('jwt')}`}
        })
        this.lists = res_room_list.data
    },
    methods: {
        make_list() {
            this.$router.push({name: 'make_list', params: {id: this.$route.params.id}})
        }
    }
}
</script>

<style lang="css" scoped>
.container {
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    background-color: #97e6ff;
    justify-content: center;
}
.card {
    max-width: 600px;
    background-color: white;
}
.box {
    margin-top: 40px;
}
.header {
    padding-top: 100px;
}
.list {
    max-width: 600px;
    background-color: white;
}
.button {
    width: 80vw;
    height: 60px;
    max-width: 560px;
    margin-top: 60px;
}
</style>

<template lang="html">
<div class="container">
  <div class="header">
    <h1>出席簿</h1>
    <h3>{{this.$route.params.title}}</h3>
    <b-tabs content-class="mt-3">
      <b-tab title="出席" active>
        <b-table
          hover
          class="table"
          :fields="fields"
          :items="users"
          >
        </b-table>
      </b-tab>
      <b-tab title="欠席">
        <b-table
          hover
          class="table"
          :fields="fields"
          :items="absent_users"
          >
        </b-table>
      </b-tab>
    </b-tabs>
  </div>
  <BaseSlide/>
</div>
</template>
<script>
import BaseSlide from '@/components/BaseSlide.vue'
import axios from 'axios'
export default {
    name: 'MemberList',
    components: {
        BaseSlide
    },
    data: function() {
        return {
            users: [],
            absent_users: [],
            absent: [],
            list_id: this.$route.params.id,
            fields: [
                {
                    key: 'grade',
                    sortable: true
                },
                {
                    key: 'class',
                    sortable: true 
                },
                {
                    key: 'number',
                    sortable: true
                },
                {
                    key: 'name',
                    sortable: 'false'
                }
            ]
        }
    },
    mounted: async function() {
        let res = await axios.get(process.env.VUE_APP_HOST+'/get_member_list/:'+this.list_id, {
            headers: {'Authorization': `Bearer ${localStorage.getItem('jwt')}`}
        })
        this.users = res.data
        let res2 = await axios.get(process.env.VUE_APP_HOST+'/get_all_member_list/:'+this.list_id, {
            headers: {'Authorization': `Bearer ${localStorage.getItem('jwt')}`}
        })
        this.absent_users = res2.data
        
    }
}
</script>
<style scoped>
.container {
    min-height: 100vh;
    min-width: 100vw;
    background-color: #97e6ff;
    display: flex;
    justify-content: center;
    
}
.header {
    padding-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

h1 {
    font-size: 30px;
} 
.table{
    background-color: white;
    width:95vw;
    max-width: 850px;
}
</style>

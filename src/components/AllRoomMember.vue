<template>
    <b-table hover class="table" :fields="fields" :items="users">
    </b-table>
</template>

<script>
import axios from 'axios'
export default {
    name: 'AllRoomMember',
    data: function() {
        return {
            users: null,
            room_id: '',
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
        let res = await axios.get(process.env.VUE_APP_HOST + '/get_all_room_member/:' + this.$route.params.id, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt')}` }
        })
        this.users = res.data
        console.log(this.users)
    },
}
</script>

<style scoped>

</style>
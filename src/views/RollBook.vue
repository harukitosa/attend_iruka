<template>
  <div>
    <div class="header">
      <p>出席情報</p>
    </div>
    <div class="head"></div>
    <div>
      <vue-good-table :columns="columns" :rows="items"></vue-good-table>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'
export default {
    name: "RollBook",
    data: function() {
        var user = firebase.auth().currentUser;
        var now = new Date()
        return {
            items: [],
            ownerid: user.uid,
            year: now.getYear() + 1900,
            month: now.getMonth() + 1,
            columns: [{
                    label: "Name",
                    field: "name",
                    filterable: true
                },
                {
                    label: "出席",
                    field: "attend"
                },
                {
                    label: "欠席",
                    field: "absent"
                }
            ],
        };
    },
    mounted: async function() {
        let res = await axios.get(
            process.env.VUE_APP_HOST + "/get_month_data/:" + this.ownerid + "/:" + this.year + "/:" + this.month, {
                headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
            }
        );
        this.items = res.data;
        console.log(this.items);
    }
};
</script>

<style scoped>
.header {
  background-color: #1985c1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 24px;
  text-align: center;
  margin-top: 15px;
  color: white;
}

button {
  text-decoration: none;
  background-color: #1985c1;
  color: white;
  border: none;
  font-size: 24px;
}
</style>

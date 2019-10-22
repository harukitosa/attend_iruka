<template>
  <div>
    <div class="header">
      <p>出席情報</p>
    </div>
    <div class="head"></div>
    <div>
      <vue-good-table :columns="columns" :rows="items" @on-row-click="onRowClick" ontouchstart></vue-good-table>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import axios from "axios";
export default {
  name: "RollBook",
  data: function() {
    var user = firebase.auth().currentUser;
    return {
      items: [],
      ownerid: user.uid,
      columns: [
        {
          label: "出席番号",
          field: "number",
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
      ]
    };
  },
  methods: {
    onRowClick(params) {
      this.$router.push(
        "/detail_student/:" + params.row.studentID + "/:" + params.row.number
      );
    }
  },
  created: async function() {
    let res = await axios.get(
      process.env.VUE_APP_HOST + "/get_roll_data/:" + this.ownerid,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
      }
    );
    this.items = res.data;
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
  z-index: 2;
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

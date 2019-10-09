<template>
  <div>
    <div class="header">
      <p>出席情報</p>
    </div>
    <div class="main">
      <h2>出席番号{{this.number}}番</h2>
      <vue-good-table
        :columns="columns"
        :rows="items"
        @on-row-click="onRowClick"
        :row-style-class="rowStyleClassFn"
        ontouchstart
        class="table"
      ></vue-good-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DetailStudent",
  data: function() {
    return {
      id: this.$route.params.id,
      number: this.$route.params.number,
      items: [],
      columns: [
        {
          label: "年",
          field: "year",
          filterable: false
        },
        {
          label: "月",
          field: "month"
        },
        {
          label: "日",
          field: "day"
        },
        {
          label: "出欠",
          field: "status"
        }
      ]
    };
  },
  mounted: async function() {
    let res = await axios.get(
      process.env.VUE_APP_HOST + "/get_one_student/:" + this.id,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
      }
    );
    this.items = res.data;
  },
  methods: {
    rowStyleClassFn(row) {
      return row.status == "attend" ? "white" : "yellow";
    }
  }
};
</script>
.white {
    background-color:white;
}

.yellow {
    background-color: yellow;
}
<style lang="css" scoped>
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

.main {
    padding-top: 10vh;
}

.table {
    margin-top: 50px;
}
</style>
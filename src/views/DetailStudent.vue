<template>
  <div>
    <div class="header">
      <p>出席情報</p>
    </div>

    <div v-if="this.show" class="card">
      <div v-if="!this.show_2">
        <p>この日付の出席情報を変更しますか?</p>
        <p>{{this.info.year}}年{{this.info.month}}月{{this.info.day}}日</p>
        <p>現在:{{this.info.status}}</p>
        <p>変更後:{{this.reverse}}</p>
        <div class="group">
          <button @click="send" class="btn-blue">変更</button>
          <button @click="change
        " class="btn-yellow">back</button>
        </div>
      </div>
      <div v-else>
        <p>変更しました</p>
        <div class="group">
          <button @click="reload" class="btn-blue">戻る</button>
        </div>
      </div>
    </div>

    <div class="main">
      <h2>出席番号{{this.number}}番</h2>
      <vue-good-table
        :columns="columns"
        :rows="items"
        :row-style-class="rowStyleClassFn"
        @on-row-click="onRowClick"
      />
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
      info: [],
      revers: "",
      show: false,
      show_2: false,
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
    async reload() {
      let res = await axios.get(
        process.env.VUE_APP_HOST + "/get_one_student/:" + this.id,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
        }
      );
      this.items = res.data;
      this.show_2 = !this.show_2;
      this.show = !this.show;
    },
    rowStyleClassFn(row) {
      return row.status == "attend" ? "white" : "yellow";
    },
    onRowClick(params) {
      this.show = true;
      this.info = params.row;
      if (this.info.status === "attend") {
        this.reverse = "absent";
      } else {
        this.reverse = "attend";
      }
    },
    change() {
      this.show = !this.show;
    },
    send() {
      axios.post(
        process.env.VUE_APP_HOST + "/update",
        {
          status: this.reverse,
          id: this.info.id
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json"
          }
        }
      );
      this.show_2 = !this.show_2;
    }
  }
};
</script>

<style lang="css" scoped>
.header {
  background-color: #1985c1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  z-index: 2;
  color: white;
}

.white {
  background-color: white;
}

.yellow {
  background-color: yellow;
}

p {
  font-size: 24px;
  text-align: center;
  margin-top: 15px;
}

.main {
  padding-top: 10vh;
}

.table {
  margin-top: 50px;
}

.card {
  z-index: 2;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
  width: 90vw;
  padding: 20px;
  border-radius: 40px;
}

button {
  width: 30vw;
  height: 40px;
  margin: auto;
}

.btn-yellow {
  background-color: yellow;
}

.btn-blue {
  background-color: #1985c1;
  color: white;
}

.group {
  display: flex;
}
</style>
<template>
  <div class="header">
    <button @click="back">◁</button>
    <p>{{this.year}}/{{this.month}}/{{this.day}}</p>
    <button v-if="this.count != 0" @click="go">▷</button>
    <button v-else>☒</button>
  </div>
</template>

<script>
export default {
  name: "RollCallHeader.vue",
  data() {
    return {
      year: this.$route.params.year,
      month: this.$route.params.month,
      day: this.$route.params.day,
      count: this.$route.params.count
    };
  },
  methods: {
    back() {
      var data = new Date();
      this.count = this.count - 1;
      data.setDate(data.getDate() + this.count);
      this.year = data.getYear() + 1900;
      this.month = data.getMonth() + 1;
      this.day = data.getDate();
      this.$router.push(
        "/roll_call/" +
          this.year +
          "/" +
          this.month +
          "/" +
          this.day +
          "/" +
          this.count
      );
    },
    go() {
      var data = new Date();
      if (this.count < 0) {
        this.count = this.count + 1;
      }
      data.setDate(data.getDate() + this.count);
      this.year = data.getYear() + 1900;
      this.month = data.getMonth() + 1;
      this.day = data.getDate();
      this.$router.push(
        "/roll_call/" +
          this.year +
          "/" +
          this.month +
          "/" +
          this.day +
          "/" +
          this.count
      );
    }
  }
};
</script>

<style scoped>
.header {
  background-color: #1985c1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
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
<template>
  <div class="header">
    <p>{{this.year}}/{{this.month}}/{{this.day}}</p>
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
    };
  },
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
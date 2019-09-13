<template lang="html">
<Slide class="sli">
  <router-link id="home" to="/">
    <span>Home</span>
  </router-link>
  <router-link to="/edit_user">
    <span>Setting</span>
  </router-link>
  <router-link to="/make_room">
    <span>CreateRoom</span>
  </router-link>
  <router-link to="/about">
    <span>about</span>
  </router-link>
</Slide>
</template>

<script>
import { Slide } from 'vue-burger-menu'
export default {
  name: 'BaseSlide',
  components: {
    Slide
  }
}
</script>

<style lang="css" scoped>
  .sli {
  left:0;
  position:fixed;
  top:0;
  width:100%;
  z-index:24;
  }
</style>

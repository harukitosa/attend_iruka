<template lang="html">
  <Slide>
    <router-link id="home" to="/">
      <span>Home</span>
    </router-link>
    <router-link id="signin" to="/signin">
      <span>Signin</span>
    </router-link>
    <router-link to="/attendance">
      <span>Attend</span>
    </router-link>
    <router-link to="/setting">
      <span>Setting</span>
    </router-link>
    <router-link to="/make_room">
      <span>CreateRoom</span>
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
</style>

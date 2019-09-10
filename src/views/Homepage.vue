<template>
<div class="container">
  <div class="title">
    <h1 class="name">iruka!</h1>
    <p>デジタル出席簿サイト</p>
  </div>
</div>
</template>

<script>
  export default {
      name: 'Homepage',
  }
</script>

<style scoped>
.container {
    min-height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 100vw;
}
.title {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    height: 25vh;
    background-color: #97e6ff;
    width: 100vw;
    padding-top: 40px;
    font-size: 1.5rem;
}

.name {
    font-size: 4.5rem;
}


</style>
    

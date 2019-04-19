<template>
  <div class="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600,800');
  @import '../node_modules/bootstrap/scss/bootstrap';
  @import '../node_modules/bootstrap-vue/src/index.scss';
  * {
    box-sizing: border-box;
  }

  body {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 30px;
    font-family: 'Montserrat', sans-serif;
    background-image: url("assets/background.jpg");
  }
</style>
<script>
import Navbar from './commons/navbar/Navbar.vue';

export default {
  components: { Navbar },
};
</script>

<template>
  <div class="home">
    <AddGame/>
    <Footer/>
  </div>
</template>

<script>
import AddGame from '../components/AddGame.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'home',
  components: {
    Footer,
    AddGame,
  },
};
</script>

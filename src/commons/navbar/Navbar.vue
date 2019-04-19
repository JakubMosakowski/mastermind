<template>
  <div id="navbarWrapper">
    <router-link :to="{ name: 'home' }">Mastermind</router-link>
    <router-link :to="{ name: 'game' }">Current game</router-link>
    <router-link :to="{ name: 'search' }">Search game</router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>

</style>

<template>
  <div id="navbarWrapper">
    <router-link :to="{ name: 'home' }">MASTERMIND</router-link>
    <router-link :to="{ name: 'game' }">CURRENT GAME</router-link>
    <router-link :to="{ name: 'search' }">SEARCH GAME</router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped lang="scss">
  @import "../../assets/colors";

  #navbarWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: $primary-color;
    width: 100%;
  }

  a {
    color: white;
    padding: 15px;
  }

  a:hover {
    color: $secondary-text-color;
  }

  @media screen and (max-width: 480px) {
    a {
      padding: 10px;
      font-size: 0.7em;

    }
    #navbarWrapper {
      justify-content: space-around;
    }
  }

</style>

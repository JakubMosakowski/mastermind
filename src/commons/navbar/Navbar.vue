<template>
  <ul id="navbarWrapper">
    <li>
      <router-link :to="{ name: 'home' }">MASTERMIND</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'game' }">CURRENT GAME</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'search' }">SEARCH GAME</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped lang="scss">

  #navbarWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: $primary-color
  }

  li {
    padding: 15px;
  }

  ul {
    list-style-type: none;
  }

  a{
    color: white;
  }

  a:hover{
    color: $secondary-text-color;
  }

</style>

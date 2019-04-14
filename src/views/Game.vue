<template>
  <div class="game">
    <p>This is game</p>
    <router-link :to="{ name: 'home' }">home</router-link>
  </div>
</template>

<script>
export default {
  name: 'game',
};
</script>

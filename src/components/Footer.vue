<template>
  <div class="footer">
    <a href="https://www.freepik.com/free-photos-vectors/background">Background
      vector created by
      rawpixel.com - www.freepik.com</a>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
  .footer {
    position: absolute;
    display: flex;
    bottom: 0;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 5px;;
    background: #C0C7EA;
    margin-top: 40px;
  }

  a {
    color: black;
  }
</style>

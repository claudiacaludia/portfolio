<template>
  <div v-editable="blok" class=" bg-[#121212] w-12/12 hallo" >
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
<style>
div {
  font-family: 'Quicksand', sans-serif;
}
html, body {
  overflow-x: hidden;
  background-color: #121212;
}

body{
  cursor: url('../assets/img/pfeil.png'), auto;
}
a, button{
  cursor: url('../assets/img/pfeil-click.png'), auto;
}

</style>
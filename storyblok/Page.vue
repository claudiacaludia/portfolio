<template>
  <div v-editable="blok" class="bg-[#120A03]">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gloock&display=swap');

div {
  font-family: 'Quicksand', sans-serif;
  /*font-family: "Gloock", serif;
  font-weight: 400;
  font-style: normal;*/
}
</style>
<template>
  <div v-editable="blok" class="bg-[#080502]">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
<style scoped>
div {
  font-family: 'Quicksand', sans-serif;
}
</style>
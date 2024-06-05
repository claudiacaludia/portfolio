<template>
  <div
      v-editable="blok"
      class="py-32 text-6xl text-[#AF8F6F] font-bold text-center"
  >
    {{ blok.headline }}
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');

div {
  font-family: 'Quicksand', sans-serif;
}
</style>

<template>
  <div
      v-editable="blok"
      class="w-full bg-[#120A03] text-center "
      id="gallery"
  >
    <div v-if="blok.images.length">
      <img v-for="image in blok.images"
           :key="image.id"
           :src="image.filename"
           class="inline-block mt-4 text-white hover:bg-blue-600 w-[200px]">
    </div>

  </div>

</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>


</style>


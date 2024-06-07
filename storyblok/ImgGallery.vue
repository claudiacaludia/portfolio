<template>
  <div
      v-editable="blok"
      class="py-10 gallery w-full text-center "
  >
    <h2 class="text-xl text-[#FBF7F3] pt-2">Images</h2>
    <div v-if="blok.images.length">
      <img v-for="image in blok.images"
           :key="image.id"
           :src="image.filename"
           class="inline-block m-1 text-white w-[250px] h-[250px] object-cover object-center">
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


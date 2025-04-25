<template>
  <div
      v-editable="blok"
      class="py-10 gallery w-full text-center">

    <h2 class="text-4xl text-[#080502] py-2 text-white">Captured Moments</h2>
    <div v-if="blok.images.length">
      <nuxtImg v-for="image in blok.images"
           :key="image.id"
           :src="image.filename"
           :alt="image.alt"
           :data-aos="fade-up"
               format="webp"
               quality="50"
           class="inline-block m-1 text-white w-[300px] h-[300px] object-cover object-center"/>
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
.gallery {
  background-color: var(--primary-color-pink);
}

</style>


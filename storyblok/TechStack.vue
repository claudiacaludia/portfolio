<template>
  <div
      v-editable="blok"
      class="w-full bg-[#080502] px-8 md:px-16 py-12 grid md:grid-cols-3 md:grid-rows-1 md:gap-5 justify-center"
      id="techstack"
  >
    <h2 class="text-4xl text-[#FBF7F3] z-20 font-bold uppercase md:col-span-1 col-span-1 row-span-1 md:row-auto order-first text-center md:text-right mx-auto md:mx-0">
      {{ blok.title }}
    </h2>
    <img
        :src="blok.image.filename"
        alt="Background Image"
        class="md:max-w-[100%] max-w-[250px] col-span-1 md:col-span-1 row-span-1 order-1 mx-auto"
    />
    <div class="text-[#FBF7F3] text-base z-20 max-w-[300px] md:max-w-[300px] col-span-1 md:col-span-1 row-span-1 md:row-auto order-3 md:content-end text-center md:text-left mx-auto md:mx-0">
      <div v-html="textdesc"></div>
    </div>
  </div>
</template>



<script setup>
import { defineProps, computed } from 'vue';
import { renderRichText } from '@storyblok/vue';

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

const textdesc = computed(() => {
  return renderRichText(props.blok.text);
});
</script>

<style scoped>

</style>

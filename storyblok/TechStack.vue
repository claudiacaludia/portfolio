<template>
  <div
      v-editable="blok" class="w-full bg-[#080502] py-12 px-8 md:px-16" data-aos="fade-up">
    <div class="grid md:grid-cols-3 md:grid-rows-1 md:gap-5 justify-center">
      <div id="toolsTech" class="absolute -top-20"></div>
      <h2 class="text-4xl text-[#FBF7F3] max-w-[300px] z-20 font-bold uppercase col-span-1 row-span-1 md:row-auto text-center md:text-right md:justify-self-end">
        {{ blok.title }}
      </h2>
      <img :src="blok.image.filename" alt="Background Image" class="md:max-w-[100%] max-w-[250px] col-span-1 row-span-1 justify-self-center"/>
      <div class="text-[#FBF7F3] text-base z-20 max-w-[300px] col-span-1 row-span-1 md:row-auto md:content-end text-center md:text-left md:mx-0">
        <div v-html="textdesc"></div>
      </div>
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

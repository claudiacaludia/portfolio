<template>
  <div v-editable="blok" class="my-12 flex flex-col justify-center items-center "
       data-aos="fade-up"
       data-aos-anchor-placement="top-bottom">
    <img :src="blok.project_image.filename" alt="Project Image" class="w-[70vw] md:w-[45vw] md:hover:scale-110 pb-4" />
    <h3 class="text-xl text-[#AF8C75] mt-8 z-20 font-bold uppercase">
      {{ blok.project_title }}
    </h3>
    <div v-html="projectDescription" class="text-[#080502] text-sm "></div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { renderRichText } from '@storyblok/vue';

const props = defineProps({
  blok: {
    type: Object,
    required: true
  }
});

const projectDescription = computed(() => {
    return renderRichText(props.blok.project_text);
});
</script>

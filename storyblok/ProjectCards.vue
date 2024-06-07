<template>
  <div v-editable="blok" class="my-12 flex flex-col  justify-center items-center ">
    <img :src="blok.project_image.filename" alt="Project Image" class="w-[70vw] md:w-[40vw] hover:scale-110 pb-4" />
    <h3 class="text-xl text-[#AF8C75] mt-8 z-20 font-bold uppercase">
      {{ blok.project_title }}
    </h3>
    <div v-html="projectDescription" class="text-[#FBF7F3] text-sm"></div>
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
  try {
    return renderRichText(props.blok.project_text);
  } catch (error) {
    console.error("Error rendering rich text:", error);
    return "Failed to load content.";
  }
});
</script>

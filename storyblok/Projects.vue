<template>
  <div v-editable="blok"
       class="py-1 text-center bg-[#474A4C] pb-2 "
       id="projects"
  >

    <h2 class="text-4xl text-[#FBF7F3] mt-12 justify-self-center align-self-center z-20 font-bold uppercase">Projects</h2>
    <div v-html="description" class="text-[#FBF7F3]"></div>
    <div class="flex flex-col sm:flex-row sm:flex-wrap justify-center">
      <div class="m-0 md:m-1">
        <StoryblokComponent :blok="blok.project_cards[0]" />
      </div >
      <div class="m-0 md:m-1">
        <StoryblokComponent :blok="blok.project_cards[1]" />
      </div>
<!--      <div class="m-1">
        <StoryblokComponent :blok="blok.project_cards[2]" />
      </div>-->
    </div>

  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { renderRichText } from '@storyblok/vue';

const props = defineProps({
  blok: {
    type: Object,
    required: true
  }
});

const description = computed(() => {
  try {
    return renderRichText(props.blok.description);
  } catch (error) {
    console.error("Error rendering rich text:", error);
    return "Failed to load content.";
  }
});
</script>

<style>
h1, h2{
  font-family: Vidaloka;
  text-shadow: 2px 2px 4px rgba(63, 36, 36, 0.48);
}

</style>


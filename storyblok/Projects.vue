<template>
  <div v-editable="blok"
       class="py-1 text-center bg-[#D2CECA] pb-2 "
       id="projects"
  >

    <h2 class="text-4xl text-[#080502] mt-12 justify-self-center align-self-center z-20 font-bold uppercase">Projects</h2>
    <div v-html="description" class="text-[#080502]"></div>
    <div class="flex flex-col sm:flex-row sm:flex-wrap justify-center">
      <div class="m-0 md:m-1">
        <StoryblokComponent :blok="blok.project_cards[0]" />
      </div >
      <div class="m-0 md:m-1">
        <StoryblokComponent :blok="blok.project_cards[1]" />
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
    required: true
  }
});

const description = computed(() => {
    return renderRichText(props.blok.description);

});
</script>

<style>
h1, h2{
  font-family: Vidaloka;
}
body{
  scroll-behavior: smooth;
}

</style>


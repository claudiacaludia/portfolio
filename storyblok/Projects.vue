<template>
  <div v-editable="blok"
       class="text-center text-white"
       id="projects"
  >

    <div v-html="description" class="text-[#080502] proj"></div>
      <div class="bg-[#0B3948] project-card" v-for="(card, index) in blok.project_cards" :key="index">
        <StoryblokComponent :blok="card" :child="index % 2 === 0 ? 'even' : 'odd'" />
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
  .project-card:nth-child(2)  {
    background-color: var(--primary-color-blue);
  }

  .project-card:nth-child(3)  {
    background-color:  var(--primary-color-pink);
  }

  .project-card:nth-child(4)  {
    background-color: var(--primary-color-purple);
  }

  .project-card:nth-child(5)  {
    background-color: var(--primary-color-blue);
  }


</style>


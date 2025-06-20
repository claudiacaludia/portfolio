<template>
  <div v-editable="blok" class="py-14 items-center md:flex lg:w-9/12 md:w-10/12 w-11/12 m-auto"
       :class="child === 'even' ? 'flex-row' : 'flex-row-reverse'"
       data-aos="fade-up"
       data-aos-anchor-placement="top-bottom">
    <a :href="blok.detailurl?.url|| blok.detailurl?.cached_url" class="lg:w-1/2 md:w-1/2 w-100vw flex justify-center">
      <nuxtImg :src="blok.project_image.filename" :alt="blok.project_image.alt" class="md:hover:scale-110 md:pb-4"
               format="webp" quality="50" size="200px" :aria-label="'Read more about the project ' + blok.project_title"/>
    </a>
    <div class="project-desc lg:w-1/2 md:w-1/2 w-auto lg:px-12 md:px-12 px-2 self-center">
      <h2 class="md:text-4xl text-3xl pt-6 md:pt-0 text-white font-bold uppercase transition delay-150 duration-300 ease-in-out">
        {{ blok.project_title }}
      </h2>
      <div v-html="projectDescription" class="text-white text-sm md:mb-8 md:mt-2 mt-4 mb-8"></div>
      <div class="m-4">
        <a
            :href="blok.detailurl?.url|| blok.detailurl?.cached_url"
            class="primary-btn text-black mt-4 bg-white w-[200px] rounded-3xl uppercase font-semibold mb-12 py-3 px-5"
            :aria-label="'Read more about the project ' + blok.project_title"
        >Read more</a>
      </div>

    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue';
import { renderRichText } from '@storyblok/vue';

const props = defineProps({
  blok: {
    type: Object,
    required: true
  },
  child: String
});


const projectDescription = computed(() => {
    return renderRichText(props.blok.project_text);
});
</script>

<style scoped>
  img {
    transition: scale 0.3s ease-in-out;
  }
  .project-desc h3{
    font-family: "Vidaloka", serif;
    font-weight: 400;
  }



</style>
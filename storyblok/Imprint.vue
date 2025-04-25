<template>
  <div
      v-editable="blok"
      class="w-10/12 m-auto bg-[#121212] px-8 md:px-16 py-12 flex flex-col items-center text-left min-h-[100vh] text-white"
  >
    <h1 class="text-4xl text-[#FBF7F3] mb-3">
      {{ blok.title }}
    </h1>
    <div class="text-[#FBF7F3] text-base z-20 pb-6 ">
      <div v-html="textdesc"></div>
      <div> Icons made by <a href="https://www.flaticon.com/authors/indygo" title="Indygo"> Indygo </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
      <div> Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
      <div> Icons made by <a href="https://www.flaticon.com/authors/indygo" title="Indygo"> Indygo </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>

    </div>
    <a
        :href="blok.back_home.cached_url"
        class="primary-btn"
    >back</a>
  </div>
</template>
x


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
h1{
  font-family: Vidaloka;
  text-shadow: 2px 2px 4px rgba(63, 36, 36, 0.48);
}

</style>

<template>
  <div
      v-editable="blok"
      class="w-full px-8 ld:py-16 md:px-16 py-12 mt-4 flex flex-col items-center text-center"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      id="contact"
  >
    <h2 class="text-4xl text-[#FBF7F3] mt-8">
      {{ blok.title }}
    </h2>
<!--    <div class="text-[#FBF7F3] text-base z-20 mt-3 ">
      <div v-html="textdesc"></div>
    </div>-->
    <a
        v-if="blok.mail.email"
        :href="'mailto:' + blok.mail.email"
        class="primary-btn"
    >Contact me</a>
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

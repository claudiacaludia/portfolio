<template>
  <div
      v-editable="blok"
      class="w-full bg-[#D2CECA] px-8 md:px-16 py-12 mt-4 flex flex-col items-center text-center"
      id="contact"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
  >
    <h2 class="text-4xl text-[#080502] mt-8">
      {{ blok.title }}
    </h2>
    <div class="text-[#080502] text-base z-20 ">
      <div v-html="textdesc"></div>
    </div>
    <a
        v-if="blok.mail.email"
        :href="'mailto:' + blok.mail.email"
        class="text-[#FBF7F3] mt-4 bg-[#AF8C75] hover:bg-[#8E98A2] w-[200px] rounded-md uppercase font-semibold mb-12 "
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

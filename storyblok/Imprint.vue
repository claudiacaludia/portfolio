<template>
  <div
      v-editable="blok"
      class="w-full bg-[#080502] px-8 md:px-16 py-12 flex flex-col items-center text-left min-h-[100vh]"
  >
    <h1 class="text-4xl text-[#FBF7F3]">
      {{ blok.title }}
    </h1>
    <div class="text-[#FBF7F3] text-base z-20 pb-6 ">
      <div v-html="textdesc"></div>
    </div>
    <a
        :href="blok.back_home.cached_url"
        class="text-[#FBF7F3] bg-[#AF8C75] hover:bg-[#8E98A2] w-[200px] rounded-md uppercase font-semibold text-center "
    >back</a>
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
h1{
  font-family: Vidaloka;
  text-shadow: 2px 2px 4px rgba(63, 36, 36, 0.48);
}
</style>

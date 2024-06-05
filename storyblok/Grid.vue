<template>
  <div v-editable="blok" class="relative container my-12">
    <div class="relative flex items-center justify-center">
      <div class="w-full md:w-1/2" >
        <StoryblokComponent :blok="blok.columns[0]" />
      </div>
      <!-- Text -->
      <div class=" absolute top-1/2 transform -translate-y-1/2 right-0 bg-[#FBF7F3] p-8 shadow-lg max-w-[350px]">
<!--        <div class="absolute top-1/2 transform -translate-y-1/2 right-0 bg-white p-8 shadow-lg">-->
        <StoryblokComponent :blok="blok.columns[1]" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>


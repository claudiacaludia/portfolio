<template>
  <div
      v-editable="blok"
      className="w-full bg-[#AF8C75] text-left"
      id="home"
  >

    <img :src="blok.logo_image.filename" alt="logo" class=" py-5 w-20 mx-auto"/>

    <div class="flex justify-around bg-[#080502] text-[#FBF7F3] py-1">
      <div class="flex">
        <a class="pr-10 hover:uppercase" href="#projects">Projects</a>
        <a class="pr-10 hover:uppercase" href="#techstack">Tech Stack</a>
        <a class="hover:uppercase"href="#contact">Contact</a>
      </div>


<!--      <div v-if="blok.social_media.length" class="div3">
        <img v-for="link in blok.social_media" :key="link.id" :src="link.filename" class="inline-block pr-1 text-white w-[30px]">
      </div>-->
    </div>


  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style scoped>



</style>
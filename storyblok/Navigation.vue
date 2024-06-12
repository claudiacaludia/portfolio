<template>
  <div
      v-editable="blok"
      className="w-full bg-[#AF8C75] text-left"
      id="home"
  >

    <img :src="blok.logo_image.filename" alt="Logo Claudia Pemmer" class=" py-5 w-20 mx-auto"/>

    <div class="flex justify-around bg-[#080502] text-[#FBF7F3] py-1">
      <div class="flex">
        <a class="pr-10 md:hover:uppercase" href="https://www.claudiapemmer.at/home#projects">Projects</a>
        <a class="pr-10 md:hover:uppercase" href="https://www.claudiapemmer.at/home#toolsTech">Tools & Tech</a>
        <a class="md:hover:uppercase"href="https://www.claudiapemmer.at/home#contact">Contact</a>
      </div>
    </div>


  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style scoped>



</style>
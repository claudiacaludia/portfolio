<template>
  <div
      v-editable="blok"
      className="w-full p-4 pl-20 pr-20 bg-[#AF8C75] text-left items-center justify-center parent "
      id="home"
  >

<!--    >-->
    <div class="flex div1">
      <a class="pr-10" href="#projects">Projects</a>
      <a class="pr-10" href="#gallery">Gallery</a>
      <a href="#contact">Contact</a>
    </div>
    <img :src="blok.logo_image.filename" alt="logo" class="w-12 mx-auto div2"/>

    <div v-if="blok.social_media.length" class="div3">
      <img v-for="link in blok.social_media" :key="link.id" :src="link.filename" class="inline-block pr-1 text-white w-[30px]">
    </div>

  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 {
  grid-area: 1 / 3 / 2 / 4;
  justify-self: end
}


</style>
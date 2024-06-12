<template>
  <div
      v-editable="blok"
      className="w-full bg-[#AF8C75] text-center py-6"
  >

    <img :src="blok.logo.filename" alt="logo" class="w-20 mx-auto"/>
    <div class="flex justify-center">
      <a href="https://www.instagram.com/claudia.pemmer/" target="_blank" class="m-2 md:hover:scale-110">
        <img src="../assets/img/instagram.png" height="30" width="30" class="m-2" alt="Instagram Logo" />
      </a>
      <a href="https://www.linkedin.com/in/claudia-pemmer-871ab8311/" target="_blank" class="m-2 md:hover:scale-110">
        <img src="../assets/img/linkedin.png" height="30" width="30" class="m-2" alt="LinkedIn Logo"/>
      </a>
      <a href="https://github.com/claudiacaludia" target="_blank" class="m-2 md:hover:scale-110">
      <img src="../assets/img/github.png" height="30" width="30" class="m-2" alt="Github Logo"/>
    </a>
    </div>
    <a
        :href="blok.link.cached_url"
        class="text-[#080502] bg-[#AF8C75 hover:font-semibold w-[200px] text-l "
    >Imprint & Data Protection</a>

    </div>

</template>

<script setup>
defineProps({ blok: Object });
</script>

<style scoped>



</style>
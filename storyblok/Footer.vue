<template>
  <div
      v-editable="blok"
      className="w-full bg-[#AF8C75] text-left"
      id="home"
  >

    <img :src="blok.logo.filename" alt="logo" class=" py-5 w-20 mx-auto"/>
    <div class="flex justify-center p-2">
      <a href="https://www.instagram.com/claudia.pemmer/" target="_blank" class="m-2">
        <img src="../assets/img/instagram.png" height="30" width="30" class="m-2" alt="Instagram Logo"/>
      </a>
      <a href="https://www.instagram.com" target="_blank" class="m-2">
        <img src="../assets/img/linkedin.png" height="30" width="30" class="m-2" alt="LinkedIn Logo"/>
      </a>
      <a href="https://github.com/claudiacaludia" target="_blank" class="m-2">
      <img src="../assets/img/github.png" height="30" width="30" class="m-2" alt="Github Logo"/>
    </a>
    </div>
    </div>

</template>

<script setup>
defineProps({ blok: Object });
</script>

<style scoped>



</style>
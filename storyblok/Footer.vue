<template>
  <div
      v-editable="blok"
      className="w-full bg-[#7B385A] text-center py-6 lg:px-16 lg:flex justify-between"
  >
    <div class="lg:flex">
      <p class="logo py-2 px-0.5 md:pr-4 text-white">Claudia <br>Pemmer</p>
      <div class="flex justify-center">
        <a href="https://www.instagram.com/claudia.pemmer/" target="_blank" class="m-2 md:hover:scale-110">
          <img src="../assets/img/instagram.png" height="30" width="30" class="m-2" alt="Instagram Logo" />
        </a>
        <a href="https://github.com/claudiacaludia" target="_blank" class="m-2 md:hover:scale-110">
          <img src="../assets/img/github.png" height="30" width="30" class="m-2" alt="Github Logo"/>
        </a>
        <a href="https://www.linkedin.com/in/claudia-pemmer-871ab8311/" target="_blank" class="m-2 md:hover:scale-110">
          <img src="../assets/img/linkedin.png" height="30" width="30" class="m-2" alt="LinkedIn Logo"/>
        </a>
      </div>
    </div>
    <div class="lg:flex self-center">
      <p class="text-white italic">Created by Claudia Pemmer © 2025</p>
      <p class="lg:px-4 lg:block hidden text-white">|</p>
      <a
          :href="blok.link.cached_url"
          class="text-white no-underline bg-[#AF8C75 hover:underline w-[200px] text-l"
      >Imprint & Data Protection</a>
    </div>
  </div>

</template>

<script setup>
defineProps({ blok: Object });
</script>

<style scoped>
  .logo {
    font-family: "Vidaloka", serif;
    line-height: 0.8;
    font-size: 26px;
    text-align: center;
  }


</style>
<template>
  <div
      v-editable="blok"
      className="w-full text-center"
      id="home"
  >
    <div class="flex text-white lg:w-9/12 md:w-10/12 w-11/12 justify-between m-auto">
      <a class="logo py-5 px-0.5 lg:text-3xl md:text-3xl sm:text-3xl text-xl" href="https://www.claudiapemmer.at/home">Claudia <br>Pemmer</a>
      <div class="navBar flex justify-around transition-all py-5">
        <div class="nav flex self-center lg:gap-24 md:gap-24 sm:gap-20 gap-3.5">
          <a class="text-align hover:bg-[#0D5D77] rounded-full text-base px-1 lg:px-3 md:px-3 sm:px-2 md:text-lg lg:text-lg" href="https://www.claudiapemmer.at/home#projects">Projects</a>
          <a class="text-align hover:bg-[#313A4C] rounded-full text-base px-1 lg:px-3 md:px-3 sm:px-2 md:text-lg lg:text-lg" href="https://www.claudiapemmer.at/home#toolsTech">Skills</a>
          <a class=" text-align hover:bg-[#8D3562] rounded-full text-base px-1 lg:px-3 md:px-3 sm:px-2 md:text-lg lg:text-lg" href="https://www.claudiapemmer.at/home#contact">Contact</a>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style scoped>
#home {
  border-bottom: solid 4px;
  border-image: linear-gradient(45deg, #8D3562, #0D5D77) 1;
}
.logo {
  font-family: "Vidaloka", serif;
  line-height: 0.8;
  text-align: center;
  padding-left: 20px;
  @media (max-width: 340px) {
    padding-left: 10px;
  }
  @media (max-width: 295px) {
    padding-left: 0.125rem;
  }
}
.navBar {
  a {
    transition: all 0.5s ease;
  }
}

@media (max-width: 320px) {
  .nav {
    gap: 0.2rem !important;
  }
}
</style>
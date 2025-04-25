<template>
  <div v-editable="blok" class="text-white lg:w-9/12 w-11/12 m-auto my-10 detailSec">
    <h1 class="welcomeTitle md:text-6xl ms:text-5xl text-4xl text-white font-bold uppercase text-focus-in tracking-wide text-center md:mb-6 mb-2">
      {{ blok.heading }}</h1>

    <div class="pt-6 text-base">
      <div v-html="projectDescription"
           class="welcomeDesc text-white text-base lg:text-lg align-self-end text-justify md:pb-5 md:pt-0 md:py-5 pt-2 pb-5">
      </div>
      <h2 class="sm:text-4xl text-3xl">Problems</h2>
      <p>{{ blok.problems }}</p>
      <br>
      <h2 class="sm:text-4xl text-3xl">Solution</h2>
      <p class="mb-10">{{ blok.solutions }}</p>

      <div class="bg-[#313a4c] h-fit md:flex flex-wrap rounded-3xl mb-10">
        <div
            v-for="(image, index) in blok.images"
            :key="index"
            class="p-6 md:w-1/4 w-auto cursor-pointer"
            @click="openModal(image)"
        >
          <nuxtImg
              :src="image.filename"
              :alt="image.alt || 'Image ' + index"
              class="h-auto rounded-xl md:hover:scale-110"
              width="40%"
              format="webp"
              loading="lazy"
              quality="50"
          />
        </div>
      </div>

      <!-- Lightbox Modal -->
      <div v-if="showModal"
           class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
           @click.self="closeModal">
        <div class="relative">
          <img :src="selectedImage.filename"
               :alt="selectedImage.alt || 'Large Image'"
               class="max-w-[90vw] max-h-[90vh] rounded-xl" />
          <button @click="closeModal"
                  class="btnClose absolute top-3 right-5 text-white bg-black rounded text-3xl font-bold">
            &times;
          </button>
        </div>
      </div>

      <a :href="blok.back_home.cached_url" class="primary-btn">back</a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { renderRichText } from '@storyblok/vue';

const props = defineProps({
  blok: {
    type: Object,
    required: true
  },
  child: String
});

const projectDescription = computed(() => {
  return renderRichText(props.blok.description);
});

const showModal = ref(false);
const selectedImage = ref(null);

const openModal = (image) => {
  selectedImage.value = image;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedImage.value = null;
};
</script>

<style scoped>
img {
  transition: transform 0.3s ease-in-out;
}
.welcomeTitle {
  font-family: "Vidaloka", serif;
  font-weight: 400;
  font-style: normal;
  color: transparent;
  text-shadow: 2px 2px 4px rgba(63, 36, 36, 0.48);
  background: linear-gradient(to left, #19AFE1, #C0598E, #c0387e, #19AFE1);
  background-size: 1000px 100%;
  animation: bg 25s linear infinite;
  background-clip: text;
  -webkit-background-clip: text;
}
@keyframes bg {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 10000px;
  }
}
.detailSec {
  min-height: 80vh;
}
h2 {
  font-family: "Vidaloka", serif;
}
button {
  background: transparent;
  border: none;
  cursor: pointer;
}

.btnClose {
  background-color: #ffffffbf;
  border-radius: 100px;
  width: 40px;
  height: 40px;
  color: black;
}

</style>

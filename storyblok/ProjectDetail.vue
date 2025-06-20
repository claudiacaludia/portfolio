<template>
  <div v-editable="blok" class="text-white w-11/12 lg:w-9/12 m-auto my-10 detailSec">

    <!-- HEADLINE -->
    <h1 class="welcomeTitle md:text-6xl text-4xl font-bold uppercase tracking-wide text-center mt-16 mb-12">
      {{ blok.heading }}
    </h1>

    <!-- INTRO / SLIDER SECTION -->
    <div class="grid md:grid-cols-2 gap-8 items-center mb-12">
      <!-- Short Description -->
      <div>
        <h2 class="text-2xl mb-2 fontVidaloka">About the project</h2>
        <div v-html="projectDescription" class="md:text-base text-sm leading-relaxed mb-4"></div>
        <p class="text-sm opacity-80">{{ blok.short_intro }}</p>
      </div>

      <!-- Slider Small -->
      <div class="rounded-xl overflow-hidden shadow-lg">
        <div class="carousel w-full">
          <div
              v-for="(image, index) in blok.images"
              :key="'item' + index"
              :id="'item' + (index + 1)"
              class="carousel-item w-full"
          >
            <div class="mockup-window bg-[#181e24] border border-base-300">
              <img
                  :src="image.filename"
                  :alt="image.alt || 'Image ' + index"
                  class="w-full"
                  loading="lazy"
              />
            </div>
          </div>
        </div>
        <div class="flex w-full justify-center gap-2 py-2">
          <a
              v-for="(image, index) in blok.images"
              :key="'nav' + index"
              :href="'#item' + (index + 1)"
              class="btn btn-xs"
          >
            {{ index + 1 }}
          </a>
        </div>
      </div>
    </div>

    <!-- MAIN CONTENT SPLIT -->
    <div class="flex flex-col md:grid md:grid-cols-2 gap-10 mb-12 items-center">

      <!-- CTA SECTION -->
      <div class="order-2 md:order-1 md:col-start-1 md:col-end-2 w-full md:w-auto">
        <!-- Tech Stack -->
        <div class="bg-gradient-to-br bg-[#181e24] rounded-xl p-6 shadow-xl mb-8">
          <h3 class="text-2xl font-semibold mb-6 fontVidaloka text-white text-center md:text-left">Tech Stack</h3>
          <div class="flex flex-wrap gap-3 justify-center md:justify-start">
            <div
                class=" bg-[#313a4c] text-white px-4 py-2 rounded-full text-sm font-semibold"
                v-html="tagElements"
            ></div>
          </div>
        </div>
        <!-- Check it out -->
        <div class="bg-gradient-to-br bg-[#181e24] rounded-xl p-6 shadow-xl">
          <h3 class="text-2xl font-semibold mb-6 fontVidaloka text-white text-center md:text-left">Check it out</h3>
          <div class="flex flex-col sm:flex-row gap-6">
            <a
                v-if="blok.live_website?.cached_url"
                :href="blok.live_website.cached_url"
                target="_blank"
                rel="noopener"
                class="justify-center md:justify-start group flex items-center gap-4  bg-[#0b3948] hover:bg-[#12303a] transition rounded-lg px-6 py-4 shadow-md cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-10 h-10 text-white  transition">
                <path d="M12 .297a12 12 0 00-3.794 23.4c.6.113.82-.258.82-.577v-2.17c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.086 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.304.762-1.603-2.665-.3-5.467-1.334-5.467-5.933 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.118-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016 0c2.29-1.552 3.297-1.23 3.297-1.23.656 1.653.244 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.63-5.48 5.922.432.372.816 1.104.816 2.227v3.3c0 .322.216.694.825.576A12 12 0 0012 .297z"/>
              </svg>
              <span class="text-white text-lg font-medium  transition">Live Website</span>
            </a>
            <a
                v-if="blok.github?.cached_url"
                :href="blok.github.cached_url"
                target="_blank"
                rel="noopener"
                class="justify-center md:justify-start group flex items-center gap-4 bg-[#693a52] hover:bg-[#503243] transition rounded-lg px-6 py-4 shadow-md cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-10 h-10 text-white transition">
                <path d="M12 .297a12 12 0 00-3.794 23.4c.6.113.82-.258.82-.577v-2.17c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.086 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.304.762-1.603-2.665-.3-5.467-1.334-5.467-5.933 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.118-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016 0c2.29-1.552 3.297-1.23 3.297-1.23.656 1.653.244 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.63-5.48 5.922.432.372.816 1.104.816 2.227v3.3c0 .322.216.694.825.576A12 12 0 0012 .297z"/>
              </svg>
              <span class="text-white text-lg font-medium  transition">GitHub</span>
            </a>
          </div>
        </div>


      </div>


      <div class="order-1 md:order-2 md:col-start-2 md:col-end-3">
        <h2 class="text-2xl mb-2 fontVidaloka">Problems & Solutions</h2>
        <p class="md:text-base text-sm mb-4 leading-relaxed">{{ blok.problems }}</p>

        <p class="md:text-base text-sm leading-relaxed">{{ blok.solutions }}</p>
      </div>

    </div>

    <!-- BACK BUTTON -->
    <div class="text-center">
      <a :href="blok.back_home.cached_url" class="primary-btn inline-block">back</a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { renderRichText } from '@storyblok/vue';

const props = defineProps({
  blok: Object
});

const projectDescription = computed(() => renderRichText(props.blok.description));
const tagElements = computed(() => renderRichText(props.blok.tags));

</script>

<style scoped>
.fontVidaloka {
  font-family: "Vidaloka", serif;
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


</style>
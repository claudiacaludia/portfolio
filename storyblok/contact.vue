<template>
  <div
      v-editable="blok"
      class="w-full px-8 ld:py-16 md:px-16 py-12 mt-4 flex flex-col items-center text-center"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      id="contact"
  >
    <h2 class="text-4xl text-[#FBF7F3] mt-8">
      {{ blok.title }}
    </h2>
<!--    <div class="text-[#FBF7F3] text-base z-20 mt-3 ">
      <div v-html="textdesc"></div>
    </div>-->
    <a
        v-if="blok.mail.email"
        :href="'mailto:' + blok.mail.email"
        class="primary-btn"
    >Contact me</a>
  </div>
<!--  <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ">
    <li>
      <div class="timeline-middle">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
        >
          <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="timeline-start mb-10 md:text-end">
        <time class="font-mono italic">1984</time>
        <div class="text-lg font-black">First Macintosh computer</div>
        The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
        personal computer. It played a pivotal role in establishing desktop publishing as a general
        office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
        in a beige case with integrated carrying handle; it came with a keyboard and single-button
        mouse.
      </div>
      <hr />
    </li>
    <li>
      <hr />
      <div class="timeline-middle">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
        >
          <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="timeline-end md:mb-10">
        <time class="font-mono italic">1998</time>
        <div class="text-lg font-black">iMac</div>
        iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
        been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
        and has evolved through seven distinct forms
      </div>
      <hr />
    </li>
    <li>
      <hr />
      <div class="timeline-middle">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
        >
          <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="timeline-start mb-10 md:text-end">
        <time class="font-mono italic">2001</time>
        <div class="text-lg font-black">iPod</div>
        The iPod is a discontinued series of portable media players and multi-purpose mobile devices
        designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
        8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
        million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
        over 20 years, the iPod brand is the oldest to be discontinued by Apple
      </div>
      <hr />
    </li>
    <li>
      <hr />
      <div class="timeline-middle">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
        >
          <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="timeline-end md:mb-10">
        <time class="font-mono italic">2007</time>
        <div class="text-lg font-black">iPhone</div>
        iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile
        operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
        January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
        of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
        accounts for 15.6% of global smartphone market share
      </div>
      <hr />
    </li>
    <li>
      <hr />
      <div class="timeline-middle">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
        >
          <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="timeline-start mb-10 md:text-end">
        <time class="font-mono italic">2015</time>
        <div class="text-lg font-black">Apple Watch</div>
        The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
        tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
        iOS and other Apple products and services
      </div>
    </li>
  </ul>-->
</template>



<script setup>
import { defineProps, computed } from 'vue';
import { renderRichText } from '@storyblok/vue';

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

const textdesc = computed(() => {
  return renderRichText(props.blok.text);
});
</script>

<style scoped>
</style>

<template>
  <div v-editable="blok"
       class="relative container my-12">
      <div >
        <StoryblokComponent :blok="blok.project_cards[0]" />
      </div>
      <div>
        <StoryblokComponent :blok="blok.project_cards[1]" />
      </div>
      <div>
        <StoryblokComponent :blok="blok.project_cards[2]" />
      </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>


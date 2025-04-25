<template>
  <div v-editable="blok" class="">
    <div class="area text-white flex justify-around py-3 uppercase">
      <section class="container">
        <div class="list">
          <div class="item">
            <span class="item-txt">WEB DEVELOPMENT</span>
            <span class="item-d">
              <span class="item-dot dot-t">•</span>
            </span>
            <span class="item-txt">UI/UX DESIGN</span>
            <span class="item-d">
              <span class="item-dot dot-b">•</span>
            </span>
            <span class="item-txt">WEB DEVELOPMENT</span>
            <span class="item-d">
              <span class="item-dot dot-t">•</span>
            </span>
            <span class="item-txt">UI/UX DESIGN</span>
            <span class="item-d">
              <span class="item-dot dot-b">•</span>
            </span>
          </div>
        </div>
        <div class="list">
          <div class="item">
            <span class="item-txt">WEB DEVELOPMENT</span>
            <span class="item-d">
              <span class="item-dot dot-t">•</span>
            </span>
            <span class="item-txt">UI/UX DESIGN</span>
            <span class="item-d">
              <span class="item-dot dot-b">•</span>
            </span>
            <span class="item-txt">WEB DEVELOPMENT</span>
            <span class="item-d">
              <span class="item-dot dot-t">•</span>
            </span>
            <span class="item-txt">UI/UX DESIGN</span>
            <span class="item-d">
              <span class="item-dot dot-b">•</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style scoped>
.area {
  border-bottom: solid 4px;
  border-top: solid 4px;
  border-image: linear-gradient(90deg, #0D5D77, #8D3562) 1;
}

/* Loop animation */
.container {
  display: flex;
  white-space: nowrap;
}

.list {
  display: flex;
  align-items: start;
  -webkit-animation: loop 20s infinite linear;
  animation: loop 20s infinite linear;
}

.item-txt {
  font-size: 25px;
  line-height: 25px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.item-d {
  display: inline;
}

.item-dot {
  max-width: 5px;
  max-height: 5px;
  margin: 0 50px;
  padding: 10px;
  border-radius: 50%;
  display: inline-block;
  transform: translateY(-30px);
  vertical-align: middle;
  line-height: 50px;
  color: var(--primary-color-pink);
}

.dot-b { background-color: rgba(105, 58, 82, 0); }
.dot-t { background-color: rgba(49, 58, 76, 0); }

@keyframes loop {
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
</style>
<template>
  <div
      v-editable="blok"
      class="bg-[#0b3948] quoteDiv"
  >
    <p class="quote text-white text-4xl sm:text-9xl uppercase m-auto text-center py-24" data-aos="fade-up"> {{blok.quotetext}}</p>
    <p class="secondQuote text-white text-4xl sm:text-9xl uppercase m-auto text-center py-24">except the paint never dries.</p>
<!--    für mobil: vllt beim scrollen ab bestimmter höhe zweiten text anzeigen-->

  </div>
</template>

<script setup>
  defineProps({ blok: Object });

  onMounted(() => {
    if (navigator.userAgent.match(/iPhone/i)   || navigator.userAgent.match(/iPad/i)  || navigator.userAgent.match(/Android/i)) {
      document.querySelector('.quoteDiv').addEventListener('click', () => {
        let quote = document.querySelector('.quote');
        let secquote = document.querySelector('.secondQuote');
        if(quote.style.opacity === 0) {
          quote.style.opacity = 1;
          secquote.style.opacity = 0;
        } else if(secquote.style.opacity === 0) {
          secquote.style.opacity = 1;
          quote.style.opacity = 0;
        }
      });
    }
  });
</script>


<style scoped>
  .quoteDiv {
    position: relative;
    overflow: hidden;
  }
  .quote, .secondQuote {
    font-family: "Vidaloka", serif;
    font-weight: 400;
    transition: all ease-in-out 0.5s;
    width: 80vw;
  }
  .secondQuote {
    transition: opacity 0.7s ease-in-out;
    opacity: 0;
    position: absolute;
    top: 0;
    left: calc(50% - 40vw) ;
  }
  @media screen and (max-width: 500px){
    .quote, .secondQuote {
      height: 270px;
    }
    .secondQuote{
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: center;

    }
  }
  .quoteDiv:hover {
    background-color: var(--primary-color-purple);
    transition: background-color 0.7s ease;
    .quote {
      opacity: 0;
    }
    .secondQuote {
      opacity: 1;
    }

  }
</style>
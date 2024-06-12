export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Vidaloka&display=swap'},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap'},
      ],
      bodyAttrs: {
        class: 'font-sans'
      },
    },
  },
  css: [
    '@/assets/css/roboto.css',
    'aos/dist/aos.css'
  ],
  plugins: [
    '@/plugins/aos.js'
  ],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'rvp956EMV3L9Q4par4XPDAtt',
        apiOptions: {
          region: '' // Set 'US" if your space is created in US region (EU default)
        }
      },
    ],
    '@nuxtjs/tailwindcss',
  ]
})

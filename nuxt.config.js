import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Claudia Pemmer Portfolio',
      link: [
        {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true},
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css",
        },
      ],
      bodyAttrs: {
        class: 'font-sans'
      },
      meta: [
        {
          name: 'description',
          content: 'Portfolio Claudia Pemmer'
        }
      ]
    },
  },
  css: [
    '@/assets/css/variables.css',
    'aos/dist/aos.css',
    '@/assets/css/fonts.css',
    '@/assets/css/main.css'
  ],

  plugins: [
    '@/plugins/aos.js'
  ],

  modules: [[
    '@storyblok/nuxt',
    {
      accessToken: 'rvp956EMV3L9Q4par4XPDAtt',
      apiOptions: {
        region: '' // Set 'US" if your space is created in US region (EU default)
      }
    },
  ], '@nuxt/image'],

  compatibilityDate: '2025-03-17'
})
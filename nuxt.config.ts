// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      title:"",
      htmlAttrs:{
        lang:"id"
      },
      meta:[
        {
          charset:'utf-8'
        },
        {
          name:'viewport',
          content:'width=device-width, initial-scale=1'
        }
      ]
    }
  },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      // ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
      "acceptHMRUpdate"
    ],
  },
  devtools: { enabled: true },
})
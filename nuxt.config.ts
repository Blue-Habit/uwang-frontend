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
  devtools: { enabled: true },
  imports:{
    dirs:["common","store"]
  },
  nitro:{
    routeRules:{
      "/api/**":{
        proxy:`${import.meta.env.API_BASE_URL}/**`
      }
    },
    devProxy:{
      "/api/**":{
        target:"https://dev-uwang.bluhabit.id/api/**",
        changeOrigin:true,
        prependPath:true
      }
    }
  }
})
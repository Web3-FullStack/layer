import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: [process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@vue-macros/nuxt',
    'nuxt-lodash',
    '@nuxtjs/supabase',
    'nuxt-gtag',
    '@pinia/nuxt'
  ],
  alias: { '#w3fs': resolve('./') },
  components: [
    { path: '#w3fs/fs-components', prefix: 'FS', pathPrefix: false }
  ]
})

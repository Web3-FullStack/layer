export default defineAppConfig({
  ui: {
    icons: {
      dynamic: true
    }
  },
  // myLayer: {
  //   name: 'Hello from Nuxt layer'
  // }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    // myLayer?: {
    //   /** Project name */
    //   name?: string
    // }
  }
}

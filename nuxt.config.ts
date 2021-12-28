export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "ibook",
    htmlAttrs: {
      lang: "pt_BR",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["normalize.css/normalize.css", "@/assets/scss/base.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/accessor"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "@/components/templates",
    "@/components/atoms",
    "@/components/molecules",
    "@/components/organisms",
    "@/components/bosons",
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/style-resources",
  ],

  styleResources: {
    scss: ["@/components/bosons/*.scss"],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "cookie-universal-nuxt"],

  axios: {
    baseURL: "http://localhost:3333",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },
};

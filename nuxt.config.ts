import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-03-18',
  srcDir: './src',
  plugins: ['@/../plugins/pinia.ts'],
  modules: ['@bootstrap-vue-next/nuxt', 'nuxt-typed-router', 'nuxt-typed-router'],
  css: ['bootstrap/dist/css/bootstrap.min.css']
})

import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@bootstrap-vue-next/nuxt`
     */
    ["bootstrapVueNext"]: typeof import("@bootstrap-vue-next/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-typed-router`
     */
    ["nuxtTypedRouter"]: typeof import("nuxt-typed-router").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@bootstrap-vue-next/nuxt`
     */
    ["bootstrapVueNext"]?: typeof import("@bootstrap-vue-next/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-typed-router`
     */
    ["nuxtTypedRouter"]?: typeof import("nuxt-typed-router").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@bootstrap-vue-next/nuxt", Exclude<NuxtConfig["bootstrapVueNext"], boolean>] | ["nuxt-typed-router", Exclude<NuxtConfig["nuxtTypedRouter"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@bootstrap-vue-next/nuxt`
     * @see https://www.npmjs.com/package/@bootstrap-vue-next/nuxt
     */
    ["bootstrapVueNext"]: typeof import("@bootstrap-vue-next/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-typed-router`
     * @see https://www.npmjs.com/package/nuxt-typed-router
     */
    ["nuxtTypedRouter"]: typeof import("nuxt-typed-router").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@bootstrap-vue-next/nuxt`
     * @see https://www.npmjs.com/package/@bootstrap-vue-next/nuxt
     */
    ["bootstrapVueNext"]?: typeof import("@bootstrap-vue-next/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-typed-router`
     * @see https://www.npmjs.com/package/nuxt-typed-router
     */
    ["nuxtTypedRouter"]?: typeof import("nuxt-typed-router").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@bootstrap-vue-next/nuxt", Exclude<NuxtConfig["bootstrapVueNext"], boolean>] | ["nuxt-typed-router", Exclude<NuxtConfig["nuxtTypedRouter"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },
  }
  interface PublicRuntimeConfig {
   bootstrapVueNext: {
      directives: Array<string>,

      plugin: any,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }
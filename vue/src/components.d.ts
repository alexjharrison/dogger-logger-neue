import Vue from "vue";

// declare module '@vue/runtime-core' works for vue 3
// declare module 'vue' works for vue2 + vue 3
declare module "vue" {
  export interface GlobalComponents {
    "p-button": typeof import("primevue/button")["default"];
    divider: typeof import("primevue/divider")["default"];
  }
  export type PluginFunction<T> = (app: Vue.App, ...options: any[]) => any;
}

export {};

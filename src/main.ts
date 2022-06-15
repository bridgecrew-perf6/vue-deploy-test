import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueScrollTo from "vue-scrollto";
import { createHead } from '@vueuse/head'





const opt = {
    container: "body",
    duration: 100,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
}

const head = createHead()

createApp(App).use(store).use(router).use(VueScrollTo, opt).use(head).mount("#app");

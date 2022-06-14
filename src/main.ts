import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueScrollTo from "vue-scrollto";





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

createApp(App).use(store).use(router).use(VueScrollTo, opt).mount("#app");

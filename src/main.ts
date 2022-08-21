import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import gsap from "gsap";

import "./assets/main.css";

const app = createApp(App);

app.use(router).use(gsap);

app.mount("#app");

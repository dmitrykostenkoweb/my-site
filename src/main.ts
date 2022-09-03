import { createApp } from "vue";
import gsap from "gsap";
import App from "./App.vue";
import "./assets/main.css";

const app = createApp(App);
app.use(gsap);
app.mount("#app");

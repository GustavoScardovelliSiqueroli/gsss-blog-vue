import router from "./router";
import { createApp } from "vue";
import "./css/style.css";
import App from "./App.vue";

createApp(App).use(router).mount("#app");

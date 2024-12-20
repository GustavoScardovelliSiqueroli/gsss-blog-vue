import router from "./router";
import { createApp } from "vue";
import "./css/style.css";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";

createApp(App).use(router).mount("#app");

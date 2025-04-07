window.process = { env: {} };
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import addStores from "./store";
import "./style.css";

const app = createApp(App);
addStores(app);
app.use(router);
app.mount("#app");

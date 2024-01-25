import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { registerMicroApps, start } from "qiankun";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// 在主应用中注册子应用
registerMicroApps([
  {
    name: "sub-app-1",
    entry: "//localhost:8081",
    container: "#subapp-viewport",
    activeRule: "/sub-app-1",
  },
  {
    name: "sub-app-3",
    entry: "//localhost:8083",
    container: "#subapp-viewport",
    activeRule: "/sub-app-3",
  },
]);

app.mount("#app");

start();

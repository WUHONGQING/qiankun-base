import { createApp } from 'vue';
import App from './App.vue';
import { registerMicroApps, start } from 'qiankun';

const app = createApp(App);

// ...其他Vue相关配置

app.mount('#app');

// 注册子应用
registerMicroApps([
  { name: 'sub-app-1', entry: '//localhost:8081', container: '#subapp-viewport', activeRule: '/sub-app-1' },
  { name: 'sub-app-2', entry: '//localhost:8082', container: '#subapp-viewport', activeRule: '/sub-app-2' },
]);

// 启动主应用
start();

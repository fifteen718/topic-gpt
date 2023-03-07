import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';

// 导入样式
import 'element-plus/dist/index.css';
import './assets/index.less';

const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.use(createPinia());

app.mount('#app');

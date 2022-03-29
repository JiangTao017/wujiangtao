import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";
import myplugin from './plugins/myplugin'



Vue.use(myplugin)
Vue.use(ElementUI);

Vue.config.productionTip = false;


// 拦截ajax
if (process.env.NODE_ENV === "development") {
  require("./mock")
}


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

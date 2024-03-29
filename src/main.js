import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./data/store";

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount("#app");
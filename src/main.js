import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'

export const bus = new Vue();

Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://www.omdbapi.com/?apikey=b76b385c&page=1&type=movie&Content-Type=application/json'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");

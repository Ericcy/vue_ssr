import Vue from 'vue';
import App from './app.vue';

console.log(Vue)
function init () {
  new Vue({
    render: (h)=>h(App)
  }).$mount('#app')
}
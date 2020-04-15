import Vue from 'vue';
import App from './app.vue';
import './a'
let a = 10;
console.log(a)

let fn = () => { console.log('==>') }
fn()
@log
class am {
  a = 1
}

function log (target) {
    console.log(target,'-------------')
}

function init () {
  new Vue({
    render: (h)=>h(App)
  }).$mount('#app')
}

init()
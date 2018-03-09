import Vue from 'vue'
import App from './App.vue'
import test from './test.vue'
import message from './message.vue'
Vue.component('test',test);
Vue.component('message',message);


new Vue({
  el: '#app',
  render: h => h(App)
});

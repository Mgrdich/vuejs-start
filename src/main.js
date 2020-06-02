import Vue from 'vue';
import App from './App.vue';

export const bus = new Vue();

Vue.directive('awesome',{
      bind(element,binding,vNode){
         element.innerHTML = 'Hello World';
      }
});

new Vue({
  el: "#app",
  render: h => h(App)
});

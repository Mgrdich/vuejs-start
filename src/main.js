import Vue from 'vue';
import App from './App.vue';

export const bus = new Vue();

Vue.directive('awesome', {
  bind(element, binding, vNode) {
    element.innerHTML = 'Hello World';
    element.style.color = (binding.modifiers.red) ? 'red' : 'blue';
    element.style.fontSize = (binding.modifiers.red) ? '12px' : '16px';

  },
  inserted(element, binding, vNode) {
    //access to the parent Node
  },
  update(element, binding, vNode,oldNode) {
    console.log('update');
  },
  componentUpdated(element, binding, vNode,oldNode){
    console.log('updated');
  },
  unbind(element, binding, vNode,oldNode){
    console.log('unbind');
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});

import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {routes} from "./routes";

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

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.root = process.env.api;
Vue.http.interceptors.push((req,next)=>{
  console.log(req);
});

const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});

<template>
  <div>
    <app-header
      @componentRender="changeComponent"
    />
    <keep-alive>
      <component :is="compRender"></component>
    </keep-alive>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from "./Components/Header_Footer/Header";
  import Footer from "./Components/Header_Footer/Footer";
  import MyForm from "./Components/myForms/MyForm";
  import Home from "./Components/Home/Home";
  import Development from "./Components/Development/Development";
  import Transitions from "./Components/Transitions/Transitions";
  import Technologies from "./Components/Tech/Technologies";
  import Requests from "./Components/Requests/Requests";

  export default {
    name: "App",
    components: {
      'app-header': Header,
      'app-footer': Footer,
      'comp-form': MyForm,
      'comp-home': Home,
      'comp-directives':Development,
      'comp-transition':Transitions,
      'comp-technologies':Technologies,
      'comp-requests':Requests
    },
    data() {
      return {
        compRender: 'comp-home'
      }
    },
    methods: {
      changeComponent(e) {
        switch (e) {
          case 'Forms':
            this.compRender = 'comp-form';
            break;
          case 'Directives':
            this.compRender = 'comp-directives';
            break;
          case 'Transitions':
            this.compRender = 'comp-transition';
            break;
          case 'Technologies':
            this.compRender = 'comp-technologies';
            break;
          case 'Requests':
            this.compRender = 'comp-requests';
            break
          default:
            this.compRender = 'comp-home';
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "assets/style";
</style>

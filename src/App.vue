<template>
  <div>
    <app-header
      @componentRender="changeComponent"
    />
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from "./Components/Header_Footer/Header";
  import Footer from "./Components/Header_Footer/Footer";

  export default {
    name: "App",
    components: {
      'app-header': Header,
      'app-footer': Footer,
    },
    methods: {
/*
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
*/
    }
  }
</script>

<style lang="scss">
  @import "assets/style";
</style>

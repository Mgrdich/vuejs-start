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

  export default {
    name: "App",
    components: {
      'app-header': Header,
      'app-footer': Footer,
      'comp-form': MyForm,
      'comp-home': Home,
      'comp-directives':Development,
      'comp-transition':Transitions
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
          default:
            this.compRender = 'comp-home';
        }
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;1,400&display=swap');

  $main_color: #2196F3;
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }

  .container {
    min-height: 81vh;
    box-sizing: border-box;
    padding: 20px;
    width: 50%;
    margin: 0 auto;
  }

  .user_profile {
    border: 1px solid #2196F3;
    padding: 10px 20px;

    &:not(:first-child) {
      margin-top: 20px;
    }
  }

  .flex {
    display: flex;
  }

  .animate {
    transition: all 0.1s;
    -webkit-transition: all 0.1s;
  }

  .btn {
    position: relative;
    padding: 3px 15px;
    margin: 0px 10px 10px 0px;
    float: left;
    border-radius: 10px;
    font-size: 15px;
    color: #FFF;
    text-decoration: none;
    background-color: #3498DB;
    border-bottom: 5px solid #2980B9;
    text-shadow: 0px -2px #2980B9;
  }
  .bg-success {
    background-color: darkgreen;
    color: #fff;
    display: block;
    width: 100%;
    padding: 20px;
  }
</style>

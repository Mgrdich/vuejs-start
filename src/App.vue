<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <comp-profile
        :name="name"
        :info="info"
        @UpdateName="updateName"
        :updateMyName="updateName"
      />
      <comp-friends/>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
    import Header from "./Components/Header_Footer/Header";
    import Footer from "./Components/Header_Footer/Footer";
    import Profile from "./Components/User/Profile";
    import Friends from "./Components/User/Friends";
    export default {
      name: "App",
      components: {
        'app-header':Header,
        'app-footer':Footer,
        'comp-profile':Profile,
        'comp-friends':Friends
      },
      data() {
          return {
            name: 'Francis',
            toggle:false,
            info:{
              mother:"Sevan",
              father:"Hakop"
            }
          }
        },
      methods:{
        updateName() {
          this.toggle = !this.toggle;
          this.name = (this.toggle) ? 'Francis Bacon' : 'Francis 3askari';
        }
      }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;1,400&display=swap');
    body {
      font-family: 'Roboto', sans-serif;
      margin:0;
      padding: 0;
    }
    .container {
      min-height: 81vh;
      box-sizing: border-box;
      padding: 20px;
    }
</style>

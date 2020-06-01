<template>
  <div class="container">
    <comp-profile
      :name="name"
      :info="info"
      @UpdateName="updateName"
      :updateMyName="updateName"
    />
    <comp-friends/>
    <comp-habilites>
      <ul slot="main_hab">
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
      </ul>
      <ul slot="sec_hab">
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
      </ul>
    </comp-habilites>
  </div>
</template>

<script>
  import Friends from "../User/Friends";
  import Profile from "../User/Profile";
  import Habilities from "../User/Habilities";

    export default {
        name: "Home",
      components:{
        'comp-profile': Profile,
        'comp-friends': Friends,
        'comp-habilites': Habilities,
      },
      data(){
          return {
            name: 'Francis',
            toggle: false,
            info: {
              mother: "Sevan",
              father: "Hakop"
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

